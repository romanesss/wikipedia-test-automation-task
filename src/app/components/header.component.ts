import { BaseComponent } from '../base/baseComponent';

export class Header extends BaseComponent {
    public userDropdown = this.page.locator('#vector-user-links-dropdown-checkbox');

    public readonly userDropdownOptions = {
        userPage: this.page.locator('#pt-user-page a'),
        talk: this.page.locator('#pt-mytalk a'),
        sandbox: this.page.locator('#pt-sandbox a'),
        saved: this.page.locator('#pt-readinglists a'),
        preferences: this.page.locator('#pt-preferences a'),
        beta: this.page.locator('#pt-betafeatures a'),
        watchlist: this.page.locator('#pt-watchlist a'),
        contributions: this.page.locator('#pt-mycontris a'),
        logout: this.page.locator('#pt-logout a')
    };

    public async selectUserDropdownOption(option: keyof Header['userDropdownOptions']): Promise<void> {
        await this.userDropdown.check();
        await this.userDropdownOptions[option].click();
    }
}
