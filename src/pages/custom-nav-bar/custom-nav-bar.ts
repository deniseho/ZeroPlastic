import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NavController, NavParams, MenuController, Events} from 'ionic-angular';
import {AccountMenuPage} from '../account-menu/account-menu';
import {TopicMenu} from '../topic-menu/topic-menu';
import {items} from '../game/items';

/**
 * Generated class for the CustomNavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'custom-nav-bar', templateUrl: 'custom-nav-bar.html'})

export class CustomNavBarPage {

  totalScore: number = 0;

  constructor(private event: Events, 
    public navCtrl : NavController, 
    public menuCtrl : MenuController, 
    public navParams : NavParams) {
      this.event.subscribe('topicOneQuizScore', (score)=>{
        this.calculateScore(score);
      })
    }

  calculateScore(score: number){
    this.totalScore += score;
    console.log(this.totalScore);
  }

  ionViewDidLoad() {
  }

  gotoHomepage() {
    this
      .navCtrl
      .push(TopicMenu);
  }

  gotoAccountMenu() {
  }

  openMenu() {
    this
      .menuCtrl
      .open();
  }

}
