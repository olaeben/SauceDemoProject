import { test, expect } from "@playwright/test";
import addProductPage from "../pages/product.page";

test.describe("Product Management", () => {
  test.use({ storageState: "Playwright/.auth/user.json" });

  test.beforeEach(async ({ page }) => {
    const inventoryPage = new addProductPage(page);
    await inventoryPage.navigateToInventory();
  });

  test("compare screenshot of Items Descending", async ({ page }) => {
    const SortDescending = new addProductPage(page);
    await SortDescending.sortDesc();
    await expect(page).toHaveScreenshot({
        maxDiffPixels: 800, 
        maxDiffPixelRatio: 0.01 
      });
  });

  test("compare screenshot of Items Ascending", async ({ page }) => {
    await expect(page).toHaveScreenshot({
        maxDiffPixels: 800,
        maxDiffPixelRatio: 0.01 
      });
  });

  
});
