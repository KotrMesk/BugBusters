import { test, expect } from "@playwright/test";
import { LunchListPage } from "../pages/lunch-list-page";
import { LunchLoginPage } from "../pages/lunch-login-page";
import { LoginData } from "../test-data/login-data";
import { LunchEdit } from "../pages/lunch-editing-page";

let loginPage;
let mainPage;
let lunchEditPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LunchLoginPage(page);
  mainPage = new LunchListPage(page);
  const loginData = new LoginData("admin1@sft.com", "admin666");
  await loginPage.login(loginData);
});



test("Verify admin can add a new provider with valid data", async ({page}) => {
  mainPage = new LunchListPage(page);
  lunchEditPage = new LunchEdit(page);
  const providerName = "New Provider";
  const color = "Red";
  const soupName = "sriuba";
  const mainDish = "kepsnys"

  await mainPage.clickEditLunch();
  await lunchEditPage.clickMeniuIcon();
  await lunchEditPage.clickAddProvider();
  await lunchEditPage.enterProviderName(providerName);
  await lunchEditPage.enterProviderColor(color);
  await lunchEditPage.enterPriceForSoup("25");
  await lunchEditPage.enterSelectionNameForSoup(soupName);
  await lunchEditPage.expandMainDishes();
  await lunchEditPage.enterPriceForMainDish("3");
  await lunchEditPage.enterSelectionNameForMainDish(mainDish);
  await lunchEditPage.clickButtonSave();

  await expect(await lunchEditPage.successMessage.textContent()).toContain("Provider Succesfully saved");
});

test("Verify admin can not add a new provider by not filling all mandatory data", async ({page}) => {
  mainPage = new LunchListPage(page);
  lunchEditPage = new LunchEdit(page);
  const providerName = "New Provider2";
  const color = "Green";
  const soupName = "sriuba";

  await mainPage.clickEditLunch();
  await lunchEditPage.clickMeniuIcon();
  await lunchEditPage.clickAddProvider();
  await lunchEditPage.enterProviderName(providerName);
  await lunchEditPage.enterProviderColor(color);
  await lunchEditPage.enterPriceForSoup("25");
  await lunchEditPage.enterSelectionNameForSoup(soupName);
  await lunchEditPage.clickButtonSave();
  
  await expect(await lunchEditPage.errorMessage.textContent()).toContain("Form contains incorrect field(s)");
});

