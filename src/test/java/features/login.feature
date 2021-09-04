@Login
Feature: Login Page

  Background:
    Given  Open the Canvis webapp

  @SignIn
  Scenario Outline: Verify the functions of Login page
    When I input to Email address with "<Email>"
    And  I input to Password with "<Password>"
    And  I click to SignIn button
    Then I verify the error message is displayed

    Examples:
      | Email          | Password     |
      | khanh@2203.com |              |
      |                | 123123123123 |
      |                |              |

  @Create
  Scenario Outline: Verify login successfully
    When I input to Email address with "<email>"
    And I input to Password with "<password>"
    And I click to SignIn button
    Then I verify Project screen

    Examples:
      | email          | password     |
      | khanh@0409.com | 123123123123 |