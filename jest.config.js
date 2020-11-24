module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  transform: { ".(ts|tsx)$": "ts-jest/dist" },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  collectCoverageFrom: [
    "src/**/*.{tsx, ts, js, jsx}",
    "!src/private/**/*",
    "!src/icons/**/*.{tsx, ts, js, jsx}",
    "!src/**/*stories.{tsx, ts, js, jsx}",
    "!src/**/*test.{tsx, ts, js, jsx}",
  ],
};
