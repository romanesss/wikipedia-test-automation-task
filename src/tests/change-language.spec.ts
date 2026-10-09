import { test, expect } from '../fixtures/baseFixture';

test.describe('Change language', () => {
    test.beforeEach(async ({ app: { loginPage }, testUser }) => {
        await loginPage.open();
        await loginPage.login(testUser);
    });

    test('Verify that user can change the language', async ({ app: { header, preferencesPage, acceptanceHelpers }, page, baseURL }) => {
        await header.selectUserDropdownOption('preferences');
        await page.waitForURL(`${baseURL}/${preferencesPage.url}`);

        const currentLanguageCode = await preferencesPage.getInterfaceLanguage();
        const newLanguageCode = acceptanceHelpers.getRandomDifferentLanguage(currentLanguageCode);

        const preferencesResponse = page.waitForResponse(response => response.url().includes('/Special:Preferences') && response.request().method() === 'GET');
        await preferencesPage.selectInterfaceLanguage(newLanguageCode);
        await preferencesResponse;

        await page.waitForLoadState();
        await expect(preferencesPage.html).toHaveAttribute('lang', newLanguageCode);
    });
});
