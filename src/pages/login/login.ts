import {Component} from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {RegisterPage} from '../register/register';
import {TopicMenu} from '../topic-menu/topic-menu';
import {User} from '../../shared/user-model';
import {ToastServiceProvider} from '../../providers/toast-service/toast-service';

@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage {
  loading : Loading;
  loginCredentials = {
    email: 'guest@gmail.com',
    password: 'guest'
  };

  constructor(public navCtrl : NavController, public navParams : NavParams, private auth : AuthServiceProvider, private alertCtrl : AlertController, 
    private loadingCtrl : LoadingController, private toast : ToastServiceProvider) {
    }

  
  createAccount() {
    this
      .navCtrl
      .push(RegisterPage);
  }

  login() {
    this.showLoading();
    if (this.loginCredentials.email == '' || this.loginCredentials.email == null || this.loginCredentials.email == undefined) {
      this.showError("Please enter your email.");
    } else if (this.loginCredentials.password == '' || this.loginCredentials.password == null || this.loginCredentials.password == undefined) {
      this.showError("Please enter your password.");
    }else {
      this
        .auth
        .login(this.loginCredentials)
        .subscribe(allowed => {
          if (allowed) {
            this
              .navCtrl
              .setRoot(TopicMenu);

          } else {
            this.showError("Access Denied");
          }
        }, error => {
          this.showError("ERRRROR: " + this.loginCredentials.email);
        });
    }
  }

  showLoading() {
    this.loading = this
      .loadingCtrl
      .create({content: 'Please wait...', dismissOnPageChange: true});
    this
      .loading
      .present();
  }

  showError(text : any) {
    this
      .loading
      .dismiss();
    let alert = this
      .alertCtrl
      .create({title: 'Fail', subTitle: text, buttons: ['OK']});
    alert.present();
  }

  gotoHomepage() {
    this
      .navCtrl
      .push(TopicMenu);
  }

}
