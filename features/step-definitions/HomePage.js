const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I I am on any page$/, () => {
  return client.url('http://localhost:3000/p/1').waitForElementVisible('body', 1000);
});

When(/^I click on the logo$/, () => {
  return  client.click('a[href="L"]')
  .pause(1000);
});

Then(/^I should be redirected to the Home Page$/, ()=> {
  return client.url('http://localhost:3000/').waitForElementVisible('body', 1000);
});