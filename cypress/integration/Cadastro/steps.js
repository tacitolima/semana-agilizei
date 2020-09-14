// implementação dos passos descritos na features

let Chance = require('chance');
let chance = new Chance();

Given(/^que acesso o site$/, () => {
	cy.server();

        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewTable');
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUserTable');
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable');

        cy.visit('Register.html');
});

When(/^informar meus dados$/, () => {
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
});

When(/^salvar$/, () => {
	cy.get('#submitbtn').click();
});

Then(/^devo ser cadastrado com sucesso$/, () => {
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
