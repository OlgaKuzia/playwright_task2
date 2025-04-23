import { hasSubscribers } from "diagnostics_channel";
import helper from "../helper/helper.json";
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.checkbox = page.locator("#autologin");
    this.loginButton = page.locator("#login-submit");
    this.loggedInUser = page.locator("#loggedas a.user");
  }
  async goToLoginPage() {
    await this.page.goto(helper.LoginPage);
  }
  async goToHomePage() {
    await this.page.goto(helper.HomePage);
  }
  async isHomePage() {
    await this.page.waitForURL(helper.MyPage);
    const currentUrl = await this.page.url();
    return currentUrl === helper.MyPage;
  }
  async userLogin() {
    await this.page.goto(helper.LoginPage);
    await this.loginField.fill(helper.LoginName);
    await this.passwordField.fill(helper.LoginPassword);
    await this.loginButton.click();
  }
  async enterLogin() {
    await this.loginField.fill(helper.LoginName);
  }
  async enterPassword() {
    await this.passwordField.fill(helper.LoginPassword);
  }
  async isPasswordMasked() {
    const passwordFieldType = await this.passwordField.getAttribute("type");
    return passwordFieldType === "password";
  }
  async isCheckboxUnchecked() {
    const isChecked = await this.checkbox.isChecked();
    return !isChecked;
  }
  async clickOnLoginButton() {
    await this.loginButton.click();
  }
  async verifyUserLoggedIn() {
    await this.loggedInUser.waitFor();
    const loggedInText = await this.loggedInUser.innerText();
    return loggedInText === helper.LoginName;
  }
  async isLoginFieldNotEmpty() {
    const value = await this.loginField.inputValue();
    return value !== "";
  }
};
