const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/user');

describe('Model de Users - Teste da função DROP', function() {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se deletar um usuário com sucesso', async function() {
    const output = [
      {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      },
      undefined
    ]
    sinon.stub(connection, 'execute').resolves(output);
    
    const resultArray = await model.drop(VALID_ID);
    expect(resultArray[0].affectedRows).to.be.equal(1);
    sinon.restore();
  });

  it('Deve-se retornar "undefined" quando id passado for inválido', async function() {
    sinon.stub(connection, 'execute').resolves(undefined);
    
    const resultArray = await model.drop(INVALID_ID);
    expect(resultArray).to.not.be.an('array');
    expect(resultArray).to.be.an('undefined');
    sinon.restore();
  });
});