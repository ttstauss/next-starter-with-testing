const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'), // root of the directory containing Jest config file
  moduleNameMapper: {
    '^@/pages(.*)$': '<rootDir>/pages$1', // NextJS absolute imports
    '\\.module\\.css': 'identity-obj-proxy', // for testing css modules
    '\\.css$': require.resolve('./style-mock.js'), // load a mocked version of css files
  },
  watchPlugins: [
    'jest-watch-select-projects', // add option to switch between projects in watch mode
    'jest-watch-typeahead/filename', // add typeahead support for filtering tests by filename
    'jest-watch-typeahead/testname', // add typeahead support for filtering tests by testname
  ],
}
