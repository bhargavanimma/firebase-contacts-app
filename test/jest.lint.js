module.exports = {
  ...require('./jest-common'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.(j|t)s(x)?'],
}
