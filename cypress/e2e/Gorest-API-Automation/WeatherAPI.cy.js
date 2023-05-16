/// <reference types="cypress" />

let accesstoken = 'c79b02c3f39fd3ff001f4f96b67c4e50643299a9cccb90a70f3ae76576dcda6c'

describe('Check weather information', () => {

    it('Get weather information for cities', () => {
        //1st req : GET Locations
        cy.api({
            method: 'GET',
            url: 'http://api.weatherapi.com/v1/current.json?key=fb94d299038d4af7b3d144712231005&q=London&aqi=no',
            headers: {
                'authorization': "Bearer " + accesstoken
            },
        }).then((res)=>{
            const city = res.body.location.tz_id
            return city
        })
        .then((city)=>{
            //2nd req for the first location/city
            cy.api({
                method: 'GET',
                url: 'http://api.weatherapi.com/v1/current.json?key=fb94d299038d4af7b3d144712231005&q=London&aqi=no&tz_id='+city,
                headers: {
                    'authorization': "Bearer " + accesstoken
                },
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.location).to.have.property('tz_id', city)
                cy.screenshot('/home/adityadwic/Desktop/Materi/Testing_cypress/screenshoot/weatherAPI2',{capture: 'fullPage'})
            })
        })
        
    });
});
