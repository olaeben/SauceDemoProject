import { test, expect } from "@playwright/test";
import addProductPage from "../pages/product.page";

test.describe("Product Management", () => {
  test.use({ storageState: "Playwright/.auth/user.json" });

  test.beforeEach(async ({ page }) => {
    const inventoryPage = new addProductPage(page);
    await inventoryPage.navigateToInventory();
  });

  test("Add and Remove Products", async ({ page }) => {
    const AddProduct = new addProductPage(page);
    await AddProduct.addRemoveProduct();
  });

  test("Sorting Descending", async ({ page }) => {
    const SortDescending = new addProductPage(page);
    await SortDescending.sortDesc();
  });

  test("Sorting Ascending", async ({ page }) => {
    const SortAscending = new addProductPage(page);
    await SortAscending.sortAsc();
  });

  test("Sorting from High to Low", async ({ page }) => {
    const SortHighToLow = new addProductPage(page);
    await SortHighToLow.sortHighLow();
  });

  test("Sorting from Low to High", async ({ page }) => {
    const sortLowToHigh = new addProductPage(page);
    await sortLowToHigh.sortLowHigh();
  });

  test("Checkout Flow", async ({ page }) => {
    const CheckoutFlow = new addProductPage(page);
    await CheckoutFlow.Checkout(
      process.env.FIRST_NAME!,
      process.env.LAST_NAME!,
      process.env.ZIP_CODE!
    );
  });
});
