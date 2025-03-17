# SauceDemo Automation with Cypress

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/saucedemo-cypress/ci.yml)](https://github.com/your-username/saucedemo-cypress/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Automated test suite for [SauceDemo](https://www.saucedemo.com/) using Cypress, following the Page Object Model (POM) design pattern.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Directory Structure](#directory-structure)
- [Sauce Labs Integration](#sauce-labs-integration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features
- ✅ Login/logout functionality
- ✅ Product sorting validation
- ✅ Cart management (add/remove items)
- ✅ Checkout process
- ❌ Negative testing scenarios
- 📊 Mochawesome HTML reports
- 🌐 Cross-browser testing support

---

## Prerequisites
- Node.js v16+ 
- npm v8+
- [Sauce Labs Account](https://saucelabs.com/sign-up) (optional for cloud execution)
- `.env` file with credentials (see [Configuration](#configuration))

---

## Installation

1. Clone repository:
   ```bash
   git clone https://github.com/developerVictorNkuna/Test-Assessment.git
   cd Test-Assessment

   # Cypress Test Automation Setup

## Install Dependencies

```bash
npm install
```

## Install Cypress (if not auto-installed)

```bash
npm install cypress --save-dev
```

## Configuration

### Create `.env` file in root directory:

```ini
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
SAUCE_LABS_USERNAME=your_sauce_labs_username
SAUCE_LABS_ACCESS_KEY=your_sauce_labs_access_key
```

### Cypress Configuration (`cypress.config.js`):

```javascript
module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    html: true,
    json: false
  },
  env: {
    baseUrl: 'https://www.saucedemo.com'
  }
});
```

## Running Tests

### Local Execution:

```bash
# Run all tests in headless mode
npm test

# Run specific test file
npx cypress run --spec "cypress/e2e/login.cy.js"

# Open Cypress Test Runner (GUI)
npx cypress open
```

### Browser Specific:

```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

### Sauce Labs Cloud Execution:

```bash
npm run test:cloud
```

## Test Reports

HTML reports are generated after test runs in `cypress/reports/`.

To generate/view reports:

```bash
npm run report
open cypress/reports/index.html
```

## Sample Report

### Directory Structure

```
cypress/
├── e2e/                   # Test specs
├── fixtures/              # Test data
├── support/
│   ├── pages/             # Page objects
│   │   ├── LoginPage.js
│   │   └── CartPage.js
│   └── commands.js        # Custom commands
.env                       # Environment variables
cypress.config.js          # Cypress config
```

## Sauce Labs Integration

To run tests on Sauce Labs cloud:

1. Set your credentials in `.env`
2. Configure `cypress.config.js`:

```javascript
module.exports = defineConfig({
  sauce: {
    region: 'us-west-1',
    build: `Build ${Date.now()}`
  }
});
```

3. Run:

```bash
npm run test:cloud
```

