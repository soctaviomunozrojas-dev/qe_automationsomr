import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import { CheckoutPage } from '../pages/CheckoutPage';
import { CartPage } from '../pages/CartPage';
import { CustomWorld } from '../support/world';

When(
    'completa el checkout',
    async function (this: CustomWorld) {

        const cartPage = new CartPage(this.page);

        await cartPage.checkout();

        const checkoutPage =
            new CheckoutPage(this.page);

        await checkoutPage.fillInformation();

        await checkoutPage.continue();

        await checkoutPage.finish();
    }
);

Then(
    'visualiza mensaje de compra exitosa',
    async function (this: CustomWorld) {

        const checkoutPage =
            new CheckoutPage(this.page);

        const message =
            await checkoutPage.getConfirmationMessage();

        expect(message).to.equal(
            'Thank you for your order!'
        );
    }
);