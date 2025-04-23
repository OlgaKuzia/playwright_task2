const { test, expect } = require("@playwright/test");
import { RegistrationPage } from "../pageobjects/RegistrationPage";
import helper from "../helper/helper.json";
test("Valid Registration", async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.goToRegistrationPage();
  await registrationPage.fillRegistrationForm();
  const type = await registrationPage.getPasswordFieldType();
  expect(type).toBe("password");
  const typeConfirmation =
    await registrationPage.getPasswordFieldConfirmationType();
  expect(typeConfirmation).toBe("password");
  const isNotEmptyPasswordField =
    await registrationPage.isPasswordFieldNotEmpty();
  expect(isNotEmptyPasswordField).toBe(true);
  const isNotEmptyConfirmationPasswordField =
    await registrationPage.isConfirmationPasswordFieldNotEmpty();
  expect(isNotEmptyConfirmationPasswordField).toBe(true);
  const isNotEmptyFirstNameField = await registrationPage.isFirstNameNotEmpty();
  expect(isNotEmptyFirstNameField).toBe(true);
  const isNotEmptyLastNameField = await registrationPage.isLastNameNotEmpty();
  expect(isNotEmptyLastNameField).toBe(true);
  const isNotEmptyEmailField = await registrationPage.isEmailNotEmpty();
  expect(isNotEmptyEmailField).toBe(true);
  const value = await registrationPage.isEmailValue();
  expect(value.endsWith(".com")).toBe(true);
  await registrationPage.clickSubmitBtn();
  await page.waitForURL(helper.LoginPage);
  const currentURL = await page.url();
  expect(currentURL).toContain(helper.LoginPage);
  const notificationMessage =
    await registrationPage.getNotificationMessageValue();
  expect(notificationMessage).toContain(helper.NotificationMessage);
  expect(notificationMessage).toContain(value);
});
