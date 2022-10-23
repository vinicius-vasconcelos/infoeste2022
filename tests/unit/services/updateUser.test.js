const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/user');
const service = require('../../../src/services/user');

describe('Services de Users - Teste da função UPDATE', function (){
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se alterar um usuário com sucesso', async function() {
    const input = {
      fullName: 'Vinicius Souza Vasconcelos dos Santos',
      nickname: 'VinVaz',
    };
    const output = {
      id: 32,
      fullName: 'Vinicius Souza Vasconcelos dos Santos',
      nickname: 'VinVaz',
    };
    sinon.stub(model, 'update').resolves(output);

    const resultObject = await service.update(VALID_ID, input);
    expect(resultObject).to.have.property('id');
    expect(resultObject).to.have.property('fullName');
    expect(resultObject).to.have.property('nickname');
    expect(resultObject).to.be.deep.equal({
      id: 32,
      fullName: 'Vinicius Souza Vasconcelos dos Santos',
      nickname: 'VinVaz',
    });

    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando id não for encontrado', async function() {
    const input = {
      fullName: 'Vinicius Souza Vasconcelos dos Santos',
      nickname: 'VinVaz',
    };
    sinon.stub(model, 'getById').resolves(undefined);

    try {
      const result = await service.update(INVALID_ID, input);
      expect(result).to.be.true;
    } catch (error) {
      expect(error.message).to.be.equal('Usuário não encontrado');
    }

    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando fullName tiver menos que 3 caracteres', async function (){
    const input = {
      fullName: 'Vi',
      nickname: 'VinD',
    }

    try {
      const result = await service.update(VALID_ID, input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
    }
  });

  it('Deve-se lançar uma exceção, quando fullName tiver mais que 40 caracteres', async function () {
    const input = {
      fullName: 'Vinicius Souza Vasconcelos dos Santos da Silva Pereira José',
      nickname: 'VinD',
    }

    try {
      const result = await service.update(VALID_ID, input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
    }
  });

  it('Deve-se lançar uma exceção, quando nickname tiver menos que 3 caracteres', async function (){
    const input = {
      fullName: 'Vinicius Vasconcelos',
      nickname: 'Vi',
    }

    try {
      const result = await service.update(VALID_ID, input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
    }
  });

  it('Deve-se lançar uma exceção, quando nickname tiver mais que 8 caracteres', async function () {
    const input = {
      fullName: 'Vinicius Vasconcelos',
      nickname: 'v1n1c1uz123',
    }

    try {
      const result = await service.update(VALID_ID, input);
      expect(result).to.be.true
    } catch (error) {
      expect(error.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
    }
  });
});