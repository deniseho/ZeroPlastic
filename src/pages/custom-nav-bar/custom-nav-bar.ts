import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NavController, NavParams, MenuController, Events} from 'ionic-angular';
import {TopicMenu} from '../topic-menu/topic-menu';
import {items} from '../game/items';
import {AchievementPage} from '../achievement/achievement';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {UserServiceProvider} from '../../providers/user-service/user-service';
import {User} from '../../shared/user-model';
import * as _ from 'lodash';
import {AUTO_STYLE} from '@angular/core/src/animation/dsl';

@Component({selector: 'custom-nav-bar', templateUrl: 'custom-nav-bar.html'})

export class CustomNavBarPage {
  totalScore : any;
  userList : User[];

  constructor(private event : Events, public navCtrl : NavController, public menuCtrl : MenuController, public navParams : NavParams, private auth : AuthServiceProvider, private userApi : UserServiceProvider) {

    this
      .auth
      .getCurrentUser()
      .snapshotChanges()
      .subscribe(item => {
        this.totalScore = _
          .first(_.filter(item, elem => {
          return elem.key == "totalScore";
        }))
          .payload
          .toJSON();

      });
  }

  ionViewDidLoad() {}

  gotoHomepage() {
    this
      .navCtrl
      .push(TopicMenu);
  }

  gotoAchievement() {
    this
      .navCtrl
      .push(AchievementPage);
  }

  openMenu() {
    this
      .menuCtrl
      .open();
  }
}
