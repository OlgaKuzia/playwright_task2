const { faker } = require("@faker-js/faker");
import helper from "../helper/helper.json";
exports.RegistrationPage = class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.loginField = this.page.locator("#user_login");
    this.passwordField = this.page.locator("#user_password");
    this.firstNameField = this.page.locator("#user_firstname");
    this.lastNameField = this.page.locator("#user_lastname");
    this.emailField = this.page.locator("#user_mail");
    this.confirmationField = this.page.locator("#user_password_confirmation");
    this.submitButton = page.locator('input[value="Submit"]');
    this.notificationMessage = page.locator("#flash_notice");
  }
  async clickSubmitBtn() {
    await this.submitButton.click();
  }
  async goToRegistrationPage() {
    await this.page.goto(helper.MainPageURL);
  }
  async generateRandomFirstName() {
    return faker.person.firstName();
  }
  async generateRandomLastName() {
    return faker.person.lastName();
  }
  async generateRandomPassword() {
    return faker.internet.password();
  }
  async generateRandomEmail() {
    return faker.internet.email();
  }
  async generateRandomLogin() {
    return faker.internet.username();
  }
  async fillRegistrationForm() {
    const login = await this.generateRandomLogin();
    const password = await this.generateRandomPassword();
    const email = await this.generateRandomEmail();
    const firstName = await this.generateRandomFirstName();
    const lastName = await this.generateRandomLastName();
    await this.loginField.fill(login);
    await this.passwordField.fill(password);
    await this.emailField.fill(email);
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.confirmationField.fill(password);
  }
  async getPasswordFieldType() {
    return await this.passwordField.getAttribute("type");
  }
  async getPasswordFieldConfirmationType() {
    return await this.confirmationField.getAttribute("type");
  }
  async isPasswordFieldNotEmpty() {
    const value = await this.passwordField.inputValue();
    return value !== "";
  }
  async isConfirmationPasswordFieldNotEmpty() {
    const value = await this.confirmationField.inputValue();
    return value !== "";
  }
  async isFirstNameNotEmpty() {
    const value = await this.firstNameField.inputValue();
    return value !== "";
  }
  async isLastNameNotEmpty() {
    const value = await this.lastNameField.inputValue();
    return value !== "";
  }
  async isEmailNotEmpty() {
    const value = await this.emailField.inputValue();
    return value !== "";
  }
  async isEmailValue() {
    const value = await this.emailField.inputValue();
    return value;
  }
  async getNotificationMessageValue() {
    const value = await this.notificationMessage.textContent();
    return value;
  }
};
