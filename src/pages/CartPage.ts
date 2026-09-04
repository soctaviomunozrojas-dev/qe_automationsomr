import { Page } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async getProductName() {
        return await this.page
            .locator('.inventory_item_name')
            .textContent();
    }

    async checkout() {
        await this.page.click('[data-test="checkout"]');
    }
}