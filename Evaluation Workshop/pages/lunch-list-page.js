import { expect } from '@playwright/test';

export class LunchListPage{
    constructor(page) {
        this.page = page;
    }


async navigateToLoginPage() {
    const { page } = this;
    await page.goto('https://lunch.devbstaging.com/login-password');
    await expect(page.locator('.headline')).toHaveText('Sign in');
  }

  async checkIfInProductPage() {
    await expect(this.page.locator('.title')).toContainText('Products');
  }
}