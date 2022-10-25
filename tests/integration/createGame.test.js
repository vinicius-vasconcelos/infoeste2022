const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração game - Teste do método POST na rota /game', function() {
  it('Deve-se cadastrar um jogo com sucesso, quando passado um body válido', async function() {
    const body = { name: 'FIFA 2021' }
    const output = { id: 67, name: 'FIFA 2021' };
    sinon.stub(connection, 'execute').resolves([{ insertId: 67 }]);

    const response = await chai.request(app).post('/game').send(body);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal(output);

    sinon.restore();
  });

  it('Deve-se receber status 400 e uma mensagem de erro, quando "Name" não for enviado', async function() {
    const body = { };
    const response = await chai.request(app).post('/game').send(body);

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.be.equal('Name é um campo obrigatório');
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando enviado "Name" menor de 3 caracteres', async function() {
    const body = { name: 'Fi' } 

    const response = await chai.request(app).post('/game').send(body);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Name errado! Deve conter entre 3 e 50 caracteres')
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando enviado "Name" maior de 50 caracteres', async function() {
    const body = { name: 'Super Mega Blaster Game™ 4 V2222.3333.111 - The Epic Game' };

    const response = await chai.request(app).post('/game').send(body);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Name errado! Deve conter entre 3 e 50 caracteres')
  });
});
