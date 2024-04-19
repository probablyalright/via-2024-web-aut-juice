import { BasePage } from "../pageObjects/BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get emailField() {
    return cy.get("#email");
  }

  static get passwordField() {
    return cy.get("#password");
  } 

  static get loginButton() {
    return cy.get("#loginButton");
  }

  static get registerButton() {
    return cy.get("[routerlink='/register']");
  }

  static get elementName() {
    return cy.get("elementSelector");
  }
}
