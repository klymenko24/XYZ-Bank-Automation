Feature: Manager login feature

  Scenario: Manager finds postcode by customer name
    Given Manager opens web-page
    And logged as manager
    And opens customer list
    When find a postcode by name "Harry Potter"
    Then checks founded postсode to "E725JB"
