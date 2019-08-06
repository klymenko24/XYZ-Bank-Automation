class BasePage {
  constructor() {
    this.url = `${browser.baseUrl}/login`;
    this.basePageBtn = $('button[ng-click="home()"]');
  }

  open(params) {
    return browser.get(this.url);
  }

  waitForElement(elm) {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(elm), 1000);
  }
}
module.exports = BasePage;
