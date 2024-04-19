import { BasePage } from "../pageObjects/BasePage";

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return "/#/address/";
    }

    static get deliveryMethodRow() {
        return cy.get("[role='row']");
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
}
