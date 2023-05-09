describe('Automation Testing RF', () => {

    

    // TEST CASE 1
    it('Visit URL Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should("eq","OrangeHRM")
        cy.contains("Login").should("be.visible")
    })

    it('Input email and password + LOGIN', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get("[name='username']").click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
    })

    it('Create Admin', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get("[name='username']").click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
    })
})