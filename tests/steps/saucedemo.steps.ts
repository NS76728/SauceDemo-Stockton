import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('I enter in user credentials', async ({ page }) => {
  
});

Then('I click the login button', async ({ page }) => {
  
});
