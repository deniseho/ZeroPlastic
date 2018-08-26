import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from "ionic-angular";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'species-modal',
    templateUrl: 'species-modal.html'

})
export class SpeciesModalComponent {
    specieVideo: string;
    specieTitle: string;
    specieDescription: string;
    specieImage: string;

    constructor(
        public navCtrl : NavController,
        public navParams : NavParams,
        public viewCtrl : ViewController,
        private dom : DomSanitizer,
        public modalCtrl : ModalController) {
            this.specieVideo = navParams.get("specieVideo");
            this.specieTitle = navParams.get("specieTitle");
            this.specieDescription = navParams.get("specieDescription");
            this.specieImage = navParams.get("specieImage");
    }

    sanitize(specieVideo){
        return this.dom.bypassSecurityTrustResourceUrl(specieVideo);
    }

    ionViewDidEnter() {}

    ionViewDidLoad() {}

    close() {
        this
            .viewCtrl
            .dismiss();
    }
}
