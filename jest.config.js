module.exports = {
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverageFrom: [
    "src/**/*.{tsx, ts, js, jsx}",
    "!src/private/**/*",
    "!src/icons/**/*.{tsx, ts, js, jsx}",
    "!src/**/*stories.{tsx, ts, js, jsx}",
    "!src/**/*test.{tsx, ts, js, jsx}",
  ],
};
