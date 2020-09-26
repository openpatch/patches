module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  snapshotSerializers: ["jest-emotion"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{tsx, ts, js, jsx}",
    "!src/icons/**/*.{tsx, ts, js, jsx}",
    "!src/**/*stories.{tsx, ts, js, jsx}",
    "!src/**/*test.{tsx, ts, js, jsx}",
  ],
};
