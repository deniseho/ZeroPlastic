import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, DateTime} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {TopicMenu} from "../topic-menu/topic-menu";
import {LoginPage} from "../login/login";
import {ToastServiceProvider} from '../../providers/toast-service/toast-service';

@Component({selector: 'page-register', templateUrl: 'register.html'})
export class RegisterPage {
  createSuccess = false;
  ageGroup : string;
  registerCredentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public navCtrl : NavController, public navParams : NavParams, 
    private auth : AuthServiceProvider, private alertCtrl : AlertController) {
      this.ageGroup = "9-13";
    }

  ionViewDidLoad() {}

  register() {
    if (this.registerCredentials.name == '' || this.registerCredentials.name == null || this.registerCredentials.name == undefined) {
      this.showPopup("Error", "Please enter your name.");
    } else if (this.registerCredentials.email == '' || this.registerCredentials.email == null || this.registerCredentials.email == undefined) {
      this.showPopup("Error", "Please enter your email.");
    } else if (this.registerCredentials.password == '' || this.registerCredentials.password == null || this.registerCredentials.password == undefined) {
      this.showPopup("Error", "Please enter your password.");
    } else {
      // this.registerCredentials.email = 'hoc2@tcd.ie';
      this
        .auth
        .register(this.registerCredentials)
        .subscribe(success => {
          if (success) {
            this.createSuccess = true;
            this.showPopup("Success", "Account created.");
          } else {
            this.showPopup("Error", "Problem creating account.");
          }
        })
    }
  }
  showPopup(title : string, text : string) {
    let alert = this
      .alertCtrl
      .create({
        title: title,
        subTitle: text,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              if (this.createSuccess) {
                this
                  .navCtrl
                  .popToRoot();
              }
            }
          }
        ]
      });
    alert.present();
  }

  gotoHomepage() {
    this
      .navCtrl
      .push(TopicMenu);
  }

  backToLogin() {
    this
      .navCtrl
      .pop();
  }

}
