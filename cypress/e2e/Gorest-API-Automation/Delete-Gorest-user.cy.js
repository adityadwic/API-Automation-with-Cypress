/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'
let randomText = ""
let testEmail = ""
var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
for (var i=0; i<10; i++)
randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
testEmail = randomText + '@gmail.com'

const dataJson = require('../../fixtures/createuser.json')

describe('Create User test', () => {
    it('Post user', () => {

        cy.api({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization': "Bearer " + accesstoken
            },
            body: {
                    "name": dataJson.name,
                    "email": testEmail,
                    "gender": dataJson.gender,
                    "status": dataJson.status
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("name", dataJson.name)
            expect(res.body.data).has.property("email", testEmail)
            expect(res.body.data).has.property("gender", dataJson.gender)
            expect(res.body.data).has.property("status", dataJson.status)
        }).then((res)=>{
            const userId = res.body.data.id
            cy.log("user id is: " + userId)
            //2. GET user
            cy.api({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v1/users/'+userId,
                headers: {
                    'authorization': "Bearer " + accesstoken
                }

            }).then((res)=>{
                expect(res.status).to.eq(204)
            })
        })

    });
})

