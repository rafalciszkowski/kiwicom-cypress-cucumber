import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

Given('I navigate to the kiwi.com homepage', () => {
    Homepage_PO.navigateToHomepage();
    Homepage_PO.acceptCookies();
});

When('I click navbar button', () => {
    Homepage_PO.clickOn_NavBar_Button();
});

Then('I should see the name of the logged in user {string}', (userName) => {
    Homepage_PO.validate_LoggedIn_UserName(userName);
});