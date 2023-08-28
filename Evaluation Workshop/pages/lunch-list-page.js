import { expect } from "@playwright/test";

export class LunchListPage {
  constructor(page) {
    this.page = page;
    this.linkEditLunch = page.locator("//span[normalize-space()='Lunch Editing']");
    this.registeredUserName = page.locator('.v-subheader.theme--dark');
  }

  async clickEditLunch() {
    await this.linkEditLunch.click();
  };
}