import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    async fillInformation() {

        await this.page.fill(
            '#first-name',
            'Segundo'
        );

        await this.page.fill(
            '#last-name',
            'Munoz'
        );

        await this.page.fill(
            '#postal-code',
            '15001'
        );
    }

    async continue() {

        await this.page.click(
            '#continue'
        );
    }

    async finish() {

        await this.page.click(
            '#finish'
        );
    }

    async getConfirmationMessage() {

        return await this.page
            .locator('.complete-header')
            .textContent();
    }
}