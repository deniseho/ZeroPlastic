import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from 'ionic-angular';

@Component({
    selector: 'map-modal',
    templateUrl: 'map-modal.html'})
export class MapInfoComponent {
  label: string;
  description: string;
  image: string;

  constructor(
      public navCtrl : NavController,
      public navParams : NavParams,
      public viewCtrl : ViewController,
      public modalCtrl : ModalController) {
        this.label = navParams.get("countryLabel");
        this.description = navParams.get("countryDescription");
        this.image = navParams.get("countryImage");

  }
  ionViewDidEnter() {}

  ionViewDidLoad() {  }

  close() {
    this
      .viewCtrl
      .dismiss();
  }

}
