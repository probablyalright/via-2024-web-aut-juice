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

  static get navbarOrdersAndPayments() {
    return cy.get(".mat-menu-panel [aria-label='Show Orders and Payment Menu']");
  }

  static get navbarSavedAddresses() {
    return cy.get(".mat-menu-panel [aria-label='Go to saved address page']");
  }

  static get navbarMyPaymentOptions() {
    return cy.get(".mat-menu-panel [aria-label='Go to saved payment methods page']");
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

  static get expandProductCardReviews() {
    return cy.get("[aria-label='Expand for Reviews'] .mat-expansion-indicator");
  }

  static get productReviewsText() {
    return cy.get(".review-text");
  }

  static get productReviewInputField() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get productReviewSubmitButton() {
    return cy.get("#submitButton");
  }

  static get displayedCardCount() {
    return cy.get(".mat-select-min-line");
  }

  static get allDisplayedCards() {
    return cy.get(".mat-grid-tile");
  }

  static get actualDisplayedCardLabel() {
    return cy.get(".mat-paginator-range-label");
  }

  static get cardCountOptions() {
    return cy.get(".mat-option-text");
  }

  static get addToBasketButton() {
    return cy.get("[aria-label='Add to Basket']");
  }

  static get viewMyBasketButton() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

  static get foo() {
    return cy.get(".moo");
  }
}
