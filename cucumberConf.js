exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['./features/*.feature'],
  cucumberOpts: { require: ['./features/step_definitions/steps.js'] },
};
