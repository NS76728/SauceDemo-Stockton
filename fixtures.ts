import { test as base } from 'playwright-bdd';
import { LoginPage } from './tests/pages/LoginPage.ts';  
import { InventoryPage } from './tests/pages/InventoryPage';
import { CartPage } from './tests/pages/CartPage';
import { CheckoutPage } from './tests/pages/CheckoutPage.ts';

// Define types for all page objects
type MyFixtures = {
    LoginPage: LoginPage;
    InventoryPage: InventoryPage;
    CartPage: CartPage;
    CheckoutPage: CheckoutPage;
};

// Export the extended test runner
export const test = base.extend<MyFixtures>({
    LoginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    InventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    CartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    CheckoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
});
