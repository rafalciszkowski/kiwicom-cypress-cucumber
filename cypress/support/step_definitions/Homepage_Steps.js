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

When('I click on selected {string}', (selectedValue) => {
    Homepage_PO.clickSelectedValue(selectedValue);
});

When('I select trip type {string}', (typeOfTrip) => {
    Homepage_PO.selectTripType(typeOfTrip);
});

Then('I should be presented with selected trip type {string}', (typeOfTrip) => {
    Homepage_PO.validateTripType(typeOfTrip);
});

When('I select cabin class {string}', (cabinClass) => {
    Homepage_PO.selectCabinClass(cabinClass);
});

Then('I should be presented with selected cabin class {string}', (cabinClass) => {
    Homepage_PO.validateCabinClass(cabinClass);
});

When('I click {string} button in {string} popup', (button, type) => {
    Homepage_PO.clickPopUpButton(button, type);
});

Then('{string} {string} value should be {string}', (option, type, value) => {
    Homepage_PO.validatePassengersAndBagsPopupValue(option, type, value);
});

When('I click in {string} {string} row {string} button', (option, type, updateValue) => {
    Homepage_PO.changeValueOfPassengerAndBags(option, type, updateValue);
});

Then('I should be presented with the number of {string} {string}', (number, type) => {
    Homepage_PO.validatePassengersAndBagsLandingPageValue(number, type);
});

When('I click outer element', () => {
    Homepage_PO.clickOuterElement();
});