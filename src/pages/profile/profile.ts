import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { User } from '../../providers/auth-service/User';

@Component({selector: 'page-profile', templateUrl: 'profile.html'})

export class ProfilePage {
  username:string;
  email:string;
  badge:string;
  currentUser:User;

  constructor(public navCtrl : NavController, private auth : AuthServiceProvider) {
    let currentUser = this
      .auth
      .getCurrentUser();

    this.username = currentUser['name'];
    this.email = currentUser['email'];
    this.badge = currentUser['badge'];
  }

  ionViewDidLoad() {}
}
