Feature:increase/decrease quantity of product
Scenario: increase/decrease quantity of product
  Given I am on <product> page
  And product has more than 1 quantity
  When i click on <increase/decrease button>
  Then the Quantity of the product will be increased or decreased accordingly