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
  "line": 8,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I input to Email address with \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I input to Password with \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 15,
      "id": "login-page;verify-the-functions-of-login-page;;1"
    },
    {
      "cells": [
        "khanh@2203.com",
        ""
      ],
      "line": 16,
      "id": "login-page;verify-the-functions-of-login-page;;2"
    },
    {
      "cells": [
        "",
        "123123123123"
      ],
      "line": 17,
      "id": "login-page;verify-the-functions-of-login-page;;3"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 18,
      "id": "login-page;verify-the-functions-of-login-page;;4"
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
  "duration": 5725939100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 7,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I input to Email address with \"khanh@2203.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I input to Password with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "khanh@2203.com",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iInputToEmailAddressWith(String)"
});
formatter.result({
  "duration": 113438700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iInputToPasswordWith(String)"
});
formatter.result({
  "duration": 74716800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 869920800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 37695600,
  "status": "passed"
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
  "duration": 91800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 7,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I input to Email address with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I input to Password with \"123123123123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iInputToEmailAddressWith(String)"
});
formatter.result({
  "duration": 71458000,
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
  "duration": 80064500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 1985071000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 35246000,
  "status": "passed"
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
  "duration": 52800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 7,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I input to Email address with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I input to Password with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iInputToEmailAddressWith(String)"
});
formatter.result({
  "duration": 70286600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "LoginSteps.iInputToPasswordWith(String)"
});
formatter.result({
  "duration": 72190700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 1522990200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 36492700,
  "status": "passed"
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
      "name": "@LoginSuccessfully"
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
  "duration": 80000,
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
      "name": "@LoginSuccessfully"
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
  "duration": 76345000,
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
  "duration": 83865100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 1896870000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyProjectScreen()"
});
formatter.result({
  "duration": 312255900,
  "status": "passed"
});
});