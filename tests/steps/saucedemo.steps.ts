import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/CartPage';

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

Then('I should be successfully logged into {string} page', async ({ InventoryPage },pageName) => {
    expect(await InventoryPage.getPageUrl()).toContain(pageName);
});

Then('I should see error containing {string}', async ({ LoginPage }, error) => {
   const errorText =  await LoginPage.getErrorText();
   expect(errorText).toContain(error);
});

Then('I click add to cart on inventory page for {string} item', async ({ InventoryPage },itemName) => {
  await InventoryPage.addItemToCart(itemName);
});

Then('I verify cart count is {string}', async ({InventoryPage}, cartCount) =>{
  const count =  await InventoryPage.getCartCount();
  expect(count).toEqual(cartCount);
});

Then('I click on cart link', async ({ InventoryPage }) => {
  await InventoryPage.navigateToCart()
});

Then('I click on checkout button', async ({CartPage}) => {
  await CartPage.clickCheckout()
});

Then('I fill out check out information using; {string} {string} {string}', async ({CheckoutPage},firstName, lastName, zip) => {
  await CheckoutPage.fillCheckoutInformation(firstName, lastName, zip);
} );

Then('I click the continue button', async ({CheckoutPage}) => {
  await CheckoutPage.clickContinueButton();
});

Then('I click on the finish button', async ({CheckoutPage}) => {
  await CheckoutPage.clickFinishButton();
});

Then('I verify thank you meesage is present', async ({CheckoutPage}) => {
   const thankText = await CheckoutPage.getThanksText();
   expect(thankText).toContain("Thank you for your order!");
});

Then('I click the back home button', async ({CheckoutPage}) => {
  await CheckoutPage.clickBackHomeButton();
});

