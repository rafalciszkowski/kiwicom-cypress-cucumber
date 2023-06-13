import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {

    elements = {
        acceptCookiesButton: () => cy.get('#cookies_accept'),
        navBarButton: () => cy.get('[data-test="NavBar-SideNav-Open"]'),
        loggedInUser: () => cy.get('[data-test="AccountMenuButton"]'),
        topBarFlagButton: () => cy.get('[data-test="RegionalSettingsButton"]'),
        languageSelect: () => cy.get('[data-test="LanguageSelect"]'),
        currencySelect: () => cy.get('[data-test="CurrencySelect"]'),
        saveButton: () => cy.get('[data-test="SubmitRegionalSettingsButton"]'),
        cityFrom: () => cy.get('[data-test="PlacePickerInputPlace"]'),
    }

    navigateToHomepage() {
        super.navigate();
    }

    acceptCookies() {
        this.elements.acceptCookiesButton().click();
    }

    clickOnNavBarButton() {
        this.elements.navBarButton().click();
    }

    validateLoggedInUserName(userName) {
        this.elements.loggedInUser().should('contain', userName);
    }

    clickOnFlagButton() {
        this.elements.topBarFlagButton().click();
    }

    selectLanguage(languageCode) {
        this.elements.languageSelect().select(languageCode);
    }

    selectCurrency(currency) {
        this.elements.currencySelect().select(currency);
    }

    clickSave() {
        this.elements.saveButton().click();
    }

    validateFlag(language) {
        this.elements.topBarFlagButton().find('img').should('have.attr', 'title', language);
    }

    validateCityFrom(cityFrom) {
        this.elements.cityFrom().should('contain', cityFrom);
    }

    validateCurrencyCode(currencyCode) {
        this.elements.topBarFlagButton().find('div').last().should('contain', currencyCode);
    }
}
export default new Homepage_PO();