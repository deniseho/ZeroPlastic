import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NavController, NavParams, MenuController, Events} from 'ionic-angular';
import {TopicMenu} from '../topic-menu/topic-menu';
import {items} from '../game/items';
import {AchievementPage} from '../achievement/achievement';

@Component({selector: 'custom-nav-bar', templateUrl: 'custom-nav-bar.html'})

export class CustomNavBarPage {
  totalScore : number = 0;

  constructor(private event : Events, public navCtrl : NavController, public menuCtrl : MenuController, public navParams : NavParams) {

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
