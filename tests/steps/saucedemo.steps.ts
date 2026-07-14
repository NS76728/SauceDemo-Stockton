import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd(test);

Given('The user is on the login page', async ({ LoginPage }) => {
    await LoginPage.navigate(); 
});

When('I enter in user credentials', async ({ page }) => {
  
});

Then('I click the login button', async ({ page }) => {
  
});
