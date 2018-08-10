import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, Nav, NavController } from 'ionic-angular';

import { TopicMenu } from '../pages/topic-menu/topic-menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TopicOnePage } from '../pages/topic-one/topic-one';
import { TopicTwoPage } from '../pages/topic-two/topic-two';
import { TopicThreePage } from '../pages/topic-three/topic-three';
import { TopicFourPage } from '../pages/topic-four/topic-four';
import { TopicFivePage } from '../pages/topic-five/topic-five';
import { ProfilePage } from '../pages/profile/profile';
import { GamePage } from '../pages/game/game';
import { QuizPage } from '../pages/quiz/quiz';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AlternativesPage } from '../pages/alternatives/alternatives';

import 'jquery'; // Import jQuery
import 'fullpage.js'; // Import fullpage.js

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  // rootPage = LoginPage;
  rootPage = AlternativesPage;
  
  pages: Array<{title: string, component: any}>;
  
  public ngOnInit() {
    console.log('Initial App State');
  }

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private auth: AuthServiceProvider,
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Plastic Pollution', component: TopicOnePage },
      { title: 'About Pollution', component: TopicTwoPage },
      { title: 'Species Affected', component: TopicThreePage },
      { title: 'Take Action', component: TopicFourPage },
      { title: 'Activities', component: TopicFivePage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }); 
  }

  gotoPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  gotoHomepage(){
    this.menu.close();
    this.nav.setRoot(TopicMenu);
  }

  logout(){
    this.auth.logout().subscribe(succ => {
      this.menu.close(); 
      this.nav.setRoot(LoginPage);
    });
  }
}
