class Base_PO {

    navigate() {
        cy.fixture('config.json').then(data => cy.visit(data.baseUrl));
    }
}
export default Base_PO;