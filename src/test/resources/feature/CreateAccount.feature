Feature:Account Creation


  @createAccount
  Scenario Outline:Create an Account with valid Email
    Given User is on Create An Account page
    When User Enter "<FirstName>" on Create an Account Page
    And User Enters their "<LastName>"
    And User Enter an "<EmailAddress>"
    And User Enter a "<Password>"
    And User Enter "<ConfirmPassword>"
    And User Click on CreateAccount
    Then Customer Account Dashboard is Displayed






    Examples:
     |FirstName| LastName| EmailAddress  |Password  |ConfirmPassword|
     |Jose     |Smith    | ramwe@yahoo.com|Lattylove1|Lattylove1     |



