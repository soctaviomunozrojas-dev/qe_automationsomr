import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/LoginPage';
import { config } from '../support/config';
import { CustomWorld } from '../support/world';

Given(
    'el usuario navega a SauceDemo',
    async function (this: CustomWorld) {

        const loginPage = new LoginPage(this.page);

        await loginPage.navigate();

    }
);

When(
    'inicia sesion con credenciales validas',
    async function (this: CustomWorld) {

        const loginPage = new LoginPage(this.page);

        await loginPage.login(
            config.standardUser,
            config.password
        );

    }
);

Then(
    'visualiza la pagina de productos',
    async function (this: CustomWorld) {

        const currentUrl = this.page.url();

        expect(currentUrl).to.contain(
            'inventory'
        );

    }
);

When(
    'inicia sesion con usuario bloqueado',
    async function (this: CustomWorld) {

        const loginPage = new LoginPage(this.page);

        await loginPage.login(
            config.lockedUser,
            config.password
        );

    }
);

Then(
    'visualiza mensaje de usuario bloqueado',
    async function (this: CustomWorld) {

        const loginPage = new LoginPage(this.page);

        const message =
            await loginPage.getErrorMessage();

        expect(message).to.contain(
            'locked out'
        );

    }
);