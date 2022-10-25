const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/game');

describe('Model de Games - Teste da função UPDATE', function() {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;
  const input = {
    name: 'Need For Speed Underground',
  };

  it('Deve-se alterar um jogo com sucesso', async function() {
    const output = [
      {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: 'Rows matched: 1  Changed: 1  Warnings: 0',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 1
      },
      undefined
    ];
    sinon.stub(connection, 'execute').resolves(output);

    const resultArray = await model.update(VALID_ID, input);
    expect(resultArray).to.be.an('array');
    expect(resultArray[0].affectedRows).to.be.equal(1);
    expect(resultArray[0].changedRows).to.be.equal(1);
    sinon.restore();
  });

  it('Não deve-se alterar quando id passado for inválido', async function() {
    const output = [
      {
        fieldCount: 0,
        affectedRows: 0,
        insertId: 0,
        info: 'Rows matched: 0  Changed: 0  Warnings: 0',
        serverStatus: 2,
        warningStatus: 0,
        changedRows: 0
      },
      undefined
    ]
    sinon.stub(connection, 'execute').resolves(output);
    
    const resultArray = await model.update(INVALID_ID, input);
    expect(resultArray).to.be.an('array');
    expect(resultArray[0].affectedRows).to.be.equal(0);
    expect(resultArray[0].changedRows).to.be.equal(0);
    sinon.restore();
  });
});