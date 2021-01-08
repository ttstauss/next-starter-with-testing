const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'), // root of the directory containing Jest config file
  displayName: 'lint', // label to show for tests
  runner: 'jest-runner-eslint', // use jest-runner-eslint to reun eslint from jest
  testMatch: ['<rootDir>/**/*.js'], // run on all js files—options configured in package.json
}
