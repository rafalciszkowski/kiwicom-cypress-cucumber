import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavBar_PO from "../page_objects/NavBar_PO";

When('I click Create an account link', () => {
    NavBar_PO.clickOnCreateAccountLink();
});

When('I type an {string} email and {string} password', (email, password) => {
    NavBar_PO.typeEmailAndPassword(email, password);
});

When('I click on the Create an account button', () => {
    NavBar_PO.clickOnCreateAccountButton();
});

Then('I should be presented with Verify your email message', () => {
    NavBar_PO.validateSubmissionPopup();
});

Then('I should be presented with warning message', () => {
    NavBar_PO.validateWarningMessage();
});

When('I click Sign in button', () => {
    NavBar_PO.clickOnSignInButton();
});

When('I select login via {string} option', (accountOption) => {
    NavBar_PO.clickOnAccountOption(accountOption);
});

When('I provide an email address {string}', (email) => {
    NavBar_PO.typeEmail(email);
});

When('I click Continue button', () => {
    NavBar_PO.clickOnContinueButton();
});

Then('I should be presented with message We sent a code to email', () => {
    NavBar_PO.validateConfirmPopUp();
});

When('I provide a password {string}', (password) => {
    NavBar_PO.typePassword(password);
});

When('I click Sign in button in confirmation pop-up', () => {
    NavBar_PO.clickOnPopUpSignInButton();
});