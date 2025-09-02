import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type TestingFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<TestingFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
})

export { expect };