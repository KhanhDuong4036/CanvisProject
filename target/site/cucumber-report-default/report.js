$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resetPasswordScreen.feature");
formatter.feature({
  "line": 1,
  "name": "Reset Password Page",
  "description": "",
  "id": "reset-password-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@ForgotAndResetPassword"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address in Reset Password Page with \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"\u003cErrorResetMessage\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;",
  "rows": [
    {
      "cells": [
        "Email",
        "ErrorResetMessage"
      ],
      "line": 13,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;1"
    },
    {
      "cells": [
        "",
        "Please enter valid email address"
      ],
      "line": 14,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;2"
    },
    {
      "cells": [
        "khanh@khanhduong.com",
        "Email not found"
      ],
      "line": 15,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;3"
    },
    {
      "cells": [
        "khanh@khanh",
        "Please enter valid email address"
      ],
      "line": 16,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open forgot password screen",
  "keyword": "Given "
});
formatter.match({
  "location": "ResetPasswordSteps.openForgotPasswordScreen()"
});
formatter.result({
  "duration": 102728500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.ResetPasswordSteps.openForgotPasswordScreen(ResetPasswordSteps.java:20)\r\n\tat ✽.Given Open forgot password screen(resetPasswordScreen.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@ForgotAndResetPassword"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address in Reset Password Page with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Please enter valid email address\" is displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 54
    }
  ],
  "location": "ResetPasswordSteps.iInputToEmailAddressInResetPasswordPageWith(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToResetPasswordButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid email address",
      "offset": 10
    }
  ],
  "location": "ResetPasswordSteps.iVerifyIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open forgot password screen",
  "keyword": "Given "
});
formatter.match({
  "location": "ResetPasswordSteps.openForgotPasswordScreen()"
});
formatter.result({
  "duration": 186000,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.ResetPasswordSteps.openForgotPasswordScreen(ResetPasswordSteps.java:20)\r\n\tat ✽.Given Open forgot password screen(resetPasswordScreen.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@ForgotAndResetPassword"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address in Reset Password Page with \"khanh@khanhduong.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Email not found\" is displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "khanh@khanhduong.com",
      "offset": 54
    }
  ],
  "location": "ResetPasswordSteps.iInputToEmailAddressInResetPasswordPageWith(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToResetPasswordButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email not found",
      "offset": 10
    }
  ],
  "location": "ResetPasswordSteps.iVerifyIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open forgot password screen",
  "keyword": "Given "
});
formatter.match({
  "location": "ResetPasswordSteps.openForgotPasswordScreen()"
});
formatter.result({
  "duration": 218400,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.ResetPasswordSteps.openForgotPasswordScreen(ResetPasswordSteps.java:20)\r\n\tat ✽.Given Open forgot password screen(resetPasswordScreen.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@ForgotAndResetPassword"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address in Reset Password Page with \"khanh@khanh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify \"Please enter valid email address\" is displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "khanh@khanh",
      "offset": 54
    }
  ],
  "location": "ResetPasswordSteps.iInputToEmailAddressInResetPasswordPageWith(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToResetPasswordButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter valid email address",
      "offset": 10
    }
  ],
  "location": "ResetPasswordSteps.iVerifyIsDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
});