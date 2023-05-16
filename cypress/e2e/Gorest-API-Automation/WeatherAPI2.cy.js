/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'

describe('Check weather information', () => {

    it('Get weather information for cities', () => {
        //1st req : GET Locations
        cy.api({
            method: 'GET',
            url: 'http://api.weatherapi.com/v1/search.json?key=fb94d299038d4af7b3d144712231005&q=london',
            headers: {
                'authorization': "Bearer " + accesstoken
            },
        }).then((res)=>{
            const location = res.body
            return location
        })
        .then((location)=>{

            for(let i=0; i< location.length; i++){
            //2nd req for the first location/city
            cy.api({
                method: 'GET',
                url: 'http://api.weatherapi.com/v1/search.json?key=fb94d299038d4af7b3d144712231005&q='+location[i].name,
                headers: {
                    'authorization': "Bearer " + accesstoken
                },
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body[0]).to.have.property('name', location[i].name)
                cy.screenshot('/home/adityadwic/Desktop/Materi/Testing_cypress/screenshoot/weatherAPI2',{capture: 'fullPage'})
            })
        }
        })
        
    });
});
