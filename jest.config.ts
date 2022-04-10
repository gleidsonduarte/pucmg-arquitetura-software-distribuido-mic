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
    "src/application/controllers/AuthController.ts",
    "src/application/routes",
    "src/application/middleware",
    "src/domain/interfaces",
    "src/infrastructure/ioc/externalsAPI/EmailExternal.ts",
    "src/infrastructure/data/repositories/UserRepository.ts",
    "src/service/validators",
    "src/service/services/AuthService.ts"
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
