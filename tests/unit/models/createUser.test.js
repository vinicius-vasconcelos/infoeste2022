const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/user');

describe('Model de Users - Teste da função CREATE', function() {
  it('Deve-se cadastrar um usuário com sucesso', async function() {
    const input = {
      fullName: 'Vinicius Vasconcelos',
      nickname: 'VinD',
    }
    const output = {
      id: 67,
      fullName: 'Vinicius Vasconcelos',
      nickname: 'VinD',
    }
    sinon.stub(connection, 'execute').resolves([{ insertId: 67 }]);
    const resultObject = await model.create(input);

    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('fullName');
    expect(resultObject).to.have.property('nickname');
    expect(resultObject).to.be.deep.equal(output);

    sinon.restore();
  });
});