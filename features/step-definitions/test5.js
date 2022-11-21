const {Given,When,Then}= require('@cucumber/cucumber')

Given(/^I am on cart page$/, () => {
  return client.url('http://localhost:3000/cart').waitForElementVisible('body', 1000);
});

When(/^I click on add-remove button$/, () => {
  return  client.click('//*[@id="__next"]/main/div/div[2]/div/div[1]/div[1]/div/div[2]/div/button[2]/span[1]/svg/path')
  .pause(1000);
});

Then(/^product should be added-removed from the cart$/, ()=> {
  return client.waitForElementPresent('//*[@id="__next"]/main/div/div[2]/div/div[1]', 5000);
});