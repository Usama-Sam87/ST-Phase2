const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I am on Product page$/, () => {
  return client.url('http://localhost:3000/s/1').waitForElementVisible('body', 1000);
});

When(/^I select a Type$/, () => {
  return  client.click('label[=Type]')
  .pause(1000);
});

Then(/^I should only see that type of Product$/, ()=> {
  return client.waitForElementVisible('body', 1000);
});