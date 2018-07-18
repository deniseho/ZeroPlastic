import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountMenuPage } from '../account-menu/account-menu';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomNavBarPage');
  }

  gotoAccountMenu(){
    this.navCtrl.push(AccountMenuPage);
  }

}
