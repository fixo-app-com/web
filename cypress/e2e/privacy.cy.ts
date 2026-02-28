describe("Privacy Policy page", () => {
  beforeEach(() => {
    cy.visit("/privacy");
  });

  it("renders the page heading", () => {
    cy.contains("h1", "Privacy Policy").should("be.visible");
  });

  it("renders key policy sections", () => {
    cy.contains("Information We Collect").should("exist");
    cy.contains("How We Use Your Information").should("exist");
    cy.contains("Data Storage").should("exist");
    cy.contains("Data Sharing").should("exist");
    cy.contains("Data Retention").should("exist");
    cy.contains("Children").should("exist");
    cy.contains("Contact Us").should("exist");
  });

  it("renders the contact email", () => {
    cy.get('a[href="mailto:support@fixoapp.com"]').should("exist");
  });

  it("renders the shared navbar and footer", () => {
    cy.get("nav").should("exist");
    cy.get("footer").should("exist");
  });
});
