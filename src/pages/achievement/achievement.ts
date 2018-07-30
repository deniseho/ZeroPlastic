import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AchievementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-achievement',
  templateUrl: 'achievement.html',
})
export class AchievementPage {
  userScore : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userScore = navParams.get('score');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievementPage');
  }

}
