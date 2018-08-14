import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { badges } from '../quiz/badges';
import { User } from '../../providers/auth-service/User';

@Component({
  selector: 'page-achievement',
  templateUrl: 'achievement.html',
})

export class AchievementPage {
  currentUser: User;

  badge1: boolean;
  badge2: boolean;
  badge3: boolean;
  badge4: boolean;
  badge5: boolean;

  badgeList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth : AuthServiceProvider) {
    this.currentUser = this
    .auth
    .getCurrentUser();
    
    this.badgeList = badges;

    this.badge1 = false;
    this.badge2 = false;
    this.badge3 = false;
    this.badge4 = false;
    this.badge5 = false;

  }

  ionViewDidLoad() {
    console.log(this.currentUser);
  }

}
