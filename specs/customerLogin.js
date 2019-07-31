const LoginPage = require(`../pageObjects/loginPage.js`)
const CustomerPage = require(`../pageObjects/customerPage.js`)

describe(`XYZ Bank customer login functionality`, function () {
  const loginPage = new LoginPage()
  const customerPage = new CustomerPage()

  it(`Should open home page`, function () {
    loginPage.open()
    expect(browser.getCurrentUrl()).toBe(loginPage.url)
  })

  it(`Should login as a customer`, function () {
    loginPage.login(`customer`)
    expect(browser.getCurrentUrl()).toBe(customerPage.url)
  })

  it(`Should select specific customer`, function () {
    customerPage.selectUser('Harry Potter')
    expect(browser.getCurrentUrl()).toBe(customerPage.userAccounts)
  })

  it(`Should select a specific customer's account, check status of the account`, function () {
    customerPage.selectAccount('1006')
    expect(customerPage.accountStatus.getText()).toBe(`Account Number : 1006 , Balance : 0 , Currency : Rupee`)
  })
})
