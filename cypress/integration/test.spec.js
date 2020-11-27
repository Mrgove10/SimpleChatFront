describe("Home page", () => {
    it("Should click on the ad", () => {
        cy.visit("/");
        cy.get('#title').should("be.visible");
        cy.get('#menu-toggle').click();
    });
});
