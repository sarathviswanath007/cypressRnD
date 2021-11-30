describe('test suite',function(){
    it('Test 1: Login -> Valid credentials',function(){
        cy.visit("https://react-redux.realworld.io/#/login?_k=zwjcvx")
        cy.get("input[type='email']").type("sarath@mailinator.com")
        cy.get("input[type='password']").type("Test1234")
        //Verify if sign in button is visible or not before clicking it
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})