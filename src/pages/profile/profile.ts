import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider, User} from '../../providers/auth-service/auth-service';

@Component({selector: 'page-profile', templateUrl: 'profile.html'})

export class ProfilePage {
  username:string;
  email:string;
  badge:string;
  currentUser:User;

  constructor(public navCtrl : NavController, private auth : AuthServiceProvider) {
    let currentUser = this
      .auth
      .getUserInfo();
      
    this.username = currentUser['name'];
    this.email = currentUser['email'];
    this.badge = currentUser['badge'];
  }

  ionViewDidLoad() {}
}
