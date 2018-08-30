import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastServiceProvider {

  constructor(private toastCtrl : ToastController) {
    console.log('Hello ToastServiceProvider Provider');
  }

  showToast(message : string, cssClass: string) {
    let toast = this
      .toastCtrl
      .create({
        message: message, 
        duration: 5000,
        position: 'top',
        cssClass: cssClass});

    toast.present(toast);
  }
}
