module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy", // For handling CSS imports in tests
  },
  transform: {
      "^.+\\.tsx?$": "ts-jest", // Add this line to handle TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Ensure file extensions are recognized
};
