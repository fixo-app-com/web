describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the navbar with brand and CTA", () => {
    cy.get("nav").within(() => {
      cy.contains("fixo").should("be.visible");
      cy.contains("Inizia Gratis").should("be.visible");
    });
  });

  it("renders the hero section", () => {
    cy.contains("spendi ogni mese?").should("be.visible");
    cy.contains("Prova Fixo Gratis").should("be.visible");
    cy.contains("Scopri di più").should("be.visible");
  });

  it("renders the app preview with categories", () => {
    cy.contains("Spese fisse mensili").should("exist");
    cy.contains("Casa").should("exist");
    cy.contains("Trasporti").should("exist");
    cy.contains("Abbonamenti").should("exist");
    cy.contains("Assicurazioni").should("exist");
  });

  it("renders the features section", () => {
    cy.contains("Tutto quello che ti serve").should("exist");
    cy.contains("Spese Fisse").should("exist");
    cy.contains("Macro Categorie").should("exist");
    cy.contains("Conti Bancari").should("exist");
  });

  it("renders the how it works section", () => {
    cy.contains("Come funziona").should("exist");
    cy.contains("Aggiungi i tuoi conti").should("exist");
    cy.contains("Crea le categorie").should("exist");
    cy.contains("Registra le spese fisse").should("exist");
  });

  it("renders the testimonial section", () => {
    cy.contains("Finalmente so esattamente dove vanno i miei soldi").should(
      "exist",
    );
  });

  it("renders the CTA section", () => {
    cy.contains("Inizia a usare Fixo oggi").should("exist");
  });

  it("renders the footer", () => {
    cy.get("footer").within(() => {
      cy.contains("fixo").should("be.visible");
      cy.contains("Tutti i diritti riservati").should("be.visible");
    });
  });

  it("navigates to features on click", () => {
    cy.contains("Scopri di più").click();
    cy.url().should("include", "#features");
  });
});
