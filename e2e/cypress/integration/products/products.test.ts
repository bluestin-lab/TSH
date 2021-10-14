/// <reference types="Cypress" />

import { NavigationMenu } from "../../pages/Navigation";

context("Products page should", () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it("Render Products Container", () => {
    cy.clearSession();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get("#products-container").should("exist");
  });

  it("Render Header", () => {
    cy.get("#header").should("exist");
  });

  it("Allows Search to be used", () => {
    cy.get("#header input[type=text]").type("Unbranded Soft Ball");
    cy.contains("#products-container", "Unbranded Soft Ball");
  });

  it("Allows Checkbox to be used", () => {
    cy.get("#Active").click({ force: true });
    cy.contains("Unavailable").should("not.exist");
  });

  it("Allows Modal to be open", () => {
    cy.contains("Show details").click({ force: true });
    cy.get("#modal-body").should("exist");
  });
});
