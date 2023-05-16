/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'

describe('GET user', () => {
    it('Validate the header', () => {
        cy.api({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization': "Bearer " + accesstoken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
        })

    });
});

describe('GET user by id test', () => {
    it('Validate the header', () => {
        cy.api({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/1530497',
            headers: {
                'authorization': "Bearer c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq("Dr. Rajiv Kapoor")
        })

    });
});