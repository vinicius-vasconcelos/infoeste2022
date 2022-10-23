const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/game');

describe('Model de Games - Teste da função GETALL', function() {
  it('Deve-se listar todos jogos com sucesso', async function() {
    const output = [
      { id: 67, name: 'Need For Speed Underground 2' },
      { id: 68, name: 'Need For Speed Most Wanted' },
    ];
    sinon.stub(connection, 'execute').resolves([output]);
    
    const resultArray = await model.getAll();
    expect(resultArray).to.be.an('array');
    expect(resultArray).to.have.lengthOf(2);
    expect(resultArray).to.be.deep.equal(output);
    sinon.restore();
  });

  it('Deve-se retornar um array vazio, quando não tiver dados salvos', async function() {
    sinon.stub(connection, 'execute').resolves([[]]);
    
    const resultArray = await model.getAll();
    expect(resultArray).to.be.an('array');
    expect(resultArray).to.be.empty;
    sinon.restore();
  });
});