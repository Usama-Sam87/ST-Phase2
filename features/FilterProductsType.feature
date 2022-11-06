Feature: Filter Product based on type
Scenario: Filter Product based on type
  Given I am on Product page
  When I select a Type
  Then I should only see that type of Product