module.exports = {
  ...require('./test/jest-common'), // spread jest config common for global configuration
  // glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '!.next/**',
    '!node_modules/**',
    'pages/**/*.js',
    '!public/**',
    '!styles/**',
    '!test/**',
  ],
  // configure minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  // run tests in all of the specified projects at the same time
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js',
  ],
}
