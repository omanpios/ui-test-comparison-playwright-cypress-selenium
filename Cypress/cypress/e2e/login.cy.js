import { LoginPage } from "../pages/loginPage";

describe("Login scenarios", () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.goto();
  });

  it("Login with valid credentials", () => {
    loginPage.login("standard_user", "secret_sauce");
    cy.url().should("include", "/v1/inventory.html");
  });

  it("Login with invalid credentials", () => {
    loginPage.login("invalid_user", "invalid_password");
    loginPage.errorMessageIs(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Login with locked out user credentials", () => {
    loginPage.login("locked_out_user", "secret_sauce");
    loginPage.errorMessageIs(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
