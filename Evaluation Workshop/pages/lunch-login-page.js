export class LunchLoginPage {
constructor(page) {
    this.page = page;
}

async login(username, password) {
    const { page } = this;
    // await page.locator('#user-name').fill(username);
    // await page.locator('#password').fill(password);
    // await page.locator('#login-button').click();
    await page.locator('input[name="email"]').fill(username);
    await page.locator('input[name="password"]').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
}
}