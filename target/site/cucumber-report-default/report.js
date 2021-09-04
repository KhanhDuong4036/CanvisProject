$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify login successfully",
  "description": "",
  "id": "login-page;verify-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@Create"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I input to Email address with \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I input to Password with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify Project screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-page;verify-login-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 28,
      "id": "login-page;verify-login-successfully;;1"
    },
    {
      "cells": [
        "khanh@0409.com",
        "123123123123"
      ],
      "line": 29,
      "id": "login-page;verify-login-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Open the Canvis webapp",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openTheCanvisWebapp()"
});
formatter.result({
  "duration": 6571258000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify login successfully",
  "description": "",
  "id": "login-page;verify-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 20,
      "name": "@Create"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I input to Email address with \"khanh@0409.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I input to Password with \"123123123123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify Project screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "khanh@0409.com",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iInputToEmailAddressWith(String)"
});
formatter.result({
  "duration": 118716200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123123123123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iInputToPasswordWith(String)"
});
formatter.result({
  "duration": 89024700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 1994780400,
  "status": "passed"
});
formatter.match({
  "location": "ProjectScreenSteps.iVerifyProjectScreen()"
});
formatter.result({
  "duration": 3001195700,
  "error_message": "java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat commons.BasePage.waitForElementVisible(BasePage.java:489)\r\n\tat pageObjects.ProjectScreenPO.isCreateProjectDisplayed(ProjectScreenPO.java:15)\r\n\tat stepDefinitions.ProjectScreenSteps.iVerifyProjectScreen(ProjectScreenSteps.java:17)\r\n\tat ✽.Then I verify Project screen(login.feature:25)\r\n",
  "status": "failed"
});
});