class NavBar_PO {

    randomString = Math.random().toString(36).substring(2);
    elements = {
        createAccountLink: () => cy.get('a[role="button"]').contains('Create an account'),
        emailInput: () => cy.get('[data-test="MagicLogin-Email"]'),
        passwordInput: () => cy.get('[data-test="MagicLogin-Password"]'),
        createAccountButton: () => cy.get('[data-test="MagicLogin-Submit"]'),
        submissionPopupText: () => cy.get('[data-test="MagicLogin"] h2'),
        submissionPopupEmail: () => cy.get('[data-test="MagicLogin-CheckEmail"] span'),
        warningMessage: () => cy.get('[data-test="MagicLogin-CreateAccountAlert"]'),
        accountOptionButton: (accountOption) => cy.get(`[data-test="MagicLogin-LoginVia${accountOption}"]`),
        signInButton: () => cy.get('[data-test="TopNav-SideNav"] button div').contains('Sign in'),
        popUpEmailInput: () => cy.get('[data-test="MagicLogin-Email-Screen"] input'),
        popUpPasswordInput: () => cy.get('[data-test="MagicLogin-PasswordInput"]'),
        popUpSignInButton: () => cy.get('[name="loginPassword"] button div').contains('Sign in'),
        continueButton: () => cy.get('[data-test="MagicLogin-Continue"]'),
        popUpMessage: () => cy.get('h2').contains('Verify your email').siblings()
    }

    clickOnCreateAccountLink() {
        this.elements.createAccountLink().click();
    }

    typeEmailAndPassword(email, password) {
        if (email === 'random') {
            email = `${this.randomString}@gmail.com`;
            password = `${this.randomString}#123`;
            this.elements.emailInput().type(email, { force: true });
            this.elements.passwordInput().type(password);
        } else {
            this.elements.emailInput().type(email, { force: true });
            this.elements.passwordInput().type(password);
        }
    }

    clickOnCreateAccountButton() {
        this.elements.createAccountButton().click();
    }

    validateSubmissionPopup() {
        this.elements.submissionPopupText().should('contain', 'Verify your email');
        this.elements.submissionPopupEmail().invoke('text').should('include', `${this.randomString}@gmail.com`);
    }

    validateWarningMessage() {
        this.elements.warningMessage().should('contain', 'account.login_already_exists');
    }

    clickOnAccountOption(accountOption) {
        this.elements.accountOptionButton(accountOption).click();
    }

    clickOnSignInButton() {
        this.elements.signInButton().click();
    }

    typeEmail(email) {
        email != 'random' ? this.elements.popUpEmailInput().type(email) : this.elements.popUpEmailInput().type(`${this.randomString}@gmail.com`);
    }

    typePassword(password) {
        this.elements.popUpPasswordInput().type(password);
    }

    clickOnContinueButton() {
        this.elements.continueButton().click();
    }

    validateConfirmPopUp() {
        this.elements.popUpMessage().should('contain', `We sent a code to ${this.randomString}@gmail.com`);
    }

    clickOnPopUpSignInButton() {
        this.elements.popUpSignInButton().click();
    }
}
export default new NavBar_PO();