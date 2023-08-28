import { test, expect } from '@playwright/test';
import { LunchListPage } from '../pages/lunch-list-page';
import { LunchLoginPage } from '../pages/lunch-login-page';

test('Adding to cart', async ({ page }) => {
    // await page.goto('https://lunch.devbstaging.com/login-password');
    // await expect(page.locator('.headline')).toHaveText('Sign in');
    // await page.locator('input[name="email"]').fill('juozapas.liubauskas@sft.com');
    // await page.locator('input[name="password"]').fill('tester154');
    // await page.getByRole('button', { name: 'Login' }).click();

    let lunchListPage = new LunchListPage(page);
    await lunchListPage.navigateToLoginPage();

    let lunchLoginPage = new LunchLoginPage(page);
    await lunchLoginPage.login('juozapas.liubauskas@sft.com', 'tester154');

    await productsListPage.checkIfInProductPage();
});