import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageobjects/loginPage";
import { IssuePage } from "../pageobjects/IssuePage";
test("Checking of correct work of filter 'Status'", async ({ page }) => {
  const login = new LoginPage(page);
  const issuePage = new IssuePage(page);
  await login.userLogin();
  await issuePage.goToIssuePage();
  expect(await issuePage.isCheckboxChecked()).toBe(true);
  expect(await issuePage.isFilterStatusOpen()).toBe(true);
  await issuePage.clickClearButton();
  await issuePage.clickOnDropDownMenuStatus();
  await issuePage.clickOnCloseOption();
  await issuePage.clickApplyButton();
  const allRowsClosed = await issuePage.areAllRowsClosed();
  expect(allRowsClosed).toBe(true);
  await issuePage.clickClearButton();
  const isTableNotFilteredByClosed =
    await issuePage.isTableNotFilteredByClosed();
  expect(isTableNotFilteredByClosed).toBe(true);
});
