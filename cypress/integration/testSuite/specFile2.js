const { eq } = require("lodash")

describe('conduit functionalities', function () {
    it('Test 1: verify user can login successfully', function () {
        cy.visit('https://react-redux.realworld.io/#/login?_k=zwjcvx')
        cy.get("input[type='email']").type("sarath@mailinator.com")
        cy.get("input[type='password']").type("Test1234")
        //Verify if sign in button is visible or not before clicking it
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        //verify the page title
        cy.title().should('eq', 'Conduit')
        //validate whether the URL is appended with https or not
        cy.location('protocol').should('eq', 'https:')
        //Verify the landing page once the login is successful
        cy.contains('Your Feed').should('be.visible')

    })
    it('Test 2: Validate create post functionality', function () {
        cy.contains('New Post').click()
        //validate whether #/editor is appended in URL
        cy.hash().should('include', '#/editor')
        //Provide article title
        cy.get('input[placeholder="Article Title"]').type("sample articles")
        //Provide article details
        cy.get('input[placeholder="What\'s this article about?"]').type("this is a test article")
        //Provide article content
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type("nice article")
        //Click Publish Article button
        cy.contains('Publish Article').click()
        //Verify whether article is appended in URL
        cy.url().should('include', 'article')
    })
    it('Test 3: Mark-unmark as favorite', function () {
        //click on the profile name
        cy.get('.nav-link').contains('sarath93').click();
        //click on the fav icon
        cy.get('.ion-heart').click()
        //Navigate to Favorite articles tab
        cy.contains('Favorited Articles').click()
        //Click on the fav icon
        cy.get('.ion-heart').click()
        //Reload the page
        cy.reload()
        //Verify the following message is displayed or not
        cy.contains('No articles are here... yet.').should('be.visible')
        //Click browser back, use go method to handle browser events
        cy.go('back')
    })


})