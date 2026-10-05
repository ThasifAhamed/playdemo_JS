Feature: Verify login page

  Scenario: Login with valid details
    Given I am on the login page
    When I enter a valid username
    And I enter a valid password
    And I click the Login button
    Then I should be successfully logged in