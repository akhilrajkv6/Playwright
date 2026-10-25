const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');
const AccountCreationPage = require('../pages/accountCreationPage');

let browser;
let page;
let homePage;
let loginPage;
let accountCreationPage;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  accountCreationPage = new AccountCreationPage(page);
});

After(async function () {
  // Intentionally keep the browser open until the user closes it manually.
});

Given('the user navigates to the Amazon homepage', async function () {
  await homePage.open();
});

Given('the user opens the Amazon login page', async function () {
  await loginPage.open();
});

Given('the user opens the Amazon registration page', async function () {
  await accountCreationPage.open();
});

When('the user enters sample registration data', async function () {
  await accountCreationPage.fillSampleData();
});

Then('the page title should contain {string}', async function (expectedTitle) {
  await expect(page).toHaveTitle(new RegExp(expectedTitle, 'i'));
});

Then('the Amazon login page should load', async function () {
  await expect(page).toHaveURL(/\/ap\/signin/i);
});

Then('the Amazon registration page should load', async function () {
  await expect(page).toHaveURL(/\/ap\/register/i);
});

Then('the form fields should accept the typed values', async function () {
  const fieldsVisible = await accountCreationPage.fieldsAcceptSampleData();
  expect(fieldsVisible).toBeTruthy();
});

Then('I pause for manual inspection', async function () {
  await page.waitForTimeout(15000);
});
