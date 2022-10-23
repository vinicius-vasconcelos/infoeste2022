const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/game');
const service = require('../../../src/services/game');

describe('Services de Games - Teste da função GETALL', function () {
  it('Deve-se listar todos jogos com sucesso', async function () {
   const output = [
      { id: 67, name: 'Need For Speed Underground' },
      { id: 68, name: 'Need For Speed Underground 2' },
    ];
    sinon.stub(model, 'getAll').resolves(output);

    const resultArray = await service.getAll();
    expect(resultArray).to.be.an('array');
    expect(resultArray).to.have.lengthOf(2);
    expect(resultArray).to.be.deep.equal([
      { id: 67, name: 'Need For Speed Underground' },
      { id: 68, name: 'Need For Speed Underground 2' },
    ]);

    sinon.restore();
  });
});