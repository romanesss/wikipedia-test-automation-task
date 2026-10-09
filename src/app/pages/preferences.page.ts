import { BasePage } from '../../app/base/basePage';
import { LANGUAGE_CODES } from '../../data/language-codes';

export type LanguageCode = (typeof LANGUAGE_CODES)[number];

export class PreferencesPage extends BasePage {
    public url = 'wiki/Special:Preferences';

    public internationalisationDropdown = this.page.locator('.cdx-lookup [role="combobox"]');
    public internationalisationDropdownOption = this.page.locator('.cdx-menu-item');
    public saveBtn = this.page.locator('#prefcontrol button');

    async selectInterfaceLanguage(languageCode: string): Promise<void> {
        await this.internationalisationDropdown.click();
        await this.internationalisationDropdownOption.filter({ hasText: new RegExp(`^${languageCode} ·`) }).click();
        await this.saveBtn.click();
    }

    public async getInterfaceLanguage(): Promise<string> {
        const language = await this.html.getAttribute('lang');

        if (!language) {
            throw new Error('Page has no lang attribute');
        }

        return language;
    }
}
