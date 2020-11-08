module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/server/__tests__/**/*.(j|t)s'],
}
