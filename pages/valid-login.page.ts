import { Page, expect } from "@playwright/test";

export default class ValidLoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators

  verifySiteTitle = () => this.page.getByText("Swag Labs");
  usernameTextbox = () => this.page.locator('[data-test="username"]');
  passwordTextbox = () => this.page.locator('[data-test="password"]');
  loginButton = () => this.page.locator('[data-test="login-button"]');
  verifyDashboardTitle = () =>
    this.page.locator('[data-test="primary-header"] div');
  verifyPageUrl = () =>
    expect(this.page.url()).toBe(process.env.TEST_URL! + "inventory.html");

  async gotoLoginPage() {
    await this.page.goto(process.env.TEST_URL!);
  }

  // Actions

  public async LoggedInUser(username, password) {
    await this.verifySiteTitle().isVisible();
    await this.usernameTextbox().fill(username);
    await this.passwordTextbox().fill(password);
    await this.loginButton().click();
    await this.verifyDashboardTitle()
      .filter({ hasText: "Swag Labs" })
      .first();
    await this.verifyPageUrl();
  }
}
