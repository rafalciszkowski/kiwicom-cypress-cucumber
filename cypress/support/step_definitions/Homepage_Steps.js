import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";

Given('I navigate to the kiwi.com homepage', () => {
    Homepage_PO.navigateToHomepage();
    Homepage_PO.acceptCookies();
});

When('I click navbar button', () => {
    Homepage_PO.clickOnNavBarButton();
});

Then('I should see the name of the logged in user {string}', (userName) => {
    Homepage_PO.validateLoggedInUserName(userName);
});

When('I click flag button on topbar', () => {
    Homepage_PO.clickOnFlagButton();
});

When('I select language {string}', (languageCode) => {
    Homepage_PO.selectLanguage(languageCode);
});

When('I select currency {string}', (currency) => {
    Homepage_PO.selectCurrency(currency);
});

When('I click Save button', () => {
    Homepage_PO.clickSave();
});

Then('I should be presented with {string} flag on topbar', (language) => {
    Homepage_PO.validateFlag(language);
});

Then('Default {string} should be translated to selected language', (cityFrom) => {
    Homepage_PO.validateCityFrom(cityFrom);
});

Then('I should be presented with {string}', (currencyCode) => {
    Homepage_PO.validateCurrencyCode(currencyCode);
});