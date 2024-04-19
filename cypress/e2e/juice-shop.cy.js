import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { RegisterPage } from "../pageObjects/RegisterPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Validate that "demo" account name appears in the menu section  
      HomePage.navbarAccountUserName.should(
        'contains.text',
        'demo'
      );
    });

    it("Registration", () => {
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.registerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      var email = RegisterPage.generateRandomEmail();
      RegisterPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      var password = 'demodemo';
      RegisterPage.passwordField.type(password);
      RegisterPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegisterPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.securityQuestionsSelection.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegisterPage.securityAnswerField.type("Meow");
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.navbarAccountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.navbarAccountUserName.should(
        'contains.text',
        email
      )
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon");
      HomePage.searchField.type("{Enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.searchResultCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCardContent.should(
        'contains.text',
        "Sour but full of vitamins."
      );
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchField.type("500ml");
      HomePage.searchField.type("{Enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.searchResultCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCardContent.should(
        'contains.text',
        "Sour but full of vitamins."
      );
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for 500ml
      HomePage.searchField.type("500ml");
      HomePage.searchField.type("{Enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.searchResultCard.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productCardContent.should(
        'contains.text',
        "Now with even more exotic flavour."
      );
      // Close the card
      HomePage.closeProductCard.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.searchResultCard.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCardContent.should(
        'contains.text',
        "Sour but full of vitamins."
      );
      // Close the card
      HomePage.closeProductCard.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.searchResultCard.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productCardContent.should(
        'contains.text',
        "Sweet & tasty!"
      );
    });

    // Create scenario - Read a review
    it.only("Read a review", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for King
      HomePage.searchField.type("King");
      HomePage.searchField.type("{Enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.searchResultCard.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.wait(500)
      HomePage.expandProductCardReviews.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productReviewText.should(
        'contain.text',
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      );
    });

    // Create scenario - Add a review
    // Click on search icon
    // Search for Raspberry
    // Select a product card - Raspberry Juice (1000ml)
    // Type in review - "Tastes like metal"
    // Click Submit
    // Click expand reviews button/icon (wait for reviews to appear)
    // Validate review -  "Tastes like metal"

    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    // Change items per page (at the bottom of page) to 24
    // Validate that the amount of cards is 24
    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35

    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"

    // Create scenario - Add address
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
