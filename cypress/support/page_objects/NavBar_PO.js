class NavBar_PO {

    randomString = Math.random().toString(36).substring(2);
    elements = {
        createAccount_Link: () => cy.get('a[role="button"]').contains('Create an account'),
        emailInput: () => cy.get('[data-test="MagicLogin-Email"]'),
        passwordInput: () => cy.get('[data-test="MagicLogin-Password"]'),
        createAccount_Button: () => cy.get('[data-test="MagicLogin-Submit"]'),
        submission_Popup_Text: () => cy.get('[data-test="MagicLogin"] h2'),
        submission_Popup_Email: () => cy.get('[data-test="MagicLogin-CheckEmail"] span'),
        warning_Message: () => cy.get('[data-test="MagicLogin-CreateAccountAlert"]'),
        accountOption_Button: (accountOption) => cy.get(`[data-test="MagicLogin-LoginVia${accountOption}"]`),
        signIn_Button: () => cy.get('[data-test="NavBar-SideNav"] div').contains('Sign in'),
        popUp_Email_Input: () => cy.get('[data-test="MagicLogin-Email-Screen"] input'),
        popUp_Password_Input: () => cy.get('[data-test="MagicLogin-PasswordInput"]'),
        popUp_SignIn_Button: () => cy.get('[name="loginPassword"] button div').contains('Sign in'),
        continueButton: () => cy.get('[data-test="MagicLogin-Continue"]'),
        popUp_Message: () => cy.get('h2').contains('Verify your email').siblings()
    }

    clickOn_CreateAccount_Link() {
        this.elements.createAccount_Link().click();
    }

    typeEmail_And_Password(email, password) {
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

    clickOn_CreateAccount_Button() {
        this.elements.createAccount_Button().click();
    }

    validate_Submission_Popup() {
        this.elements.submission_Popup_Text().should('contain', 'Verify your email');
        this.elements.submission_Popup_Email().invoke('text').should('include', `${this.randomString}@gmail.com`);
    }

    validate_Warning_Message() {
        this.elements.warning_Message().should('contain', 'account.login_already_exists');
    }

    clickOn_Account_Option(accountOption) {
        this.elements.accountOption_Button(accountOption).click();
    }

    clickOn_SignIn_Button() {
        this.elements.signIn_Button().click();
    }

    type_Email(email) {
        email != 'random' ? this.elements.popUp_Email_Input().type(email) : this.elements.popUp_Email_Input().type(`${this.randomString}@gmail.com`);
    }

    type_Password(password) {
        this.elements.popUp_Password_Input().type(password);
    }

    clickOn_Continue_Button() {
        this.elements.continueButton().click();
    }

    validate_Confirm_PopUp() {
        this.elements.popUp_Message().should('contain', `We sent a code to ${this.randomString}@gmail.com`);
    }

    clickOn_PopUp_SignIn_Button() {
        this.elements.popUp_SignIn_Button().click();
    }
}
export default new NavBar_PO();