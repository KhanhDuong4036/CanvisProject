@ForgotScreen
Feature:  Reset Password Page

  Background:
    Given Open Canvis webapp

  Scenario Outline: Verify Forgot and Reset Password function
    When I click to Forgot Password button
    When I input to Email address in Reset Password Page with "<Email>"
    And I click to Reset Password button
    Then I verify "<ErrorResetMessage>" is displayed

    Examples:
      | Email                | ErrorResetMessage                |
      |                      | Please enter valid email address |
      | khanh@khanhduong.com | Email not found                  |
      | khanh@khanh          | Please enter valid email address |
