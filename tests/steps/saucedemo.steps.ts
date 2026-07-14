import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd(test);

Given('I am on login page', async ({ LoginPage }) => {
    await LoginPage.navigate(); 
});

When('I enter in user credentials of {string} and {string}', async ({ LoginPage }, username, password) => {
  await LoginPage.fillLoginInfo(username, password)
});

Then('I click the login button', async ({ LoginPage }) => {
  await LoginPage.clickLoginButton();
});

Then('I should be successfully logged in', async ({ InventoryPage }) => {
   await InventoryPage.verifyOnInventoryPage();
});
