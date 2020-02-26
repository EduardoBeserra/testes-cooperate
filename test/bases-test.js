const chai = require('chai')
const regrasBases = require('../src/regras/regrasBases')
const assert = chai.assert;

describe('TDD de operações com as informações das bases de dados', () => {
    it('Teste: Base Desenv existente', () => {
        assert.equal(regrasBases.getBase('desenv').name, 'desenv')
    })
})
