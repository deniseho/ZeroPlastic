import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { User } from '../../shared/user-model';

@Component({selector: 'page-achievement', templateUrl: 'achievement.html'})

export class AchievementPage {
  currentUser : User;
  badgeRecord : number[];

  constructor(public navCtrl : NavController, public navParams : NavParams, private auth : AuthServiceProvider) {
    this.currentUser = this
      .auth
      .currentUser;
  }

  ionViewDidLoad() {
    let score = this.currentUser.totalScore;

    if (score < 25) {
      this.badgeRecord = [1, 0, 0, 0, 0];
    } else if (score > 25 && score < 60) {
      this.badgeRecord = [1, 1, 0, 0, 0];
    } else if (score > 61 && score < 100) {
      this.badgeRecord = [1, 1, 1, 0, 0];
    } else if (score > 100 && score < 150) {
      this.badgeRecord = [1, 1, 1, 1, 0];
    } else if (score > 150) {
      this.badgeRecord = [1, 1, 1, 1, 1];
    }
  }

}
