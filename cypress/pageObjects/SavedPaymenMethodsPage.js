import { BasePage } from "../pageObjects/BasePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return "/#/saved-payment-methods";
    }

    static get addNewCardExpansion() {
        return cy.get(".mat-expansion-indicator");
    }

    static get nameField() {
        return cy.get("#mat-input-1");
    }

    static get cardNumberField() {
        return cy.get("#mat-input-2");
    }

    static get expiryMonthSelection() {
        return cy.get("#mat-input-3");
    }

    static get expiryYearSelection() {
        return cy.get("#mat-input-4");
    }

    static get submitButton() {
        return cy.get("#submitButton");
    }

    static get savedPaymentsRows() {
        return cy.get(".mat-row");
    }
}