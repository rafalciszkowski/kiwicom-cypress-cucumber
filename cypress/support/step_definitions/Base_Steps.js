import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
});