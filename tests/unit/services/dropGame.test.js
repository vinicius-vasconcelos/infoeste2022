const { expect } = require('chai');
const sinon = require('sinon');
const model = require('../../../src/models/user');
const service = require('../../../src/services/user');

describe('Services de Users - Teste da função DROP', function() {
  const VALID_ID = 1;
  const INVALID_ID = 9999999;

  it('Deve-se deletar um usuário com sucesso', async function() {
    const output = [
      {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 0,
        info: '',
        serverStatus: 2,
        warningStatus: 0
      },
      undefined
    ]
    sinon.stub(model, 'drop').resolves(output);
    
    const resultArray = await service.drop(VALID_ID);
    expect(resultArray[0].affectedRows).to.be.equal(1);
    sinon.restore();
  });

  it('Deve-se lançar uma exceção, quando id não for encontrado', async function() {
    sinon.stub(model, 'getById').resolves(undefined);

    try {
      const result = await service.drop(INVALID_ID);
      expect(result).to.be.true;
    } catch (error) {
      expect(error.message).to.be.equal('Usuário não encontrado');
    }

    sinon.restore();
  });
  
});