import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
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
import { QuizPage } from '../pages/quiz/quiz';
import { QuizResultPage } from '../pages/quiz/result';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RegisterPage } from '../pages/register/register';
import { HttpClientModule } from '@angular/common/http';
import { NativeAudio } from '@ionic-native/native-audio';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';

@NgModule({
  declarations: [
    MyApp,
    CustomNavBarPage,
    TopicMenu,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RegisterPage,
    TopicOnePage,
    TopicTwoPage,
    TopicThreePage,
    TopicFourPage,
    TopicFivePage,
    AccountMenuPage,
    ProfilePage,
    AchievementPage,
    GamePage,
    QuizPage,
    QuizResultPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomNavBarPage,
    TopicMenu,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RegisterPage,
    TopicOnePage,
    TopicTwoPage,
    TopicThreePage,
    TopicFourPage,
    TopicFivePage,
    AccountMenuPage,
    ProfilePage,
    AchievementPage,
    GamePage,
    QuizPage,
    QuizResultPage
],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    NativeAudio,
  ]
})
export class AppModule {}
