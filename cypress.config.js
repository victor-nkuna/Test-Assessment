const { defineConfig } = require('cypress');
require('dotenv').config();

// Generate timestamp for report directory
const currentDate = new Date();
const timestamp = currentDate.toISOString()
  .replace(/T/, '_')
  .replace(/\..+/, '')
  .replace(/:/g, '-');

module.exports = defineConfig({
  e2e: {
    // ... keep your existing e2e config ...
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: `cypress/reports/${timestamp}`, // Dated directory
    embeddedScreenshots: true,
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    overwrite: false,
    html: true,
    json: false,
    timestamp: currentDate.toLocaleString() // Add timestamp to report meta
  }
});