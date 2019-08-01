const LoginPage = require('../pageObjects/loginPage.js');
const CustomerPage = require('../pageObjects/customerPage.js');
const CustomerData = require('../data/customerData.js');

describe('XYZ Bank customer login functionality', () => {
  const loginPage = new LoginPage();
  const customerPage = new CustomerPage();
  const data = new CustomerData();

  it('Should open home page', () => {
    loginPage.open();
    expect(browser.getCurrentUrl()).toBe(loginPage.url);
  });

  it('Should login as a customer', () => {
    loginPage.login(data.role);
    expect(browser.getCurrentUrl()).toBe(customerPage.url);
  });

  it('Should select specific customer', () => {
    customerPage.selectUser(data.user);
    expect(browser.getCurrentUrl()).toBe(customerPage.userAccounts);
  });

  it('Should select a specific customer\'s account, check status of the account', () => {
    customerPage.selectAccount(data.account);
    expect(customerPage.accountStatus.getText()).toBe(data.accountStatus);
  });
});
