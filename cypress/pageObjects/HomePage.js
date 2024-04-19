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
}
