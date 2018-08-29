import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, ToastController } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TopicOnePage } from '../pages/topic-one/topic-one';
import { TopicTwoPage } from '../pages/topic-two/topic-two';
import { TopicThreePage } from '../pages/topic-three/topic-three';
import { TopicFourPage } from '../pages/topic-four/topic-four';
import { TopicFivePage } from '../pages/topic-five/topic-five';
import { FormsModule } from '@angular/forms';
import { CustomNavBarPage } from '../pages/custom-nav-bar/custom-nav-bar';
import { TopicMenu } from '../pages/topic-menu/topic-menu';
import { AchievementPage } from '../pages/achievement/achievement';
import { GamePage } from '../pages/game/game';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RegisterPage } from '../pages/register/register';
import { HttpClientModule } from '@angular/common/http';
import { NativeAudio } from '@ionic-native/native-audio';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { MnFullpageModule } from 'ngx-fullpage';
import * as $ from 'jquery';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AlternativesPage } from '../pages/alternatives/alternatives';
import { ContentDrawerComponent } from '../components/content-drawer/content-drawer';
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { BadgesPipe } from '../pipes/badges/badges';
import { PipesModule } from '../pipes/pipes.module';
import { TopicQuizComponent } from '../components/topic-quiz/topic-quiz';
import { QuizResultComponent } from '../components/quiz-result-modal/quiz-result-modal';
import { MapInfoComponent } from '../components/map-modal/map-modal';
import { TagsModalComponent } from "../components/tags-modal/tags-modal";
import { EventModalComponent } from '../components/event-modal/event-modal';
import {SpeciesModalComponent} from "../components/species-modal/species-modal";
import {OnboardingSliderPage} from "../pages/onboarding-slider/onboarding-slider";
import { VideoPlayer } from '@ionic-native/video-player';

@NgModule({
  declarations: [
    MyApp,
    CustomNavBarPage,
    TopicMenu,
    LoginPage,
    RegisterPage,
    TopicOnePage,
    TopicTwoPage,
    TopicThreePage,
    TopicFourPage,
    TopicFivePage,
    AchievementPage,
    GamePage,
    AlternativesPage,
    ParallaxHeaderDirective,
    BadgesPipe,
    TopicQuizComponent,
    QuizResultComponent,
    ContentDrawerComponent,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent,
    SpeciesModalComponent,
    OnboardingSliderPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CustomNavBarPage,
    TopicMenu,
    LoginPage,
    RegisterPage,
    TopicOnePage,
    TopicTwoPage,
    TopicThreePage,
    TopicFourPage,
    TopicFivePage,
    AchievementPage,
    GamePage,
    TopicQuizComponent,
    QuizResultComponent,
    AlternativesPage,
    MapInfoComponent,
    TagsModalComponent,
    EventModalComponent,
    SpeciesModalComponent,
    OnboardingSliderPage
],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    NativeAudio,
    UserServiceProvider,
    ToastController,
    ToastServiceProvider,
    VideoPlayer
  ]
})
export class AppModule {}