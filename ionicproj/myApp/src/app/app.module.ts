import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {RedditsPage} from "../pages/reddits/reddits";
import {SettingsPage} from "../pages/settings/settings";
import {RedditService} from "./services/reddit.service";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RedditsPage,
        SettingsPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        RedditsPage,
        SettingsPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RedditService]
})
export class AppModule {
}
