const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/user');

describe('Model de Users - Teste da função GETBYID', function() {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se listar um usuário com sucesso', async function() {
    const output = {
      id: 1,
      fullName: 'Vinicius Vasconcelos',
      nickname: 'VinD',
    }
    sinon.stub(connection, 'execute').resolves([[output]]);
    
    const resultObject = await model.getById(VALID_ID);
    expect(resultObject).to.be.an('object');
    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('fullName');
    expect(resultObject).to.have.property('nickname');
    expect(resultObject).to.be.deep.equal(output);
    sinon.restore();
  });

  it('Deve-se retornar "undefined" quando id passado for inválido', async function() {
    sinon.stub(connection, 'execute').resolves([[undefined]]);

    const resultObject = await model.getById(INVALID_ID);
    expect(resultObject).to.not.be.an('object');
    expect(resultObject).to.be.an('undefined');
    sinon.restore();
  });
});