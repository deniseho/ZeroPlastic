import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AchievementPage } from '../achievement/achievement';

@Component({selector: 'page-account-menu', templateUrl: 'account-menu.html'})
export class AccountMenuPage {
  pages : Array < {
    title: string,
    component: any
  } >;

  userBadge : any;
  userScore : number;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.pages = [
      {
        title: 'Profile',
        component: ProfilePage
      }, {
        title: 'Achivement',
        component: AchievementPage
      }, {
        title: 'Community Feed',
        component: AchievementPage
      }
    ];

    this.userScore = navParams.get('score');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountMenuPage');
  }

  pageSelected(page) {
    this.navCtrl.push(page.component, {score: this.userScore});
  }

}
