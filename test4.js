const {Given,When,Then}= require('@cucumber/cucumber')

Given(/^I am on any page$/, () => {
  return client.url('http://localhost:3000/p/3').waitForElementVisible('body', 1000);
});


When(/^I press search button$/, () => {
  return  client.click('//*[@id="__next"]/header/div/div/form/div[1]/div/input')
  .pause(1000);
});

Then(/^I should be able to see that product$/, ()=> {
  return client.waitForElementPresent('//*[@id="__next"]/header/div/div/form/div[2]/div[3]/div[2]', 5000);
});