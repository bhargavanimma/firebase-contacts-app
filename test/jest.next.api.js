module.exports = {
  ...require('./jest-common'),
  displayName: 'next/api',
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/pages/api/__tests__/**/*.(j|t)s'],
}
