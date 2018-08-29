import {Component, ViewChild, OnInit} from '@angular/core';

import {
  Platform,
  MenuController,
  Nav,
  NavController,
  App,
  AlertController
} from 'ionic-angular';

import {TopicMenu} from '../pages/topic-menu/topic-menu';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TopicOnePage} from '../pages/topic-one/topic-one';
import {TopicTwoPage} from '../pages/topic-two/topic-two';
import {TopicThreePage} from '../pages/topic-three/topic-three';
import {TopicFourPage} from '../pages/topic-four/topic-four';
import {TopicFivePage} from '../pages/topic-five/topic-five';
import {GamePage} from '../pages/game/game';
import {LoginPage} from '../pages/login/login';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {AlternativesPage} from '../pages/alternatives/alternatives';
import * as _ from 'lodash';
import 'jquery';
import {OnboardingSliderPage} from "../pages/onboarding-slider/onboarding-slider"; // Import jQuery
import {AchievementPage} from '../pages/achievement/achievement';

@Component({templateUrl: 'app.html'})
export class MyApp {
  @ViewChild(Nav)nav : Nav;
  // rootPage = LoginPage;
  rootPage = OnboardingSliderPage;
  users : any;

  pages : Array < {
    title: string,
    component: any,
    avatar: string
  } >;

  constructor(public platform : Platform, public menu : MenuController, public statusBar : StatusBar, public splashScreen : SplashScreen, private auth : AuthServiceProvider,) {
    this.initializeApp();
    console.log("this.auth.getAllUsers()");
    console.log(this.auth.getAllUsers());

    // set our app's pages
    this.pages = [
      {
        title: 'About Plastic',
        component: TopicOnePage,
        avatar: 'assets/imgs/icn_plastic_pollution.png'
      }, {
        title: 'Top 10 countries',
        component: TopicTwoPage,
        avatar: 'assets/imgs/icn_plastics.png'
      }, {
        title: 'Species Affected',
        component: TopicThreePage,
        avatar: 'assets/imgs/icn_octopus.png'
      }, {
        title: 'Take Action',
        component: TopicFourPage,
        avatar: 'assets/imgs/icn_take_action.png'
      }, {
        title: 'Activities',
        component: TopicFivePage,
        avatar: 'assets/imgs/icn_activities.png'
      }
    ];

    platform
      .ready()
      .then(() => {
        statusBar.styleDefault();
        splashScreen.hide();

        // platform.registerBackButtonAction(() => {   let nav = app.getActiveNavs()[0];
        //   let activeView = nav.getActive();   if (activeView.name === "FirstPage") {
        //    if (nav.canGoBack()) { //Can we go back?       nav.pop();     } else {
        //   const alert = this         .alertCtrl         .create({           title:
        // 'App termination',           message: 'Do you want to close the app?',
        //    buttons: [             {               text: 'Cancel',               role:
        // 'cancel',               handler: () => {
        // console.log('Application exit prevented!');               }             }, {
        //              text: 'Close App',               handler: () => {
        //  this                   .platform                   .exitApp(); // Close this
        // application               }             }           ]         });
        // alert.present();     }   } });
      });
  }

  initializeApp() {
    this
      .platform
      .ready()
      .then(() => {
        this
          .statusBar
          .styleDefault();
        this
          .splashScreen
          .hide();
      });
  }

  gotoPage(page) {
    this
      .menu
      .close();
    this
      .nav
      .setRoot(page.component);
  }

  gotoHomepage() {
    this
      .menu
      .close();
    this
      .nav
      .setRoot(TopicMenu);
  }

  logout() {
    this
      .auth
      .logout()
      .subscribe(succ => {
        this
          .menu
          .close();
        this
          .nav
          .setRoot(LoginPage);
      });
  }

  gotoAchievement() {
    this
      .menu
      .close();
    this
      .nav
      .setRoot(AchievementPage);
  }
}
