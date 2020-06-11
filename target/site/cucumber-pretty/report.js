$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SignIn.feature");
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
  "duration": 14918751000,
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
  "duration": 1204453400,
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
  "duration": 400978900,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.userClickOnSignIn()"
});
formatter.result({
  "duration": 1941569000,
  "status": "passed"
});
formatter.match({
  "location": "SignInSteps.customerAccountDashboardShouldBeDisplayed()"
});
formatter.result({
  "duration": 60100,
  "status": "passed"
});
});