const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/game');

describe('Model de Games - Teste da função CREATE', function() {
  it('Deve-se cadastrar um jogo com sucesso', async function() {
    const input = {
      name: 'Need For Speed Underground 2',
    };
    const output = {
      id: 67,
      name: 'Need For Speed Underground 2',
    };
    sinon.stub(connection, 'execute').resolves([{ insertId: 67 }]);

    const resultObject = await model.create(input);

    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('name');
    expect(resultObject).to.be.deep.equal(output);

    sinon.restore();
  });
});