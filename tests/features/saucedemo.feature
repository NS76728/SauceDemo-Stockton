Feature: SauceDemo Site

    @debug
    Scenario: Login
        Given I am on login page
        When I enter in user credentials of "standard_user" and "secret_sauce" 
        And I click the login button
        Then I should be successfully logged in
        