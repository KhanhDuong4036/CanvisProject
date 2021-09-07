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
      "name": "@LoginScreen"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I input to Email address with \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Password with \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 14,
      "id": "login-page;verify-the-functions-of-login-page;;1"
    },
    {
      "cells": [
        "khanh@2203.com",
        ""
      ],
      "line": 15,
      "id": "login-page;verify-the-functions-of-login-page;;2"
    },
    {
      "cells": [
        "",
        "123123123123"
      ],
      "line": 16,
      "id": "login-page;verify-the-functions-of-login-page;;3"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 17,
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
  "duration": 11332130500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginScreen"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address with \"khanh@2203.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Password with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 116083300,
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
  "duration": 84195400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 2586917200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 37969200,
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
  "duration": 68300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginScreen"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Password with \"123123123123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 80403800,
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
  "duration": 81501100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 712040700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 37108200,
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
  "duration": 69400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the functions of Login page",
  "description": "",
  "id": "login-page;verify-the-functions-of-login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginScreen"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I input to Email address with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Password with \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 70268400,
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
  "duration": 69162100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 642458700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessageIsDisplayed()"
});
formatter.result({
  "duration": 44579600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify login successfully",
  "description": "",
  "id": "login-page;verify-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I input to Email address with \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input to Password with \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify Project screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-page;verify-login-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "login-page;verify-login-successfully;;1"
    },
    {
      "cells": [
        "khanh@0409.com",
        "123123123123"
      ],
      "line": 27,
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
  "duration": 53000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify login successfully",
  "description": "",
  "id": "login-page;verify-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginScreen"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I input to Email address with \"khanh@0409.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I input to Password with \"123123123123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click to SignIn button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
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
  "duration": 82889300,
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
  "duration": 78548400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToSignInButton()"
});
formatter.result({
  "duration": 16488210800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyProjectScreen()"
});
formatter.result({
  "duration": 1159373500,
  "status": "passed"
});
formatter.uri("resetPasswordScreen.feature");
formatter.feature({
  "line": 2,
  "name": "Reset Password Page",
  "description": "",
  "id": "reset-password-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ForgotScreen"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I click to Forgot Password button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Email address in Reset Password Page with \"\u003cEmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify \"\u003cErrorResetMessage\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;",
  "rows": [
    {
      "cells": [
        "Email",
        "ErrorResetMessage"
      ],
      "line": 14,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;1"
    },
    {
      "cells": [
        "",
        "Please enter valid email address"
      ],
      "line": 15,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;2"
    },
    {
      "cells": [
        "khanh@khanhduong.com",
        "Email not found"
      ],
      "line": 16,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;3"
    },
    {
      "cells": [
        "khanh@khanh",
        "Please enter valid email address"
      ],
      "line": 17,
      "id": "reset-password-page;verify-forgot-and-reset-password-function;;4"
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
  "name": "Open Canvis webapp",
  "keyword": "Given "
});
formatter.match({
  "location": "ResetPasswordSteps.openCanvisWebapp()"
});
formatter.result({
  "duration": 1043854000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ForgotScreen"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click to Forgot Password button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Email address in Reset Password Page with \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify \"Please enter valid email address\" is displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToForgotPasswordButton()"
});
formatter.result({
  "duration": 1734140200,
  "status": "passed"
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
  "duration": 67407800,
  "status": "passed"
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToResetPasswordButton()"
});
formatter.result({
  "duration": 371521500,
  "status": "passed"
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
  "duration": 46716600,
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
  "name": "Open Canvis webapp",
  "keyword": "Given "
});
formatter.match({
  "location": "ResetPasswordSteps.openCanvisWebapp()"
});
formatter.result({
  "duration": 324639600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ForgotScreen"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click to Forgot Password button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Email address in Reset Password Page with \"khanh@khanhduong.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify \"Email not found\" is displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToForgotPasswordButton()"
});
formatter.result({
  "duration": 405076400,
  "status": "passed"
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
  "duration": 81587300,
  "status": "passed"
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToResetPasswordButton()"
});
formatter.result({
  "duration": 1990273200,
  "status": "passed"
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
  "duration": 37438000,
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
  "name": "Open Canvis webapp",
  "keyword": "Given "
});
formatter.match({
  "location": "ResetPasswordSteps.openCanvisWebapp()"
});
formatter.result({
  "duration": 338389100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Forgot and Reset Password function",
  "description": "",
  "id": "reset-password-page;verify-forgot-and-reset-password-function;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ForgotScreen"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click to Forgot Password button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I input to Email address in Reset Password Page with \"khanh@khanh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to Reset Password button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify \"Please enter valid email address\" is displayed",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToForgotPasswordButton()"
});
formatter.result({
  "duration": 1500367600,
  "status": "passed"
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
  "duration": 74930300,
  "status": "passed"
});
formatter.match({
  "location": "ResetPasswordSteps.iClickToResetPasswordButton()"
});
formatter.result({
  "duration": 1516166100,
  "status": "passed"
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
  "duration": 39821700,
  "status": "passed"
});
});