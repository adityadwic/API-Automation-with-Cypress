/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'
let randomText = ""
let testEmail = ""
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (var i=0; i<10; i++)
randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
testEmail = randomText + '@gmail.com'

// const dataJson = require('../../fixtures/createuser.json')

describe('Create User test', () => {
    it('Post user', () => {

        cy.fixture('createuser').then((payload) => {

        cy.api({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization': "Bearer " + accesstoken
            },
            body: {
                    "name": payload.name,
                    "email": testEmail,
                    "gender": payload.gender,
                    "status": payload.status
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("name", payload.name)
            expect(res.body.data).has.property("email", testEmail)
            expect(res.body.data).has.property("gender", payload.gender)
            expect(res.body.data).has.property("status", payload.status)
        }).then((res)=>{
            const userId = res.body.data.id
            cy.log("user id is: " + userId)
            //2. GET user
            cy.api({
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/users/'+userId,
                headers: {
                    'authorization': "Bearer " + accesstoken
                }

            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property("id", userId)
                expect(res.body.data).has.property("name", payload.name)
                expect(res.body.data).has.property("email", testEmail)
                expect(res.body.data).has.property("gender", payload.gender)
                expect(res.body.data).has.property("status", payload.status)
            })
        })

    });
    })
});

