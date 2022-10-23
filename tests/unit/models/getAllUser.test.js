const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/database/connection');
const model = require('../../../src/models/user');

describe('Model de Users - Teste da função GETALL', function() {
  // before(function (){
  //   sinon.stub(model, 'getAll')
  //     .onFirstCall().resolves(outputValidUsersArray)
  //     .onSecondCall().resolves(outputValidUsersArray)
  //     .onThirdCall().resolves([]);
  // });

  it('Deve-se listar todos usuários com sucesso', async function() {
    const output = [
      { id: 67, fullName: 'Vinicius Vasconcelos', nickname: 'VinD' },
      { id: 68, fullName: 'Vinícius José Paixão de Oliveira Júnior', nickname: 'ViniJr' },
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