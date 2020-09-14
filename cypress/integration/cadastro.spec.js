/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('cadastro de usuário no site', () => {
        cy.server();

        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewTable');
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUserTable');
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable');

        cy.visit('Register.html');
        // elements 
        // input[placeholder="First Name"]
        // começe com Name input[ng-model^="Last"] atributos que comecam com um valor
        // input[ng-model$="Name"] atributos que terminam com um valor
        // input[ng-model*="Name"] Que possua em todo valor
        // input[ng-model^="Email"]
        // input[ng-model^="Phone"]
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^="Last"]').type(chance.last());
        cy.get('input[ng-model^="Email"]').type(chance.email());
        cy.get('input[ng-model^="Phone"]').type(chance.phone({ formatted: false }));

        cy.get('input[value="Male"]').check();
        cy.get('#checkbox1').check('Cricket');
        cy.get('input[type="checkbox"]').check('Movies');
        cy.get('input[type="checkbox"]').check('Hockey');

        cy.get('#Skills').select('Android');
        cy.get('#countries').select('Brazil');
        cy.get('select#country').select('Japan', {force: true});
        cy.get('#yearbox').select('1993');
        cy.get('select[ng-model^="monthbox"]').select('February');
        cy.get('#daybox').select('11');
        cy.get('#firstpassword').type('12345Test@');
        cy.get('#secondpassword').type('12345Test@');
        cy.get('#imagesrc').attachFile('printScreen.png');

      
        cy.get('#submitbtn').click();
        
        cy.wait('@postNewTable').then((resNewTable)   =>  {
            expect(resNewTable.status).to.eq(200)
        })

        cy.wait('@postUserTable').then((resUserTable)   =>  {
            expect(resUserTable.status).to.eq(200)
        })

        cy.wait('@getNewTable').then((resNewTable)   =>  {
            expect(resNewTable.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable')
    });
});