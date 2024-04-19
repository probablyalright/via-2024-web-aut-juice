import { BasePage } from "../pageObjects/BasePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/addresses/saved";
  }

  static get addNewAddressButton() {
    return cy.get("[aria-label='Add a new address']");
  }
}