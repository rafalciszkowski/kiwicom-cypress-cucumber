@regression
Feature: Signup and Login on kiwi.com

    Background: Pre-conditions
        Given I navigate to the kiwi.com homepage
        When I click navbar button

    Scenario: Test valid Signup
        And I click Create an account link
        And I type an 'random' email and 'random' password
        And I click on the Create an account button
        Then I should be presented with Verify your email message

    Scenario: Check the possibility of registering an existing email address
        And I click Create an account link
        And I type an 'test.cypress@wp.pl' email and 'Test.Cypress@@' password
        And I click on the Create an account button
        Then I should be presented with warning message

    Scenario: Test login with invalid credentials
        And I click Sign in button
        And I select login via 'Email' option
        And I provide an email address 'random'
        And I click Continue button
        Then I should be presented with message We sent a code to email

    @smoke
    Scenario: Test login with valid credentials
        And I click Sign in button
        And I select login via 'Email' option
        And I provide an email address 'test.cypress@wp.pl'
        And I click Continue button
        And I provide a password 'Test.Cypress@@'
        And I click Sign in button in confirmation pop-up
        Then I should see the name of the logged in user 'test.cypress'