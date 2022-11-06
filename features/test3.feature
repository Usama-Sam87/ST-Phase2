Feature: Color of Product
Scenario: Color of Product  
  Given I am on <product> page
  And I select a product
  When I click on <select color button>
  Then I should be able to see different colors of product