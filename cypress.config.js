const { defineConfig } = require("cypress");
const cypressSplit = require("cypress-split")

module.exports = defineConfig({

  reporter: "mocha-multi-reporters",

  reporterOptions: {
    reporterEnabled: "mocha-junit-reporter, mochawesome",

    mochaJunitReporterReporterOptions: {
      mochaFile: "results/junit-[hash].xml",
      testsuitesTitle: "Cypress Tests",
      toConsole: false
    },

    mochawesomeReporterOptions: {
      reportDir: "results",
      overwrite: false,
      html: false,
      json: true,
      reportTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true
    }
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",

    setupNodeEvents(on, config) {
      // Plugins oder Tasks können hier registriert werden
      if (config.env.split) {
        console.log("Split detected:", config.env.splitIndex, config.env.splitTotal); // DEBUG
        cypressSplit(on, config);
      }
      return config;
    }
  },

  env: {
    loginPath: "/login",
    dashboardPath: "/dashboard",
    split: false,      // Default false, wird per CLI überschrieben
    splitIndex: 0,     // Default 0
    splitTotal: 1      // Default 1
  }
});