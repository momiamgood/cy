const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dodopizza.ru/',
    setupNodeEvents(on, config) {
      
    },
  },
});
