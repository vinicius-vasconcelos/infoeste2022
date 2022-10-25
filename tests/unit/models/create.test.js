const { expect } = require('chai');
const model = require('../../../src/models/user');

describe('Realizando testes de modelo de usuário', function() {
    it('Deve-ser retornar o usuário criado', async function() {
        const result = await model.create();
        expect(result).to.be.an('object');
        expect(result).to.have.property('id');
    });
});