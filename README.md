# Kiwicom Cypress Cucumber

## Project Description
This project contains end-to-end tests for the Kiwicom application, written using Cypress and Cucumber. The tests are written in Gherkin language, making them easy to understand and maintain.

## Project Structure
- `cypress/`: Cypress configuration and tests.
- `features/`: Gherkin files containing test scenarios.

## Requirements
- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rafalciszkowski/kiwicom-cypress-cucumber.git

3. Navigate to the project directory:
   ```bash
   cd kiwicom-cypress-cucumber

5. Install dependencies:
   ```bash
   npm install

## Running Tests
1. Open Cypress (select Chrome):
   ```bash
   npx cypress open

3. Run tests in headless mode:
   ```bash
   npx cypress run --browser chrome

## Configuration
The `cypress.json` file contains the basic Cypress settings. You can customize it to suit your needs.

## Author
Rafał Ciszkowski

## License
This project is licensed under the MIT License.
