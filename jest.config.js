// module.exports = {
//   "testEnvironment": "jsdom",
//   transform: {
//     "^.+\\.jsx?$": "babel-jest"
//   },
//   babelConfig: require('../.babelrc')
// }

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}