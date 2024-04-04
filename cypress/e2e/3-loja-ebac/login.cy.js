/// <reference types="cypress"/>
//primeiro é preciso importar o arquivo para usar a constante -  cada ".." volta um nível de pasta
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso - Usando massa de dados',() => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()        
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina')  
    });
    
    //ou desta forma
    it('Deve fazer login com sucesso - Usando Fixture',() => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false }) //log: false para esconder senha no log
            cy.get('.woocommerce-form > .button').click()        
            cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina')          
        })
    });
   
    it('Deve fazer login com comando customizado', () => {
        cy.login('nina@ninateste.com','Biribinha@23')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain','nina')
    });
    

})