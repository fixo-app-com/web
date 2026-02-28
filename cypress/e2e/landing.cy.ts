describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the navbar with logo and download link", () => {
    cy.get("nav").within(() => {
      cy.get('img[alt="Fixo"]').should("be.visible");
      cy.contains("Download").should("be.visible");
    });
  });

  it("renders the hero section", () => {
    cy.contains("crystal clear").should("be.visible");
    cy.contains("App Store").should("be.visible");
  });

  it("renders the app preview with phone screens", () => {
    cy.contains("Everything at a glance").should("exist");
    cy.contains("Housing").should("exist");
  });

  it("renders the features section", () => {
    cy.contains("Built for what matters").should("exist");
    cy.contains("Only Fixed Costs").should("exist");
    cy.contains("Income Clarity").should("exist");
    cy.contains("Per-Wallet Breakdown").should("exist");
  });

  it("renders the how it works section", () => {
    cy.contains("How it works").should("exist");
    cy.contains("Name your wallets").should("exist");
    cy.contains("Organize by category").should("exist");
    cy.contains("See your real picture").should("exist");
  });

  it("renders the testimonial section", () => {
    cy.contains("72% of my salary was already committed").should("exist");
  });

  it("renders the CTA section", () => {
    cy.contains("Know your real budget").should("exist");
  });

  it("renders the footer with logo", () => {
    cy.get("footer").within(() => {
      cy.get('img[alt="Fixo"]').should("be.visible");
      cy.contains("All rights reserved").should("be.visible");
    });
  });
});
