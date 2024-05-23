import { test as setup, expect } from '@playwright/test';

const authFile = 'Playwright/.auth/user.json'; 

setup('authenticate', async ({page}) => {
    const baseUrl = process.env.TEST_URL!;
    await page.goto(baseUrl);
    await page.locator('[data-test="username"]').fill(process.env.USERNAME!);
    await page.locator('[data-test="password"]').fill(process.env.PASSWORD!);
    await page.locator('[data-test="login-button"]').click();
  
    // Verify that the login was successful
    await page.waitForURL(process.env.TEST_URL! + 'inventory.html');
    
    // save the storage state of the logged in page
    await page.context().storageState({path: authFile});

    await page.close();

});


export default setup;
