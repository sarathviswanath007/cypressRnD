import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('I open E-commerce website',()=>{
cy.visit('https://shop.demoqa.com/my-account/')
})
When('I add items to cart',()=>{
cy.reload()
})
And('Validate total price',()=>{
cy.reload()
})
Then('Select the country submit and verify thank you message',()=>{
console.log('success')
})