export class LunchLoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(loginData) {
    await this.page.goto(" https://lunch.devbstaging.com/login-password");
    await this.page.locator('input[name="email"]').fill(loginData.userName);
    await this.page.locator('input[name="password"]').fill(loginData.password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
