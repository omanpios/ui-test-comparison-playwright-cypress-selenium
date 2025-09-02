import { expect, test } from "../fixtures/base";

test.describe("Login scenarios", () => {
  test("Login with invalid credentials", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login("admin", "password");
    await loginPage
      .errorMessageIs("Epic sadface: Username and password do not match any user in this service");
  });

  test("Login with valid credentials", async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("/v1/inventory.html");
  });

  test("Login with locked out user", async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login("locked_out_user", "secret_sauce");
    await loginPage.errorMessageIs("Epic sadface: Sorry, this user has been locked out.");
  });
});
