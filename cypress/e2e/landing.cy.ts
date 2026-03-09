describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the navbar with logo and download link", () => {
    cy.get("nav").first().within(() => {
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
    cy.contains("Overview").should("exist");
  });

  it("renders the features section", () => {
    cy.contains("Why Fixo is different").should("exist");
    cy.contains("Set It Once").should("exist");
    cy.contains("Every Frequency, One View").should("exist");
    cy.contains("Per-Wallet Clarity").should("exist");
  });

  it("renders the how it works section", () => {
    cy.contains("How it works").should("exist");
    cy.contains("Create your account").should("exist");
    cy.contains("Add your wallets").should("exist");
    cy.contains("Enter your fixed costs").should("exist");
  });

  it("renders the testimonial section", () => {
    cy.contains("Surprised by that bill you forgot about").should("exist");
  });

  it("renders the CTA section", () => {
    cy.contains("Know where your money really goes").should("exist");
  });

  it("renders the footer with copyright", () => {
    cy.get("footer").within(() => {
      cy.contains("All rights reserved").should("be.visible");
    });
  });

  it("footer contains Privacy Policy and Support links", () => {
    cy.get("footer").within(() => {
      cy.get('a[href="/privacy"]').should("contain.text", "Privacy Policy");
      cy.get('a[href="/support"]').should("contain.text", "Support");
    });
  });
});
