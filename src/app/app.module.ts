import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RandomPage } from '../pages/random/random';
import { PersonalPage } from '../pages/personal/personal';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TakeawayServiceProvider } from '../providers/takeaway-service/takeaway-service';
import { HttpModule } from '@angular/http';
import { DetailsServiceProvider } from '../providers/details-service/details-service';
import { UtilsServiceProvider } from '../providers/utils-service/utils-service';

@NgModule({
  declarations: [
    MyApp,
    RandomPage,
    PersonalPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RandomPage,
    PersonalPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TakeawayServiceProvider,
    DetailsServiceProvider,
    UtilsServiceProvider
  ]
})
export class AppModule {}
