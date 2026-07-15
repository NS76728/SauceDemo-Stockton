import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly finishButton: Locator;
    private readonly thanksMessage: Locator;
    private readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.thanksMessage = page.locator('#checkout_complete_container')
        this.backHomeButton = page.locator('#back-to-products')
    }

    /**
     * Fills out the checkout form fields and proceeds to the overview screen.
     * @param firstName - The first name of the user
     * @param lastName - The last name of the user
     * @param zipCode - The postal or zip code
     */
    async fillCheckoutInformation(firstName: string, lastName: string, zipCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(zipCode);
    }

    async clickContinueButton() {
     await this.continueButton.click();   
    }

    async clickFinishButton() {
     await this.finishButton.click();   
    }

    async clickBackHomeButton() {
     await this.backHomeButton.click();   
    }

    async getThanksText(): Promise<string> {
        await this.thanksMessage.waitFor({ state: 'visible' });
        console.log(await this.thanksMessage.innerText());
        return await this.thanksMessage.innerText();
    }
}
