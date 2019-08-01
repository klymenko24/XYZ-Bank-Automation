const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/*'],
  baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/#',
  ignoreSynchronization: false,
  onPrepare: () => {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({ savePath: 'target/screenshots' }));
  },
  suites: {
    customerLogin: ['./specs/customerLogin.js'],
    managerLogin: ['./specs/managerLogin.js'],
  },
};
