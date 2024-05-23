import { Page, expect } from "@playwright/test";

export default class InvalidLoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators

  verifySiteTitle = () => this.page.getByText("Swag Labs");
  usernameTextbox = () => this.page.locator('[data-test="username"]');
  passwordTextbox = () => this.page.locator('[data-test="password"]');
  loginButton = () => this.page.locator('[data-test="login-button"]');
  verifyErrorMessage = () => this.page.locator('[data-test="error"]');

  async gotoLoginPage() {
    await this.page.goto("/");
  }

  // Actions

  public async InvalidloginCreds(username, password) {
    await this.verifySiteTitle().isVisible();
    await this.usernameTextbox().fill(username);
    await this.passwordTextbox().fill(password);
    await this.loginButton().click();
    await this.verifyErrorMessage().isVisible();
  }
}
