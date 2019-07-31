const LoginPage = require(`../pageObjects/loginPage.js`)
const ManagerPage = require(`../pageObjects/managerPage.js`)

describe(`Manager Login functionality`, function () {
  const loginPage = new LoginPage()
  const managerPage = new ManagerPage()

  it(`Should open home page`, function () {
    loginPage.open()
    expect(browser.getCurrentUrl()).toBe(loginPage.url)
  })

  it(`Should login as a manager`, function () {
    loginPage.login(`manager`)
    expect(browser.getCurrentUrl()).toBe(managerPage.url)
  })

  it(`Should open customers list and find a postcode by customer name`, function () {
    managerPage.openCustomerList()
    expect(managerPage.getPostcode(`Harry Potter`)).toBe(`E725JB`)
  })
})
