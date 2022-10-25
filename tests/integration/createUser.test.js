const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const connection = require('../../src/database/connection');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Teste de integração user - Teste do método POST na rota /user', function() {
  it('Deve-se cadastrar um jogo com sucesso, quando passado um body válido', async function() {
    const body = { fullName: 'Ronaldo Nazário', nickname: 'theBest9' };
    const output = { id: 67, fullName: 'Ronaldo Nazário', nickname: 'theBest9' }
    sinon.stub(connection, 'execute').resolves([{ insertId: 67 }]);

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal(output);

    sinon.restore();
  });

  it('Deve-se receber status 400 e uma mensagem de erro, quando "fullName" não for enviado', async function() {
    const body = { nickname: 'theBest9' };

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.be.equal('Full name é um campo obrigatório');
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando enviado "fullName" menor de 3 caracteres', async function() {
    const body = { fullName: 'Ro', nickname: 'theBest9' };

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando enviado "fullName" maior de 40 caracteres', async function() {
    const body = {
      fullName: 'Ronaldo Ronaldinho de Rivaldo Rivaldinho Pereira Sampaio',
      nickname: 'theBest9',
    };

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Full name errado! Deve conter entre 3 e 40 caracteres')
  });

  it('Deve-se receber status 400 e uma mensagem de erro, quando "Nickname" não for enviado', async function() {
    const body = { fullName: 'Ronaldo Nazário' };

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(400);
    expect(response.body.message).to.be.equal('Nickname é um campo obrigatório');
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando enviado "Nickname" menor de 3 caracteres', async function() {
    const body = { fullName: 'Ronaldo Nazário', nickname: 'R9' };

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
  });

  it('Deve-se receber status 422 e uma mensagem de erro, quando enviado "Nickname" maior de 8 caracteres', async function() {
    const body = { fullName: 'Ronaldo Nazário', nickname: 'theBestR9' };

    const response = await chai.request(app).post('/user').send(body);

    expect(response.status).to.be.equal(422);
    expect(response.body.message).to.be.equal('Nickname errado! Deve conter entre 3 e 8 caracteres')
  });
});
