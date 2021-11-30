const { eq } = require("lodash")

describe('conduit functionalities',function(){
    it('Test 1: verify user can login successfully',function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=zwjcvx')
        cy.get("input[type='email']").type("sarath@mailinator.com")
        cy.get("input[type='password']").type("Test1234")
        //Verify if sign in button is visible or not before clicking it
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        //verify the page title
        cy.title().should('eq','Conduit')
        //validate whether the URL is appended with https or not
        cy.location('protocol').should('eq','https:')
        //Verify the landing page once the login is successful
        cy.contains('Your Feed').should('be.visible')
        
    })
})