module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["clear-text"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off"
  });
};
