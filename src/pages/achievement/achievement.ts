import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {User} from '../../shared/user-model';
import {ToastServiceProvider} from '../../providers/toast-service/toast-service';
import * as _ from 'lodash';

@Component({selector: 'page-achievement', templateUrl: 'achievement.html'})

export class AchievementPage {
  currentUser : User;
  badgeRecord : number[];
  usersList;
  // usersList : User[];

  constructor(public navCtrl : NavController, public navParams : NavParams, private auth : AuthServiceProvider, private toast : ToastServiceProvider) {
    this.currentUser = this.auth.currentUser;
    this.getScoreRanking();
  }

  getScoreRanking() {
    this
      .auth
      .getDBUsers()
      .snapshotChanges()
      .subscribe(item => {
        this.usersList = [];
        item.forEach(element => {
          var y = element
            .payload
            .toJSON();
          y["$key"] = element.key;

          this
            .usersList
            .push(y as User);
          this.usersList = _.first(_.chunk(_.sortBy(this.usersList, "totalScore").reverse(), 10));
        });
        console.log(this.usersList)
      });
  }

  ionViewDidLoad() {
    let totalScore = this.currentUser.totalScore;

    if (totalScore < 25) {
      this.badgeRecord = [1, 0, 0, 0, 0];
    } else if (totalScore >= 25 && totalScore < 60) {
      this.badgeRecord = [1, 1, 0, 0, 0];
    } else if (totalScore >= 60 && totalScore < 100) {
      this.badgeRecord = [1, 1, 1, 0, 0];
    } else if (totalScore >= 100 && totalScore < 150) {
      this.badgeRecord = [1, 1, 1, 1, 0];
    } else if (totalScore >= 150) {
      this.badgeRecord = [1, 1, 1, 1, 1];
    }

    if (this.badgeRecord != this.currentUser.badges) {
      this.currentUser.badges = this.badgeRecord;
      // this.auth.updateUser(this.currentUser);
    }

  }

}
