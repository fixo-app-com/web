describe("Support page", () => {
  beforeEach(() => {
    cy.visit("/support");
  });

  it("renders the page heading", () => {
    cy.contains("h1", "Support").should("be.visible");
  });

  it("renders the contact email", () => {
    cy.get('a[href="mailto:support@fixo-app.com"]').should("exist");
  });

  it("renders account deletion information", () => {
    cy.contains("Account Deletion").should("exist");
  });

  it("renders the shared navbar and footer", () => {
    cy.get("nav").should("exist");
    cy.get("footer").should("exist");
  });
});
