module.exports = {
  ...require('./jest-common'),
  displayName: 'next/client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
  ],
  snapshotSerializers: ['jest-emotion'],
  testMatch: ['<rootDir>/**/__tests__/**/*.(j|t)s(x)?'],
  modulePathIgnorePatterns: ['<rootDir>/pages/api', '<rootDir>/server'],
}
