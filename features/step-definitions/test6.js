const {Given,When,Then}= require('@cucumber/cucumber')

Given(/^I am on products page$/, () => {
  return client.url('http://localhost:3000/p/3').waitForElementVisible('body', 1000);
});

And(/^I click on sort by button$/, () => {
    return client.click('//*[@id="__next"]/main/div/div[2]/div[2]/div[4]/button')
  });
  

When(/^I chose sort by rating$/, () => {
  return  client.click('/html/body/div[5]/div[3]/ul/li[4]')
  .pause(1000);
});

Then(/^I should be able to see that product sorted by that order$/, ()=> {
  return client.waitForElementPresent('.MuiDialogContent-root', 5000);
});