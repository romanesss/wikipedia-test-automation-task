import { BasePage } from '../base/basePage';
import { TestUser } from '../../models/test-user';
import { Notification } from '../components/notification.component';

export class Login extends BasePage {
    public url = 'https://auth.wikimedia.org/enwiki/wiki/Special:UserLogin';

    public username = this.page.locator('[name="wpName"]');
    public password = this.page.locator('[name="wpPassword"]');
    public logInBtn = this.page.locator('#wpLoginAttempt');

    public notification = new Notification(this.page);

    async login(credentials: TestUser): Promise<void> {
        await this.username.fill(credentials.username);
        await this.password.fill(credentials.password);
        await this.logInBtn.click();
        await this.notification.notificationArea.waitFor({ state: 'visible' });
        await this.page.reload();
    }
}
