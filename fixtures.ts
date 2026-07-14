import { test as base } from 'playwright-bdd';
import { LoginPage } from './tests/pages/LoginPage.ts';  
import { InventoryPage } from './tests/pages/InventoryPage';
import { CartPage } from './tests/pages/CartPage';

// Define types for all page objects
type MyFixtures = {
    LoginPage: LoginPage;
    InventoryPage: InventoryPage;
    CartPage: CartPage;
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
});
