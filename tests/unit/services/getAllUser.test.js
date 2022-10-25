const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/user');
const service = require('../../../src/services/user');

describe('Services de Users - Teste da função GETALL', function () {
  it('Deve-se listar todos usuário com sucesso', async function () {
    const output = [
      {
        id: 67,
        fullName: 'Vinicius Vasconcelos',
        nickname: 'VinD',
      },
      {
        id: 68,
        fullName: 'Clovis Soares da Mata',
        nickname: 'clo018',
      }
    ];
    sinon.stub(model, 'getAll').resolves(output);

    const resultArray = await service.getAll();
    expect(resultArray).to.be.an('array');
    expect(resultArray).to.have.lengthOf(2);
    expect(resultArray).to.be.deep.equal([
      {
        id: 67,
        fullName: 'Vinicius Vasconcelos',
        nickname: 'VinD',
      },
      {
        id: 68,
        fullName: 'Clovis Soares da Mata',
        nickname: 'clo018',
      }
    ]);

    sinon.restore();
  });
});