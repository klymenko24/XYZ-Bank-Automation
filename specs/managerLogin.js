const LoginPage = require('../pageObjects/loginPage.js');
const ManagerPage = require('../pageObjects/managerPage.js');
const ManagerData = require('../data/managerData.js');

describe('Manager Login functionality', () => {
  const loginPage = new LoginPage();
  const managerPage = new ManagerPage();
  const data = new ManagerData();

  it('Should open home page', () => {
    loginPage.open();
    expect(browser.getCurrentUrl()).toBe(loginPage.url);
  });

  it('Should login as a manager', () => {
    loginPage.login(data.role);
    expect(browser.getCurrentUrl()).toBe(managerPage.url);
  });

  it('Should open customers list and find a postcode by customer name', () => {
    managerPage.openCustomerList();
    expect(managerPage.getPostcode(data.customer)).toBe(data.postcode);
  });
});
