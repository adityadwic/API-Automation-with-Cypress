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



        cy.api({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization': "Bearer " + accesstoken
            },
            body: {
                "name": "Tes Automation ADC",
                "email": "testingadc@gmail.com",
                "gender": "male",
                "status": "active"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("name", "Tes Automation ADC")
            expect(res.body.data).has.property("email", "testingadc@gmail.com")
            expect(res.body.data).has.property("gender", "male")
            expect(res.body.data).has.property("status", "active")
        }).then((res)=>{
            const userId = res.body.data.id
            cy.log("user id is: " + userId)
            //2. Update user (PUT)
            cy.api({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v1/users/'+userId,
                headers: {
                    'authorization': "Bearer " + accesstoken
                },
                body: {
                    "name": "Tes Automation ADC Updated",
                    "email": "testingadcupdate@gmail.com",
                    "gender": "female",
                    "status": "inactive"
                }

            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property("id", userId)
                expect(res.body.data).has.property("name", "Tes Automation ADC Updated")
                expect(res.body.data).has.property("email", "testingadcupdate@gmail.com")
                expect(res.body.data).has.property("gender", "female")
                expect(res.body.data).has.property("status", "inactive")
            })
        })
    })
});

