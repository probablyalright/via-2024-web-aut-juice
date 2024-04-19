import { BasePage } from "../pageObjects/BasePage";

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return "/#/address/";
    }

    static get continueButton() {
        return cy.get("[aria-label='Proceed to review']");
    }

    static get rows() {
        return cy.get(".mat-row");
    }
    
    static selectPaymentBasedOnOption(opt) {
        return this.rows.contains(opt).parent().find(".mat-radio-container");
    }
}