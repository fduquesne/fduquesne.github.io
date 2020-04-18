module.exports = {
  collectCoverageFrom: ["**/*.test.js", "!**/node_modules/**"],
  setupFilesAfterEnv: ["./test.config.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};
