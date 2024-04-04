/// <reference types="cypress"/>
describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista na primeira posição', () => {
        cy.get('.block-inner')
            .first()
            .click()   
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });

    it('Deve selecionar um produto da lista na terceira posição', () => {
        cy.get('.block-inner')
            .eq(2)
            .click()
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });

    it('Deve selecionar um produto da lista pelo nome', () => {
        cy.get('.products > .row')
            .contains('Apollo Running Short')
            .click()  
        cy.get('.woocommerce-product-details__short-description > p').should('exist')
    });
});