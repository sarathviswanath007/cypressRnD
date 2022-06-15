Feature: End to End E-commerce validation

Adding test to regression suite

Scenario: placing an order

Given I open E-commerce website

And I do the registration with valid username, email and password
    | username | email | password |
    | Sarath93 | sarathviswanath93@gmail.com | 1234567890 |

And Verify if the registration is successful or not


