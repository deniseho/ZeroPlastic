import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {NavController, NavParams, MenuController, Events} from 'ionic-angular';
import {AccountMenuPage} from '../account-menu/account-menu';
import {TopicMenu} from '../topic-menu/topic-menu';
import {items} from '../game/items';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CustomNavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'custom-nav-bar', templateUrl: 'custom-nav-bar.html'})

export class CustomNavBarPage {
  username = '';
  email = '';
  totalScore: number = 0;

  constructor(private event: Events, 
    public navCtrl : NavController, 
    public menuCtrl : MenuController, 
    public navParams : NavParams,

    private auth: AuthServiceProvider) {
      
      let info = this.auth.getUserInfo();
      this.username = info['name'];
      this.email = info['email'];

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
  
  logout(){
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
