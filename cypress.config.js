const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "results/junit-[hash].xml",
    toConsole: false
  },
  e2e: {
    baseUrl: 'http://localhost:3000',  // Basis-URL für alle Tests
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      // Node Event Hooks für CI/CD, Plugins oder Tasks
    },
  },
  env: {
    loginPath: '/login',
    dashboardPath: '/dashboard'
  },
});
