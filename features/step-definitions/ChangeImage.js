const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I am on a specific product page$/, () => {
  return client.url('http://localhost:3000/p/1').waitForElementVisible('body', 1000);
});

When(/^I click the dot button$/, () => {
  return  client.click('div[=RSFCarouselDots-dot-112]')
  .pause(1000);
});

Then(/^I should see that image of product$/, ()=> {
  return client.waitForElementVisible('div[=RSFCarouselDots-dot-112 RSFCarouselDots-dotSelected-113]', 1000);
});