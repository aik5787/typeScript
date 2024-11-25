const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com/",
    viewportWidth: 1400,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
