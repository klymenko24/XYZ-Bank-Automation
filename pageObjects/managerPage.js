const LoginPage = require(`./loginPage.js`)

class ManagerPage extends LoginPage {
  constructor () {
    super()
    this.customersListBtn = $(`button[ng-click="showCust()"]`)
    this.customersList = $$(`tr`)
    this.openAccount = $(`button[ng-click="openAccount()"]`)
    this.addCustomer = $(`button[ng-click="addCust()"]`)
    this.url = `http://www.way2automation.com/angularjs-protractor/banking/#/manager`
  }

  openCustomerList () {
    return this.waitForElement(this.customersListBtn).then(() => this.customersListBtn.click())
  }

  getPostcode (name) {
    return this.customersList.getText()
      .then(text => text.filter(item => item.includes(name)))
      .then(filteredName => filteredName.toString().split(` `)[2])
  }
}
module.exports = ManagerPage
