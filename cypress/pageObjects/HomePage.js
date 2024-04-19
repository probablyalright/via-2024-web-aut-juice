import { BasePage } from "../pageObjects/BasePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get navbarAccountButton() {
    return cy.get("#navbarAccount i");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  } 

  static get navbarAccountUserName() {
    return cy.get("[aria-label='Go to user profile']");
  }

  static get searchButton() {
    return cy.get(".mat-search_icon-search");
  }

  static get searchField() {
    return cy.get(".mat-search_field");
  }

  static get searchResultCard() {
    return cy.get(".item-name");
  }

  static get productCardContent() {
    return cy.get(".mat-dialog-content");
  }

  static get closeProductCard() {
    return cy.get(".close-dialog");
  }


}
