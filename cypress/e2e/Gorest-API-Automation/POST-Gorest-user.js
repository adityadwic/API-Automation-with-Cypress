/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'

describe('Create User test', () => {
    it('Validate the header', () => {
        cy.api({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': "Bearer " + accesstoken
            },
            body: {
                    "name": "Dr. Rajiv Kapoor",
                    "email": "kapoor_dr_rajiv2@hoppe.test",
                    "gender": "male",
                    "status": "inactive"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property("name", "Dr. Rajiv Kapoor")
            expect(res.body.data).has.property("email", "kapoor_dr_rajiv2@hoppe.test")
            expect(res.body.data).has.property("gender", "male")
            expect(res.body.data).has.property("status", "inactive")
        })

    });
});

