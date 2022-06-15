import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('I open E-commerce website',()=>{
cy.visit('/')
})
And('I do the registration with valid username, email and password',(dataTable)=>{
  const  userName = dataTable.rawTable[1][0]
  const regEmail = dataTable.rawTable[1][1]
  const  regPassword = dataTable.rawTable[1][2]
cy.get('#reg_username').type(userName)
cy.get('#reg_email').type(regEmail)
cy.get('#reg_password').type(regPassword)
cy.get('.woocommerce-Button').click()
})
And('Verify if the registration is successful or not',()=>{
console.log('success')
})
