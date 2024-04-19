import { BasePage } from "../pageObjects/BasePage";

export class RegisterPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static generateRandomEmail() {
        var val = Math.floor(1000 + Math.random() * 9000);
        return 'email_'.concat(val, '@ebox.com');
    }

    static get emailField() {
        return cy.get("#emailControl");
    }
    
    static get passwordField() {
        return cy.get("#passwordControl");
    }
    
    static get repeatPasswordField() {
        return cy.get("#repeatPasswordControl");
    }

    static get securityQuestionField() {
        return cy.get("[name='securityQuestion']");
    }
    
    static get securityQuestionsSelection() {
        return cy.get(".mat-option-text");
    }

    static get securityAnswerField() {
        return cy.get("#securityAnswerControl");
    }
    
    static get registerButton() {
        return cy.get("#registerButton");
    }
}