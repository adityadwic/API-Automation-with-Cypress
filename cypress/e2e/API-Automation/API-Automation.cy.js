/// <reference types="cypress" />

// describe('GET user list test', () => {
//     beforeEach(() => {
//         cy.api('https://automationexercise.com/api/productsList').as('mainURL');
//     });
 
//     it('Validate the header', () => {
//         cy.get('@mainURL')
//             .its('headers')
//             .its('content-type')
//             // .should('include', 'application/json; charset=utf-8');
//     });

//     it('Validate the status code', () => {
//         cy.get('@mainURL')
//             .its('status')
//             .should('be.equal', 200);
//     });
// });

// describe('Get All Products List', () => {
//     beforeEach(() => {
//         cy.api({
//             method: 'GET',
//             url: 'https://automationexercise.com/api/productsList',
//         }).as('mainURL');
//     });
 
//     it('Validate the header', () => {
//         cy.get('@mainURL')
//             .its('headers')
//             .its('content-type')
//             // .should('include', 'application/json; charset=utf-8');
//     });

//     it('Validate the status code', () => {
//         cy.get('@mainURL')
//             .its('status')
//             .should('be.equal', 200);
//     });
// });

// describe('POST to all products list', () => {
//     beforeEach(() => {
//         cy.api({
//             method: 'POST',
//             url: 'https://automationexercise.com/api/productsList',
//         }).as('mainURL');
//     });
 
//     it('Validate the header', () => {
//         cy.get('@mainURL')
//             .its('headers')
//             .its('content-type')
//             // .should('include', 'application/json; charset=utf-8');
//     });

//     it('Validate the status code', () => {
//         cy.get('@mainURL')
//             .its('status')
//             .should('be.equal', 200);
//     });

//     it('Validate the response', () => {
//         cy.get('@mainURL')
//         .then((res)=>{
//             expect(res.status).to.eq(200)
//             expect(res.body).has.eq({"responseCode":405})
//         })
//     });
// });

describe('Get All Brands List', () => {
    beforeEach(() => {
        cy.api({
            method: 'GET',
            url: 'https://automationexercise.com/api/brandsList',
        }).as('mainURL');
    });
 
    it('Validate the header', () => {
        cy.get('@mainURL')
            .its('headers')
            .its('content-type')
            // .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@mainURL')
            .its('status')
            .should('be.equal', 200);
    });
});
