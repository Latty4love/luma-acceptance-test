Feature: SignIn

  @SignIn
  Scenario Outline:Sign In
    Given User is on Sign In page
    And User Enter  "<EmailAddress>" in Sign In Page
    And User Enter their "<Password>"
    And User Click on Sign In
    Then Customer Account Dashboard Should be Displayed




    Examples:
    |EmailAddress    |Password  |
    |ramwe@yahoo.com |Lattylove1|



