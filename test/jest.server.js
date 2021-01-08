const path = require('path')

module.exports = {
  ...require('./jest-common'), // spread jest config common to server and client
  displayName: 'server', // label to show for tests
  coverageDirectory: path.join(__dirname, '../coverage/server'), // where to output coverage files
  testEnvironment: 'jest-environment-node', // use the node-like environment through
  testMatch: ['**/__server_tests__/**/*.js'], // where to look for server test files
}
