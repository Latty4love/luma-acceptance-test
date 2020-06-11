$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Account Creation",
  "description": "",
  "id": "account-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Create an Account with valid Email",
  "description": "",
  "id": "account-creation;create-an-account-with-valid-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Create An Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter \"\u003cFirstName\u003e\" on Create an Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters their \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enter an \"\u003cEmailAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter a \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enter \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Click on CreateAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Customer Account Dashboard is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "account-creation;create-an-account-with-valid-email;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "EmailAddress",
        "Password",
        "ConfirmPassword"
      ],
      "line": 21,
      "id": "account-creation;create-an-account-with-valid-email;;1"
    },
    {
      "cells": [
        "Jose",
        "Smith",
        "ramwe@yahoo.com",
        "Lattylove1",
        "Lattylove1"
      ],
      "line": 22,
      "id": "account-creation;create-an-account-with-valid-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Create an Account with valid Email",
  "description": "",
  "id": "account-creation;create-an-account-with-valid-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Create An Account page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Enter \"Jose\" on Create an Account Page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enters their \"Smith\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Enter an \"ramwe@yahoo.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Enter a \"Lattylove1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User Enter \"Lattylove1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User Click on CreateAccount",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Customer Account Dashboard is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAccountSteps.userIsOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 14152936600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jose",
      "offset": 12
    }
  ],
  "location": "CreateAccountSteps.userEnterOnCreateAnAccountPage(String)"
});
formatter.result({
  "duration": 1179659300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smith",
      "offset": 19
    }
  ],
  "location": "CreateAccountSteps.userEntersTheir(String)"
});
formatter.result({
  "duration": 235805600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ramwe@yahoo.com",
      "offset": 15
    }
  ],
  "location": "CreateAccountSteps.userEnterAn(String)"
});
formatter.result({
  "duration": 404438900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lattylove1",
      "offset": 14
    }
  ],
  "location": "CreateAccountSteps.userEnterA(String)"
});
formatter.result({
  "duration": 465780700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lattylove1",
      "offset": 12
    }
  ],
  "location": "CreateAccountSteps.userEnter(String)"
});
formatter.result({
  "duration": 282876600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.userClickOnCreateAccount()"
});
formatter.result({
  "duration": 1430007600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountSteps.customerAccountDashboardIsDisplayed()"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn",
  "description": "",
  "id": "signin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Sign In",
  "description": "",
  "id": "signin;sign-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter  \"\u003cEmailAddress\u003e\" in Sign In Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Enter their \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on Sign In",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer Account Dashboard Should be Displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "signin;sign-in;",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ],
      "line": 15,
      "id": "signin;sign-in;;1"
    },
    {
      "cells": [
        "ramwe@yahoo.com",
        "Lattylove1"
      ],
      "line": 16,
      "id": "signin;sign-in;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Sign In",
  "description": "",
  "id": "signin;sign-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SignIn"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Sign In page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter  \"ramwe@yahoo.com\" in Sign In Page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Enter their \"Lattylove1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on Sign In",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Customer Account Dashboard Should be Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.userIsOnSignInPage()"
});
formatter.result({
  "duration": 9395580100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ramwe@yahoo.com",
      "offset": 13
    }
  ],
  "location": "SignInSteps.userEnterInSignInPage(String)"
});
formatter.result({
  "duration": 138500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lattylove1",
      "offset": 18
    }
  ],
  "location": "SignInSteps.userEnterTheir(String)"
});
formatter.result({
  "duration": 347100,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignIn()"
});
formatter.result({
  "duration": 61600,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.customerAccountDashboardShouldBeDisplayed()"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
});