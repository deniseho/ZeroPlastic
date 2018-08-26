import { Component } from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from "ionic-angular";

@Component({
  selector: 'tags-modal',
  templateUrl: 'tags-modal.html'})
export class TagsModalComponent {
  tagTitle: string;
  tagFoundIn: string;
  tagPlastic: string;
  tagRecyclabilityTitle: string;
  tagRecyclable: string;
  tagIcon: string;
  tagTypePlasticTitle: string;
  tagRecyclableDescription: string;


  constructor(
      public navCtrl : NavController,
      public navParams : NavParams,
      public viewCtrl : ViewController,
      public modalCtrl : ModalController) {
        this.tagTitle = navParams.get("tagTitle"); //REFERENCE to info
        this.tagFoundIn = navParams.get("tagFoundIn");
        this.tagPlastic = navParams.get("tagPlastic");
        this.tagRecyclabilityTitle = navParams.get("tagRecyclabilityTitle");
        this.tagRecyclable = navParams.get("tagRecyclable");
        this.tagIcon = navParams.get("tagIcon");
        this.tagTypePlasticTitle = navParams.get("tagTypePlasticTitle");
        this.tagRecyclableDescription = navParams.get("tagRecyclableDescription");
  }
  ionViewDidEnter() {}

  ionViewDidLoad() {}

  close() {
    this
        .viewCtrl
        .dismiss();
  }

}
