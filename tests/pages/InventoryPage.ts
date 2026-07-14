import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
    private readonly page: Page;
    private readonly headerTitle: Locator;
    private readonly shoppingCartBadge: Locator;
    private readonly shoppingCartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerTitle = page.locator('.title');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
    }

    async verifyOnInventoryPage() {
        await expect(this.headerTitle).toHaveText('Products');
        await expect(this.page).toHaveURL(/.*inventory.html/);
    }

    async addItemToCart(itemName: string) {
        // Dynamic locator strategy: Targets the parent container of the named product 
        // to isolate and click its specific "Add to cart" button
        const itemContainer = this.page.locator('.inventory_item', { hasText: itemName });
        await itemContainer.locator('button:has-text("Add to cart")').click();
    }

    async verifyCartCount(expectedCount: string) {
        await expect(this.shoppingCartBadge).toHaveText(expectedCount);
    }

    async navigateToCart() {
        await this.shoppingCartLink.click();
    }
}
