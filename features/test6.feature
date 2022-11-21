Feature:sort poducts based on price and rating
Scenario:sort poducts based on price and rating
    Given I am on products page 
    And I click on sort by button
    When I chose sort by rating
    Then I should be able to see that product sorted by that order