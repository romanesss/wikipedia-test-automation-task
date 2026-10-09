import { test as base } from '@playwright/test';
import { Application } from '../app/application';
import { faker } from '@faker-js/faker';
import { TestUser } from '../models/test-user';

type MyFixtures = {
    app: Application;
    faker: typeof faker;
    testUser: TestUser;
};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        await use(new Application(page));
    },
    faker: async ({}, use) => {
        await use(faker);
    },
    testUser: async ({}, use) => {
        const username = process.env.wiki_username;
        const password = process.env.wiki_password;

        if (!username || !password) {
            throw new Error('Missing wiki_username or wiki_password');
        }

        await use({ username, password });
    }
});

export { expect } from '@playwright/test';
