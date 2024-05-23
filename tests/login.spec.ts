import { test, expect } from "@playwright/test";
import ValidLoginPage from "../pages/valid-login.page";
import InvalidLoginPage from "../pages/invalid-login.page";

test.describe("Login Tests", () => {
  test("positive login test", async ({ page }) => {
    const ValidLogin = new ValidLoginPage(page);
    await ValidLogin.gotoLoginPage();
    await ValidLogin.LoggedInUser(process.env.USERNAME!, process.env.PASSWORD!);
  });

  test("negative login test", async ({ page }) => {
    const InvalidLogin = new InvalidLoginPage(page);
    await InvalidLogin.gotoLoginPage();
    await InvalidLogin.InvalidloginCreds(
      process.env.USERNAME!,
      process.env.PASSWORD!.slice(0, -2)
    );
  });
});
