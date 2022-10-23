const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/game');
const service = require('../../../src/services/game');

describe('Services de Games - Teste da função CREATE', function() {
  it('Deve-se cadastrar um jogo com sucesso, quando passado um input válido', async function() {
    const input = { name: 'Red Dead Redemption 2' };
    const output = { id: 67, name: 'Red Dead Redemption 2' };
    sinon.stub(model, 'create').resolves(output);
    
    const resultObject = await service.create(input);
    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('name');
    expect(resultObject).to.be.deep.equal({ id: 67, name: 'Red Dead Redemption 2' });

    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando name tiver menos que 3 caracteres', async function() {
    const input = { name: 'Vi' };

    try {
      const result = await service.create(input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Name errado! Deve conter entre 3 e 50 caracteres')
    }
  });

  it('Deve-se lançar uma exceção, quando name tiver mais que 50 caracteres', async function() {
    const input = { name: 'Super Mega Blaster Game™ 4 V2222.3333.111 - The Epic Game' };

    try {
      const result = await service.create(input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Name errado! Deve conter entre 3 e 50 caracteres')
    }
  });
});