import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { AccountMenuPage } from '../account-menu/account-menu';
import { TopicMenu } from '../topic-menu/topic-menu';

/**
 * Generated class for the CustomNavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'custom-nav-bar',
  templateUrl: 'custom-nav-bar.html',
  inputs: ['title', 'addBack', 'addHome', 'addPerson'],
  outputs: ['home']
})
export class CustomNavBarPage {

  constructor(public navCtrl: NavController, 
    public menuCtrl: MenuController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomNavBarPage');
  }

  gotoHomepage(){
    this.navCtrl.push(TopicMenu);
  }

  gotoAccountMenu(){
    this.navCtrl.push(AccountMenuPage);
  }

  openMenu(){
    this.menuCtrl.open();
  }
  
}
