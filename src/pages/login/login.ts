import {Component} from '@angular/core';
import {NavController, NavParams, Loading, AlertController, LoadingController, ToastController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {RegisterPage} from '../register/register';
import {TopicMenu} from '../topic-menu/topic-menu';

@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage {
  loading : Loading;
  registerCredentials = {
    email: 'hoc2@tcd.ie',
    password: 'deniseho'
  };

  constructor(
    public navCtrl : NavController, 
    public navParams : NavParams, 
    private auth : AuthServiceProvider, 
    private alertCtrl : AlertController, 
    private loadingCtrl : LoadingController) {
      console.log(new Date().toISOString())
    }

  createAccount() {
    this
      .navCtrl
      .push(RegisterPage);
  }

  login() {
    this.showLoading();
  if(this.registerCredentials.email==''||this.registerCredentials.email==null||this.registerCredentials.email==undefined){
      this.showError("Please enter your email.");
    }else if(this.registerCredentials.password==''||this.registerCredentials.password==null||this.registerCredentials.password==undefined){
      this.showError("Please enter your password.");
    }else{
    this
      .auth
      .login(this.registerCredentials)
      .subscribe(allowed => {
        if (allowed) {
            this
            .navCtrl
            .setRoot(TopicMenu);
        } else {
          this.showError("Access Denied");
        }
      }, error => {
        this.showError(error);
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

}
