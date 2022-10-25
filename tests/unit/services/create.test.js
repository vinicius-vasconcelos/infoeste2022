const { expect } = require('chai');
const service = require('../../../src/services/user');
const model = require('../../../src/models/user');
const sinon = require('sinon');

describe('Realizando testes de serviço de usuário', function() {
    it('Se passado name válido, deve ser cadastrado', async function() {
        const input = 'vinicius'
        const output= {
            id: 99,
            name: 'vinicius'
        }

        sinon.stub(model, 'create').resolves(output);
          
        const result = await service.create(input);
        expect(result).to.be.an('object');
        expect(result.name).to.be.equal('vinicius');
        expect(result).to.have.property('name');
        expect(result).to.have.property('id')

        sinon.restore();
    });
});