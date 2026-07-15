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

    async getHeaderText(): Promise<string> {
        await this.headerTitle.waitFor({ state: 'visible' });
        return await this.headerTitle.innerText();
    }

    async getPageUrl(): Promise<string> {
        return this.page.url();
    }

    async addItemToCart(itemName: string) {
        const itemContainer = this.page.locator('.inventory_item', { hasText: itemName });
        await itemContainer.locator('button:has-text("Add to cart")').click();
    }

    async getCartCount(): Promise<string> {
        await this.shoppingCartBadge.waitFor({ state: 'visible' });
        return await this.shoppingCartBadge.innerText();
    }

    async navigateToCart() {
        await this.shoppingCartLink.click();
    }
}
