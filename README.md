# API Automation with Cypress

This project demonstrates API automation using Cypress, a JavaScript end-to-end testing framework.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)

## Introduction

This repository contains API automation tests implemented using Cypress. It showcases how Cypress can be used to perform various HTTP requests such as GET, POST, PUT, PATCH, and DELETE for testing RESTful APIs.

## Features

- Demonstrates API automation using Cypress.
- Includes examples of GET, POST, PUT, PATCH, and DELETE requests.
- Clear and modular project structure for easy maintenance and extension.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/API-Automation-with-Cypress.git
    cd api-automation-cypress
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Writing Tests

You can find API test scripts in the `cypress/e2e` directory. Each test file (`*.js`) contains individual test cases demonstrating various HTTP requests.

```javascript
// Example test file: cypress/integration/api_spec.js
describe('API Testing', () => {
  // ... your test cases here
});
```
# Project Structure

```bash
/API-Automation-with-Cypress
|-- e2e/
|   |-- API-Automation.cy.js
|-- fixtures/
|   |-- jsonplaceholder.json
|-- support/
|   |-- command.js
|   |-- e2e.js
|-- node_modules
|-- .gitignore
|-- cypress.config.js
|-- README.md
```
* e2e/: This is where your test files reside.
* fixtures/: Contains files that define static data for your tests, such as JSON files.
* Fixtures/: Contains reusable keyword files.
* Suppport/: Contains files that provide support functions for your tests.
* .gitignore: Specifies files and directories to be ignored by Git.
* cypress.config.js: The main configuration file for Cypress. It contains configuration options for Cypress, including settings related to the test runner and browser.
