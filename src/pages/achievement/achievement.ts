import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-achievement',
  templateUrl: 'achievement.html',
})

export class AchievementPage {
  currentUser : any;
  totalScore: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth : AuthServiceProvider) {
    this.currentUser = this
    .auth
    .getCurrentUser();
  }

  ionViewDidLoad() {
    // this.totalScore = 
    console.log(this.currentUser)
    
    // this.currentUser.achievements.forEach(element => {
    //   console.log(element)
    // });
  }

}
