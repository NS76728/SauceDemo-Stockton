Feature: SauceDemo Site


    Scenario: LGN-01: Login with standard user 
        Given I am on login page
        When I enter in user credentials of "standard_user" and "secret_sauce" 
        And I click the login button
        Then I should be successfully logged into "inventory" page
     
    Scenario: Failing LGN-01 Login fail
        Given I am on login page
        When I enter in user credentials of "locked_out_user" and "secret_sauce" 
        And I click the login button
        Then I should be successfully logged into "inventory" page

     
    Scenario: LGN-02: Login with locked out user 
        Given I am on login page
        When I enter in user credentials of "locked_out_user" and "secret_sauce" 
        And I click the login button
        Then I should see error containing "Epic sadface: Sorry, this user has been locked out."
        
    
    Scenario: CHK-01: Complete a checkout with valid information
        Given I am on login page
        When I enter in user credentials of "standard_user" and "secret_sauce" 
        And I click the login button
        And I should be successfully logged into "inventory" page
        And I click add to cart on inventory page for "Sauce Labs Backpack" item
        And I click add to cart on inventory page for "Sauce Labs Fleece Jacket" item
        And I verify cart count is "2"
        And I click on cart link 
        And I click on checkout button 
        And I fill out check out information using; "John" "Doe" "43210"
        And I click the continue button
        And I click on the finish button
        Then I verify thank you meesage is present
        And I click the back home button
        And I should be successfully logged into "inventory" page

