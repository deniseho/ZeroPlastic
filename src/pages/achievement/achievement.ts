import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {badges} from '../quiz/badges';
import {User} from '../../providers/auth-service/User';

@Component({selector: 'page-achievement', templateUrl: 'achievement.html'})

export class AchievementPage {
  currentUser : User;

  badge1 : boolean;
  badge2 : boolean;
  badge3 : boolean;
  badge4 : boolean;
  badge5 : boolean;

  badgeRecord : number[];

  badgeList : any[];

  constructor(public navCtrl : NavController, public navParams : NavParams, private auth : AuthServiceProvider) {
    this.currentUser = this
      .auth
      .getCurrentUser();

    this.badgeList = badges;
    this.badgeRecord = [0, 0, 0, 0, 0];
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
