import { BasePage } from "../pageObjects/BasePage";

export class OrderCompletionPage extends BasePage {
    static get url() {
        return "/#/order-summary";
    }

    static get confirmationMessage() {
        return cy.get(".confirmation");
    }
}