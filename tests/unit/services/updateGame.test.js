const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/game');
const service = require('../../../src/services/game');

describe('Services de Games - Teste da função UPDATE', function (){
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se alterar um jogo com sucesso', async function() {
    const input = { name: 'Need For Speed' };
    const output = {
      id: 32,
      name: 'Need For Speed',
    };
    sinon.stub(model, 'update').resolves(output);

    const resultObject = await service.update(VALID_ID, input);
    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('name');
    expect(resultObject).to.be.deep.equal({
      id: 32,
      name: 'Need For Speed',
    });

    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando id não for encontrado', async function() {
    const input = { name: 'Need For Speed' };
    sinon.stub(model, 'getById').resolves(undefined);

    try {
      const result = await service.update(INVALID_ID, input);
      expect(result).to.be.true;
    } catch (error) {
      expect(error.message).to.be.equal('Jogo não encontrado');
    }

    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando name tiver menos que 3 caracteres', async function() {
    const input = { name: 'Vi' };

    try {
      const result = await service.update(VALID_ID, input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Name errado! Deve conter entre 3 e 50 caracteres')
    }
  });

  it('Deve-se lançar uma exceção, quando name tiver mais que 50 caracteres', async function() {
    const input = { name: 'Super Mega Blaster Game™ 4 V2222.3333.111 - The Epic Game' };

    try {
      const result = await service.update(INVALID_ID, input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Name errado! Deve conter entre 3 e 50 caracteres')
    }
  });
});