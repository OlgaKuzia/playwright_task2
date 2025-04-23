import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageobjects/loginPage";
test("Valid Log in", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.enterLogin();
  await login.enterPassword();
  await expect(await login.isPasswordMasked()).toBe(true);
  const isUnchecked = await login.isCheckboxUnchecked();
  await expect(isUnchecked).toBe(true);
  const isLoginNotEmpty = await login.isLoginFieldNotEmpty();
  expect(isLoginNotEmpty).toBe(true);
  await login.clickOnLoginButton();
  await expect(await login.isHomePage()).toBe(true);
  await expect(await login.verifyUserLoggedIn()).toBe(true);
});
