import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ModalController, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the SpeciesvideoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({selector: 'speciesvideo', templateUrl: 'speciesvideo.html'})
export class SpeciesvideoComponent {

  specieVideo : string;

  constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, private dom : DomSanitizer, public modalCtrl : ModalController) {
    this.specieVideo = navParams.get("specieVideo");
  }

  sanitize(specieVideo) {
    return this
      .dom
      .bypassSecurityTrustResourceUrl(specieVideo);
  }

  close() {
    this
      .viewCtrl
      .dismiss();
  }
}
