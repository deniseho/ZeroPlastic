import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { AchievementPage } from '../achievement/achievement';

@Component({selector: 'page-account-menu', templateUrl: 'account-menu.html'})
export class AccountMenuPage {
  pages : Array < {
    title: string,
    icon: string
  } >;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.pages = [
      {
        title: 'Profile',
        icon: ''
      }, {
        title: 'Achivement',
        icon: ''
      }, {
        title: 'Community Feed',
        icon: ''   
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountMenuPage');
  }

  pageSelected(page) {
    if(page.title=='Profile'){
      this.navCtrl.push(ProfilePage)
    }else if(page.title=='Achivement'){
      this.navCtrl.push(AchievementPage)
    }
  }

}
