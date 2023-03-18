// module.exports = {
//   "testEnvironment": "jsdom",
//   transform: {
//     "^.+\\.jsx?$": "babel-jest"
//   },
//   babelConfig: require('../.babelrc')
// }

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
}