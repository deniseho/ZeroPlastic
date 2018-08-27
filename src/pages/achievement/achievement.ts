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
  usersList : any[];

  constructor(public navCtrl : NavController, public navParams : NavParams, private auth : AuthServiceProvider, private toast : ToastServiceProvider) {
    this.currentUser = this.auth.currentUser;
    this.getPageData();
  }

  getPageData() {
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
          this.currentUser = _.first(_.filter(this.usersList, item=>{
            return item.email === this.auth.currentUser.email;
          }))
          let totalScore = this.currentUser.totalScore;
          this.badgeRecord = this.auth.getBadgeRecord(totalScore);
          this.currentUser.badges = this.badgeRecord;
          this.auth.updateUser(this.currentUser);
        });
      }

  ionViewDidLoad() {
 
  }

}
