class HomePage {
  constructor () {
    this.url = `http://www.way2automation.com/angularjs-protractor/banking/#/login`
  }

  open (params) {
    return browser.get(this.url)
  }

  waitForElement (elm) {
    const EC = protractor.ExpectedConditions
    return browser.wait(EC.visibilityOf(elm), 1000)
  }
}
module.exports = HomePage
