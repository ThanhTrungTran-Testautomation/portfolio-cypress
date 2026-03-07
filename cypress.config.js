const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mocha-multi-reporters",

  reporterOptions: {

    reporterEnabled: "mocha-junit-reporter, mochawesome",

    mochaJunitReporterReporterOptions: {
      configFile: "reporter-config.json"
    },

    mochawesomeReporterOptions: {
      reportDir: "results",
      overwrite: false,
      html: true,
      json: true,
      reportTitle: "Cypress Test Report",
      embeddedScreenshots: true
    }},
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
