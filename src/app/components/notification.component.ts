import { BaseComponent } from '../base/baseComponent';
import { expect } from '@playwright/test';

export class Notification extends BaseComponent {
    public notificationArea = this.page.locator('#mw-notification-area');
    public notificationTitle = this.page.locator('.mw-notification-title');

    async verifyNotification(notificationText: string): Promise<void> {
        await expect(this.notificationArea).toBeVisible();
        await expect(this.notificationTitle).toHaveText(notificationText);
    }
}
