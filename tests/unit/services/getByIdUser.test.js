const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/user');
const service = require('../../../src/services/user');

describe('Services de Users - Teste da função GETBYID', function () {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se listar um usuário com sucesso', async function () {
    const output = {
      id: 68,
      fullName: 'Clovis Soares da Mata',
      nickname: 'clo018',
    };
    sinon.stub(model, 'getById').resolves(output);

    const resultObject = await service.getById(VALID_ID);
    expect(resultObject).to.be.an('object');
    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('fullName');
    expect(resultObject).to.have.property('nickname');
    expect(resultObject).to.be.deep.equal({
      id: 68,
      fullName: 'Clovis Soares da Mata',
      nickname: 'clo018',
    });
    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando id não for encontrado', async function() {
    sinon.stub(model, 'getById').resolves(undefined);

    try {
      const result = await service.getById(INVALID_ID);
      expect(result).to.be.true;
    } catch (error) {
      expect(error.message).to.be.equal('Usuário não encontrado');
    }
    
    sinon.restore();
  });
});