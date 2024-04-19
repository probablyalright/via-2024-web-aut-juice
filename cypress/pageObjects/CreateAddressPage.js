import { BasePage } from "../pageObjects/BasePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/addresses/saved";
  }

  static get countryField() {
    return cy.get("[placeholder='Please provide a country.']");
  }

  static get nameField() {
    return cy.get("[placeholder='Please provide a name.']");
  }

  static get mobilenumberField() {
    return cy.get("[placeholder='Please provide a mobile number.']");
  }

  static get zipcodeField() {
    return cy.get("[placeholder='Please provide a ZIP code.']");
  }

  static get addressField() {
    return cy.get("[placeholder='Please provide an address.']");
  }

  static get cityField() {
    return cy.get("[placeholder='Please provide a city.']");
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }

  static get savedAddressesRows() {
    return cy.get(".mat-row");
  }
}