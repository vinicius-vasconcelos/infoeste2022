const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/game');
const service = require('../../../src/services/game');

describe('Services de Games - Teste da função GETBYID', function () {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se listar um game com sucesso', async function () {
    const output = {
      id: 68,
      name: 'Need For Speed Underground 2',
    };
    sinon.stub(model, 'getById').resolves(output);

    const resultObject = await service.getById(VALID_ID);
    expect(resultObject).to.be.an('object');
    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('name');
    expect(resultObject).to.be.deep.equal({
      id: 68,
      name: 'Need For Speed Underground 2',
    });

    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando id não for encontrado', async function() {
    sinon.stub(model, 'getById').resolves(undefined);

    try {
      const result = await service.getById(INVALID_ID);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Jogo não encontrado');
    }

    sinon.restore();
  });
});