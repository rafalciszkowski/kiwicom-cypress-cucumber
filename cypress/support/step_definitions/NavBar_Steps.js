import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NavBar_PO from "../page_objects/NavBar_PO";

When('I click Create an account link', () => {
    NavBar_PO.clickOn_CreateAccount_Link();
});

When('I type an {string} email and {string} password', (email, password) => {
    NavBar_PO.typeEmail_And_Password(email, password);
});

When('I click on the Create an account button', () => {
    NavBar_PO.clickOn_CreateAccount_Button();
});

Then('I should be presented with Verify your email message', () => {
    NavBar_PO.validate_Submission_Popup();
});

Then('I should be presented with warning message', () => {
    NavBar_PO.validate_Warning_Message();
});

When('I click Sign in button', () => {
    NavBar_PO.clickOn_SignIn_Button();
});

When('I select login via {string} option', (accountOption) => {
    NavBar_PO.clickOn_Account_Option(accountOption);
});

When('I provide an email address {string}', (email) => {
    NavBar_PO.type_Email(email);
});

When('I click Continue button', () => {
    NavBar_PO.clickOn_Continue_Button();
});

Then('I should be presented with message We sent a code to email', () => {
    NavBar_PO.validate_Confirm_PopUp();
});

When('I provide a password {string}', (password) => {
    NavBar_PO.type_Password(password);
});

When('I click Sign in button in confirmation pop-up', () => {
    NavBar_PO.clickOn_PopUp_SignIn_Button();
});