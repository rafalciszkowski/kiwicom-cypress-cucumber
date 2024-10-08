import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {

    elements = {
        acceptCookiesButton: () => cy.get('#cookies_accept'),
        navBarButton: () => cy.get('[data-test="TopNav-SideNav-Open"]'),
        loggedInUser: () => cy.get('[data-test="TopNav-AccountMenuButton"]'),
        topBarFlagButton: () => cy.get('[data-test="TopNav-RegionalSettingsButton"]'),
        languageSelect: () => cy.get('[data-test="LanguageSelect"]'),
        currencySelect: () => cy.get('[data-test="CurrencySelect"]'),
        saveButton: () => cy.get('[data-test="SubmitRegionalSettingsButton"]'),
        cityFrom: () => cy.get('[data-test="PlacePickerInputPlace"]'),
        selectedTripType: () => cy.get('[data-test*="SearchFormModesPicker-active"]'),
        selectedCabinClass: () => cy.get('[data-test*="CabinClassField-active"]'),
        selectedPassengers: () => cy.get('[data-test="PassengersButton"]'),
        selectedBags: () => cy.get('[data-test="BaggageButton"]'),
        tripType: (typeOfTrip) => cy.contains(typeOfTrip),
        cabinClass: (cabinClass) => cy.get('a[data-test*="CabinClassPicker-filter"]').contains(cabinClass),
        outerElement: () => cy.get('[class *= "absolute z-[3] w-full"]'),
        cabinPopUpButton: (button) => cy.get(`[data-test="CabinClassFooter-${button}"]`),
        passengersPopUpButton: (button) => cy.get(`[data-test="PassengersAndBagsFieldFooter-${button}"]`),
        passengersOptions: (option) => cy.get(`[data-test="PassengersRow-${option}"]`),
        bagsOptions: (option) => cy.get(`[data-test="BagsPopup-${option}"]`)
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

    clickSelectedValue(selectedValue) {
        if (selectedValue === 'typeOfTrip') {
            this.elements.selectedTripType().click();
        } else if (selectedValue === 'cabinClass') {
            this.elements.selectedCabinClass().click();
        } else if (selectedValue === 'passengersField') {
            this.elements.selectedPassengers().click();
        }
    }

    selectTripType(typeOfTrip) {
        this.elements.tripType(typeOfTrip).click();
    }

    validateTripType(typeOfTrip) {
        this.elements.selectedTripType().should('contain', typeOfTrip);
    }

    selectCabinClass(cabinClass) {
        this.elements.cabinClass(cabinClass).click();
    }

    validateCabinClass(cabinClass) {
        this.elements.selectedCabinClass().should('contain', cabinClass);
    }

    clickPopUpButton(button, type) {
        if (type === 'cabin') {
            this.elements.cabinPopUpButton(button).click();
        } else if (type === 'passengers') {
            this.elements.passengersPopUpButton(button).click();
        }
    }

    validatePassengersAndBagsPopupValue(option, type, value) {
        if (type === 'passengers') {
            this.elements.passengersOptions(option).find('input').should('have.attr', 'value', value);
        } else if (type === 'bags') {
            this.elements.bagsOptions(option).find('input').should('have.attr', 'value', value);
        }
    }

    changeValueOfPassengerAndBags(option, type, updateValue) {
        if (type === 'passengers') {
            this.elements.passengersOptions(option).find(`button[aria-label="${updateValue}"]`).click();
        } else if (type === 'bags') {
            this.elements.bagsOptions(option).find(`button[aria-label="${updateValue}"]`).click();
        }
    }

    validatePassengersAndBagsLandingPageValue(number, type) {
        if (type === 'passengers') {
            this.elements.selectedPassengers().find('[data-test*="PassengersField-note"]').should(($el) => {
                expect($el.get(0).innerText.slice(0, 1)).to.eq(number);
            });
        } else if (type === 'bags') {
            this.elements.selectedBags().find('[data-test*="BaggageField-note"]').should(($el) => {
                expect(+($el.get(0).innerText) + +($el.get(1).innerText)).to.eq(+number);
            });
        }
    }

    clickOuterElement() {
        this.elements.outerElement().click();
    }
}
export default new Homepage_PO();