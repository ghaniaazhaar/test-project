module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy", // For handling CSS imports in tests
     // For handling CSS imports in tests
    },
  };
  