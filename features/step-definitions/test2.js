const {Given,When,Then}= require('@cucumber/cucumber')

Given(/^I am on product page$/, () => {
  return client.url('http://localhost:3000/p/3').waitForElementVisible('body', 1000);
});

When(/^I click on increase or decrease button$/, () => {
  return  client.click('button[data-th="increase or decrease"]')
  .pause(1000);
});

Then(/^Quantity of the product will be increased or decreased accordingly $/, ()=> {
  return client.waitForElementPresent('.MuiDialogContent-root', 5000);
});