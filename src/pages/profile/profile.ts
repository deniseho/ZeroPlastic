import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';

@Component({selector: 'page-profile', templateUrl: 'profile.html'})

export class ProfilePage {
  username = '';
  email = '';

  constructor(public navCtrl : NavController, private auth : AuthServiceProvider) {
    let info = this
      .auth
      .getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  ionViewDidLoad() {}
}
