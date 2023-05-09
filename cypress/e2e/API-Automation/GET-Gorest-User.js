/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'

describe('GET user', () => {
    it('Validate the header', () => {
        cy.api({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': "Bearer " + accesstoken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })

    });
});

describe('GET user by id test', () => {
    it('Validate the header', () => {
        cy.api({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/1366818',
            headers: {
                'authorization': "Bearer c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.name).to.eq("Dr. Rajiv Kapoor")
        })

    });
});
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

// describe('Get All Brands List', () => {
//     beforeEach(() => {
//         cy.api({
//             method: 'GET',
//             url: 'https://automationexercise.com/api/brandsList',
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
