export class LoginPage {
  goto() {
    cy.visit("https://www.saucedemo.com/v1/");
  }

  login(username, password) {
    cy.get("input[name='user-name']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("input[type='submit']").click();
  }

  errorMessageIs(expectedErrorMessage) {
    cy.get("[data-test='error']").should("have.text", expectedErrorMessage);
  }
}
