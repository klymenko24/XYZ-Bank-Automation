const HomePage = require(`./homePage.js`)

class LoginPage extends HomePage {
  constructor () {
    super()
    this.loginManagerBtn = $('button[ng-click="manager()"]')
    this.loginCustomerBtn = $('button[ng-click="customer()"]')
  }

  login (role) {
    return this.waitForElement(this.loginCustomerBtn).then(() => {
      return role === 'customer' ? this.loginCustomerBtn.click() : this.loginManagerBtn.click()
    })
  }
}
module.exports = LoginPage
