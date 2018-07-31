import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'page-register', templateUrl: 'register.html'})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = {
    email: '',
    password: ''
  };

  constructor(public navCtrl : NavController, public navParams : NavParams, private auth : AuthServiceProvider, private alertCtrl : AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
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
  showPopup(title : string, text : string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons:[
        {
          text: 'OK',
          handler: data=>{
            if(this.createSuccess){
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
