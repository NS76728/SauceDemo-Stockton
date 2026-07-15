import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    private readonly page: Page;
    private readonly checkoutButton: Locator;
    private readonly cartItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItems = page.locator('.cart_item');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
    
}
