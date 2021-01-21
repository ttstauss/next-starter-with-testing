const path = require('path')

module.exports = {
  ...require('./jest-common'), // spread jest config common to client and server
  displayName: 'client', // label to show for tests
  coverageDirectory: path.join(__dirname, '../coverage/server'), // where to output coverage files
  testEnvironment: 'jest-environment-jsdom', // use the browser-like environment through jsdom
  testMatch: ['**/__client_tests__/**/*.js'], // where to look for client test files
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', // load jest-dom for better assertions into all test files
    'jest-axe/extend-expect', // load aXe for better accessibility assertions into all test files
  ],
}
