Feature: Customer login feature


  Scenario: Customer checks account status
    Given "customer" opens web-page
    And logged as "Harry Potter"
    When customer select his account "1006"
    Then status equal "Account Number : 1006 , Balance : 0 , Currency : Rupee"

