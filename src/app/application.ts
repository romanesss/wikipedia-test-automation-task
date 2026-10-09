import { PageHolder } from './base/pageHolder';
import { Login } from './pages/login.page';
import { PreferencesPage } from './pages/preferences.page';
import { Header } from './components/header.component';
import { Notification } from './components/notification.component';
import { AcceptanceHelpers } from './helpers/acceptance.helpers';

export class Application extends PageHolder {
    public loginPage = new Login(this.page);
    public preferencesPage = new PreferencesPage(this.page);
    public header = new Header(this.page);
    public notification = new Notification(this.page);
    public acceptanceHelpers = new AcceptanceHelpers();
}
