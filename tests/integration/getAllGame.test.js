const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração game - Teste do método GET na rota /game', function() {
  it('Deve-se listar jogos com sucesso', async function() {
    const output = [
      { id: 67, name: 'GTA IV' },
      { id: 68, name: 'GTA V' }
    ];
    sinon.stub(connection, 'execute').resolves([output]);

    const response = await chai.request(app).get('/game');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([
      { id: 67, name: 'GTA IV' },
      { id: 68, name: 'GTA V' }
    ]);

    sinon.restore();
  });

  it('Deve-se retornar um array vazio quando não tem dados cadastrados', async function() {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await chai.request(app).get('/game');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([]);

    sinon.restore();
  });
});
