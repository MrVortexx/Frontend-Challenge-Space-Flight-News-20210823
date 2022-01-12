module.exports = {
    testPathIgnorePatterns: ["/node_modules"],
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
    testEnvironment: "jsdom"
}