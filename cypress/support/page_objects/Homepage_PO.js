import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {

    elements = {
        acceptCookies_Button: () => cy.get('#cookies_accept'),
        navBar_Button: () => cy.get('[data-test="NavBar-SideNav-Open"]'),
        loggedIn_User: () => cy.get('[data-test="AccountMenuButton"]')
    }

    navigateToHomepage() {
        super.navigate();
    }

    acceptCookies() {
        this.elements.acceptCookies_Button().click();
    }

    clickOn_NavBar_Button() {
        this.elements.navBar_Button().click();
    }

    validate_LoggedIn_UserName(userName) {
        this.elements.loggedIn_User().should('contain', userName);
    }
}
export default new Homepage_PO();