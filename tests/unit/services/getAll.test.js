// const { expect } = require('chai');
// const service = require('../../../src/services/user');
// const model = require('../../../src/models/user');
// const sinon = require('sinon');

// describe('Realizando testes de serviço de usuário', function() {
//     it('Deveria retornar um array', async function() {
//         const output= [
//             'Vinicius',
//             'Fabison',
//             'Angélica'
//         ];

//         sinon.stub(model, 'getAll').resolves(output);
          
//         const result = await service.getAll();
//         expect(result).to.be.an('array');
//         expect(result).to.be.deep.equal([
//             'Vinicius',
//             'Fabison',
//             'Angélica'
//         ])

//         sinon.restore();
//     });
// });