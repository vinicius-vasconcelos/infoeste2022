const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração game - Teste do método GET na rota /game/:id', function() {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se listar um jogo com sucesso', async function() {
    const output = { id: 68, name: 'GTA V' };
    sinon.stub(connection, 'execute').resolves([[output]]);

    const response = await chai.request(app).get(`/game/${VALID_ID}`);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({
      id: 68,
      name: 'GTA V',
    });

    sinon.restore();
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando "id" for inválido', async function() {
    sinon.stub(connection, 'execute').resolves([[]]);
    const response = await chai.request(app).get(`/game/${INVALID_ID}`);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Jogo não encontrado');
    sinon.restore();
  });
});
