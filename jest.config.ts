export default {
  bail: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "html"
  ],
  preset: "ts-jest",
  setupFiles: [
    'dotenv/config'
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.spec.ts?(x)"
  ]
};
