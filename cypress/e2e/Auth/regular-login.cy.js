/// <reference types="cypress"/>

const urlBasic = { // Create variabel for URL
  baseUrl: Cypress.env('baseUrl'),
  baseUrlRegist: Cypress.env('baseUrlRegist'),
  baseUrlBox: Cypress.env('baseUrlBox')
}

const authBasic = { // Create variabel for Auth Login
  username: Cypress.env('auth_basic_username'),
  password: Cypress.env('auth_basic_password'),
}

const authUser = {  // Create variabel for user Login
  email: Cypress.env('user_email'),
  password: Cypress.env('user_password'),
  superemail: Cypress.env('super_username'),
  superpassword: Cypress.env('super_password'),
}

describe('Enhance Credential for login Testing', () => {
  it('Valid id and password', () => {
    cy.visit(urlBasic.baseUrl, {
      auth: {
        username: authBasic.username,
        password: authBasic.password
      }
    })
    cy.get('#email').type(authUser.email)
    cy.get('#password').type(authUser.password)
    cy.get('[type="submit"]').contains('Log in').click()
  })

  it('Valid ID and Invalid Password', () => {
    cy.visit(urlBasic.baseUrl, {
      auth: {
        username: authBasic.username,
        password: authBasic.password
      }
    })
    cy.get('#email').type(authUser.email)
    cy.get('#password').type('123') //Fake password for negative testing
    cy.get('[type="submit"]').contains('Log in').click()
    cy.contains('These credentials do not match our records.').should('have.text', 'These credentials do not match our records.')
  })

  it('Invalid ID and valid Password', () => {
    cy.visit(urlBasic.baseUrl, {
      auth: {
        username: authBasic.username,
        password: authBasic.password
      }
    })
    cy.get('#email').type('user2222@yopmail.com') //Fake email for negative testing
    cy.get('#password').type(authUser.password)
    cy.get('[type="submit"]').contains('Log in').click()
    cy.contains('These credentials do not match our records.').should('have.text', 'These credentials do not match our records.')
  })

  it('Invalid ID and Invalid Password', () => {
    cy.visit(urlBasic.baseUrl, {
      auth: {
        username: authBasic.username,
        password: authBasic.password
      }
    })
    cy.get('#email').type('user13223@yopmail.com') //fake username for negative testing
    cy.get('#password').type('123adsad') //fake password for negative testing
    cy.get('[type="submit"]').contains('Log in').click()
    cy.contains('These credentials do not match our records.').should('have.text', 'These credentials do not match our records.')
  })

  // it('Valid ID and Blank Password', () => {
  //   cy.visit('https://www.google.com/')
  //   cy.get('#email').type(authUser.email)
  //   cy.get('#password').type(' ')
  //   cy.get('[type="submit"]').contains('Log in').click()
  //   cy.contains('Password').should('be.visible')
  // })

  it('Valid ID and Blank Password', () => {
    cy.visit(urlBasic.baseUrl, {
      auth: {
        username: authBasic.username,
        password: authBasic.password
      }
    })
    cy.get('#email').type(authUser.email)
    cy.get('#password').type(' ')
    cy.get('[type="submit"]').contains('Log in').click()
    cy.contains('Password').should('be.visible')
  })

  // it('Blank ID and Valid Password', () => {
  //   cy.visit(urlBasic.baseUrl, {
  //     auth: {
  //       username: authBasic.username,
  //       password: authBasic.password
  //     }
  //   })
  //   cy.get('#email').type(' ')
  //   cy.get('#password').type(authUser.password)
  //   cy.get('[type="submit"]').contains('Log in').click()
  //   cy.contains('Password').should('be.visible')
  // })

  // // it'Data in password field is either visible as asterisk or bullet signs.',
  // it('Enter key of the keyboard is working correctly ', () => {
  //   cy.visit(urlBasic.baseUrl, {
  //     auth: {
  //       username: authBasic.username,
  //       password: authBasic.password
  //     }
  //   })
  //   cy.get('#email').type(authUser.email)
  //   cy.get('#password').type(authUser.password)
  //   cy.get('[type="submit"]').contains('Log in').click()
  // })
})