import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

import { config } from '../support/config';
import { CustomWorld } from '../support/world';

Given(
    'el usuario inicia sesion',
    async function (this: CustomWorld) {

        const loginPage = new LoginPage(this.page);

        await loginPage.navigate();

        await loginPage.login(
            config.standardUser,
            config.password
        );
    }
);

When(
    'agrega un producto al carrito',
    async function (this: CustomWorld) {

        const inventoryPage =
            new InventoryPage(this.page);

        await inventoryPage.addBackpackToCart();

        await inventoryPage.openCart();
    }
);

Then(
    'visualiza el producto en el carrito',
    async function (this: CustomWorld) {

        const cartPage =
            new CartPage(this.page);

        const product =
            await cartPage.getProductName();

        expect(product).to.equal(
            'Sauce Labs Backpack'
        );
    }
);