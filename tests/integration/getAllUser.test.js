const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração user - Teste do método GET na rota /user', function() {
  it('Deve-se listar jogos com sucesso', async function() {
    const output = [
      { id: 67, fullName: 'Ronaldo Nazário', nickname: 'theBest9' },
      { id: 68, fullName: 'Ronaldo de Assis', nickname: 'bestR10' }
    ]
    sinon.stub(connection, 'execute').resolves([output]);

    const response = await chai.request(app).get('/user');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      { id: 67, fullName: 'Ronaldo Nazário', nickname: 'theBest9' },
      { id: 68, fullName: 'Ronaldo de Assis', nickname: 'bestR10' }
    ]);

    sinon.restore();
  });

  it('Deve-se retornar um array vazio quando não tem dados cadastrados', async function() {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).get('/user');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([]);

    sinon.restore();
  });
});
