module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '@components': '<rootDir>/src/components/',
    '\\.(css|less|scss)$': '<rootDir>/__Mock__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      '<rootDir>/__Mock__/empty-module.js'
  },

  collectCoverageFrom: ['src/**/**/*.{js,jsx}','!src/**/**/index.js', '!**/node_modules/**'],
  coverageReporters: ["cobertura", "lcov", "text"],
  testMatch: ['**/tests/*.test.js'],
  testEnvironment: 'jsdom',
  coverageDirectory: 'coverage',
  moduleDirectories: ['node_modules', 'src']
};
