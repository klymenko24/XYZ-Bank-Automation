const LoginPage = require('./loginPage.js');

class CustomerPage extends LoginPage {
  constructor() {
    super();
    this.usersList = $('#userSelect');
    this.userLoginBtn = $('button[ng-show="custId != \'\'"]');
    this.accountSelectBtn = $('#accountSelect');
    this.accountStatus = $('.center:nth-child(3)');
    this.transactionBtn = $('button[ng-click="transactions()"]');
    this.depositBtn = $('button[ng-click="deposit()"]');
    this.withdrawalBtn = $('button[ng-click="withdrawl()"]');
    this.url = `${browser.baseUrl}/customer`;
    this.userAccounts = `${browser.baseUrl}/account`;
  }

  selectUser(user) {
    return this.waitForElement(this.usersList).then(() => this.usersList.sendKeys(user))
      .then(() => this.waitForElement(this.userLoginBtn).then(() => this.userLoginBtn.click()));
  }

  selectAccount(accountNumber) {
    return this.waitForElement(this.accountSelectBtn).then(() => this.accountSelectBtn.sendKeys(accountNumber))
      .then(() => this.waitForElement(this.accountStatus));
  }
}

module.exports = CustomerPage;
