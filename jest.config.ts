export default {
  bail: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  "coveragePathIgnorePatterns": [
    "src/app.ts",
    "src/server.ts",
    "src/application/routes",
    "src/domain/interfaces",
    "src/service/validators"
  ],
  coverageReporters: [
    "html"
  ],
  preset: "ts-jest",
  setupFiles: [
    "dotenv/config"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.spec.ts?(x)"
  ]
};
