import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TopicOnePage } from '../pages/topic-one/topic-one';
import { TopicTwoPage } from '../pages/topic-two/topic-two';
import { TopicThreePage } from '../pages/topic-three/topic-three';
import { TopicFourPage } from '../pages/topic-four/topic-four';
import { TopicFivePage } from '../pages/topic-five/topic-five';
import { FormsModule } from '@angular/forms';
import { CustomNavBarPage } from '../pages/custom-nav-bar/custom-nav-bar';
import { ProfilePage } from '../pages/profile/profile';
import { TopicMenu } from '../pages/topic-menu/topic-menu';
import { AccountMenuPage } from '../pages/account-menu/account-menu';
import { AchievementPage } from '../pages/achievement/achievement';
import { GamePage } from '../pages/game/game';

@NgModule({
  declarations: [
    MyApp,
    CustomNavBarPage,
    TopicMenu,
    ItemDetailsPage,
    ListPage,
    TopicOnePage,
    TopicTwoPage,
    TopicThreePage,
    TopicFourPage,
    TopicFivePage,
    AccountMenuPage,
    ProfilePage,
    AchievementPage,
    GamePage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomNavBarPage,
    ItemDetailsPage,
    ListPage,
    TopicMenu,
    TopicOnePage,
    TopicTwoPage,
    TopicThreePage,
    TopicFourPage,
    TopicFivePage,
    AccountMenuPage,
    ProfilePage,
    AchievementPage,
    GamePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
