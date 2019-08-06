// cucumber + protractor

exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['./features/*'],
  cucumberOpts: { require: ['./features/step_definitions/*.js'] },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://www.way2automation.com/angularjs-protractor/banking/#',
  ignoreSynchronization: false,
  SELENIUM_PROMISE_MANAGER: false,
  suites: {
  },
};