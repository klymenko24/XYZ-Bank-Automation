const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const LoginPage = require('../../pageObjects/loginPage.js');
const CustomerPage = require('../../pageObjects/customerPage.js');
const BasePage = require('../../pageObjects/basePage.js');

const basePage = new BasePage();
const loginPage = new LoginPage();
const customerPage = new CustomerPage();

async function selectUser(user) {
  await customerPage.usersList.sendKeys(user);
  return customerPage.userLoginBtn.click();
}

Given('{string} opens web-page', async (string) => {
  await browser.get(basePage.url);
  return loginPage.login(string);
});

Given('logged as {string}', string => selectUser(string));

When('customer select his account {string}', string => customerPage.selectAccount(string));

Then('status equal {string}', async string => customerPage.accountStatus.getText()
  .then(text => expect(text).to.equal(string)));
