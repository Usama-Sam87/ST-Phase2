const {Given,When,Then}= require('@cucumber/cucumber')

Given(/^I am on product page$/, () => {
  return client.url('http://localhost:3000/p/3').waitForElementVisible('body', 1000);
});

When(/^I click on select color button$/, () => {
  return  client.click('button[data-th="color"]')
  .pause(1000);
});

Then(/^I should be able to see different colors of product $/, ()=> {
  return client.waitForElementPresent('.MuiDialogContent-root', 5000);
});