Feature: End to End E-commerce validation

Adding test to regression suite

Scenario: E-commerce product delivery

Given I open E-commerce website

When I add items to cart

And Validate total price

Then Select the country submit and verify thank you message
