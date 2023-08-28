import { test } from "@playwright/test";
import { LunchLoginPage } from "../pages/lunch-login-page";
import { LunchListPage } from "../pages/lunch-list-page";
import { LoginData } from "../test-data/login-data";


let loginPage;
let mainPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LunchLoginPage(page);
  mainPage = new LunchListPage(page);
  const loginData = new LoginData("zivile.peredne@sft.com.com", "tester152");

  await loginPage.login(loginData);
});

test("Verify registered user can make an order", async ({page}) => {
    mainPage = new LunchListPage(page);
  
  });