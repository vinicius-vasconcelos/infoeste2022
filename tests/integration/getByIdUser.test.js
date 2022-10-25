const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração user - Teste do método GET na rota /user/:id', function() {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se listar um usuário com sucesso', async function() {
    const output = { id: 68, fullName: 'Ronaldo de Assis', nickname: 'bestR10' };
    sinon.stub(connection, 'execute').resolves([[output]]);

    const response = await chai.request(app).get(`/user/${VALID_ID}`);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({
      id: 68,
      fullName: 'Ronaldo de Assis',
      nickname: 'bestR10',
    });

    sinon.restore();
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando "id" for inválido', async function() {
    sinon.stub(connection, 'execute').resolves([[]]);
    const response = await chai.request(app).get(`/user/${INVALID_ID}`);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Usuário não encontrado');
    sinon.restore();
  });
});
