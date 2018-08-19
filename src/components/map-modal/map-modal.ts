import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from 'ionic-angular';

@Component({selector: 'map-modal', templateUrl: 'map-modal.html'})
export class MapInfoComponent {
  countryInfo : string;

  constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController) {
    this.countryInfo = navParams.get("country");

  }
  ionViewDidEnter() {}

  ionViewDidLoad() {}

  close() {
    this
      .viewCtrl
      .dismiss();
  }

}
