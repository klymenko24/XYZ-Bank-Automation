const { expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const LoginPage = require('../../pageObjects/loginPage.js');
const ManagerPage = require('../../pageObjects/managerPage.js');
const BasePage = require('../../pageObjects/basePage.js');

const basePage = new BasePage();
const loginPage = new LoginPage();
const managerPage = new ManagerPage();

Given('Manager opens web-page', async () => basePage.open());

Given('logged as manager', async () => loginPage.login('manager'));

Given('opens customer list', async () => managerPage.openCustomerList());

When('find a postcode by name {string}', async string => managerPage.getPostcode(string));

Then('checks founded postсode to {string}', (string) => {
  managerPage.getPostcode(string).then(text => text.getText())
    .then(text => expect(text).to.equal(string));
});
