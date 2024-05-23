import { Page, expect } from "@playwright/test";

class addProductPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  verifySitePrice = () => this.page.locator('text=$29.99');
  addProductOne = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  addProductTwo = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  addProductThree = () =>
    this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  cartButton = () => this.page.locator('[data-test="shopping-cart-link"]');
  removeProductOne = () =>
    this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  removeProductTwo = () =>
    this.page.locator('[data-test="remove-sauce-labs-bike-light"]');
  removeProductThree = () =>
    this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  continueShopping = () => this.page.locator('[data-test="continue-shopping"]');
  validatePageTitle = () => this.page.locator('[data-test="title"]');
  sortDescending = () => this.page.locator('[data-test="product-sort-container"]');
  sortAscending = () => this.page.locator('[data-test="product-sort-container"]');
  sortHighToLow = () => this.page.locator('[data-test="product-sort-container"]');
  sortLowToHigh = () => this.page.locator('[data-test="product-sort-container"]');
  checkoutProduct = () => this.page.locator('[data-test="checkout"]');
  enterFirstName = () => this.page.locator('[data-test="firstName"]');
  enterLastName = () => this.page.locator('[data-test="lastName"]');
  enterZipCode = () => this.page.locator('[data-test="postalCode"]');
  continueButton = () => this.page.locator('[data-test="continue"]');
  totalBill = () => this.page.locator('[data-test="total-label"]');
  finishCheckout = () => this.page.locator('[data-test="finish"]');
  verifyCheckoutDone = () => this.page.locator('[data-test="complete-header"]');
  backToProducts = () => this.page.locator('[data-test="back-to-products"]');


  async gotoLoginPage() {
    await this.page.goto(process.env.TEST_URL!);
  }

  async navigateToInventory() {
    await this.page.goto(process.env.TEST_URL! + 'inventory.html', { waitUntil: 'load', timeout: 10000 });
    expect(this.page.url()).toBe(process.env.TEST_URL! + 'inventory.html');
  }

  // Actions

  public async addRemoveProduct() {
    await this.verifySitePrice().isVisible();
    await this.addProductOne().click();
    await this.addProductTwo().click();
    await this.addProductThree().click();
    await this.cartButton().click();
    await this.removeProductOne().click();
    await this.removeProductTwo().click();
    await this.removeProductThree().click();
    await this.continueShopping().click();
    await this.validatePageTitle().isVisible();
  }

  public async sortDesc() {
    await this.sortDescending().selectOption('za');
  }

  public async sortAsc() {
    await this.sortAscending().selectOption('az');
  }

  public async sortHighLow() {
    await this.sortAscending().selectOption('hilo');

  }

  public async sortLowHigh() {
    await this.sortAscending().selectOption('lohi');
  }

  public async Checkout(firstname, lastname, zipcode){
    await this.addProductOne().click();
    await this.addProductTwo().click();
    await this.addProductThree().click();
    await this.cartButton().click();
    await this.checkoutProduct().click();
    await this.enterFirstName().fill(firstname);
    await this.enterLastName().fill(lastname);
    await this.enterZipCode().fill(zipcode);
    await this.continueButton().click();
    await this.totalBill().isVisible();
    await this.finishCheckout().click();
    await this.verifyCheckoutDone().isVisible();
    await this.backToProducts().click();

  }
  
}

export default addProductPage;
