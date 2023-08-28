export class LunchEdit {
  constructor(page) {
    this.page = page;
    this.iconForMeniu = page.locator("i:nth-child(2)");
    this.iconForAddingProvider = page.getByRole("button").filter({ hasText: "add" });
    this.inputProvider = page.locator("input[name='Provider Name']");
    this.inputProviderColor = page.locator("input[name = 'Provider Color']");
    this.inputPriceForSoup = page.locator("input[name='Sriubos (Soups) category'][aria-label='Price']");
    this.inputSelectionName = page.locator("input[name='Sriubos (Soups) category'][aria-label='Selection Name']");
    this.containerForMainDishes = page.locator("(//div[@class='v-list__tile__title'])[2]");
    this.inputPriceForMainDish = page.locator(
      "input[name='Pagrindiniai Patiekalai (Main Dishes) category'][aria-label='Price']"
    );
    this.inputSelectionNameMainDish = page.locator(
      "input[name='Pagrindiniai Patiekalai (Main Dishes) category'][aria-label='Selection Name']"
    );
    this.buttonSave = page.locator("(//div[@class='v-btn__content'])[2]");
    this.successMessage = page.locator("div .v-snack__content");
    this.errorMessage = page.locator(".v-alert.error");
  }

  async clickMeniuIcon() {
    await this.iconForMeniu.dblclick();
  }

  async clickAddProvider() {
    await this.iconForAddingProvider.click();
  }

  async enterProviderName(providerName) {
    await this.inputProvider.fill(providerName);
  }

  async enterProviderColor(color) {
    await this.inputProviderColor.fill(color);
  }

  async enterPriceForSoup(price) {
    await this.inputPriceForSoup.fill(price);
  }

  async enterSelectionNameForSoup(soupName) {
    await this.inputSelectionName.fill(soupName);
  }

  async expandMainDishes() {
    await this.containerForMainDishes.click();
  }

  async enterPriceForMainDish(price) {
    await this.inputPriceForMainDish.fill(price);
  }

  async enterSelectionNameForMainDish(dishName) {
    await this.inputSelectionNameMainDish.fill(dishName);
  }

  async clickButtonSave() {
    await this.buttonSave.click();
  }

}
