const nextJest = 'next/jest';
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
};
module.exports = createJestConfig(customJestConfig);
