import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-achievement',
  templateUrl: 'achievement.html',
})

export class AchievementPage {
  achievement : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth : AuthServiceProvider) {
    // this.userScore = navParams.get('score');
    
    let info = this
    .auth
    .getUserInfo();
    this.achievement = info['achievement'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievementPage');
  }

}
