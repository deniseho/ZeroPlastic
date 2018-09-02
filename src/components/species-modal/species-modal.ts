import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ModalController} from "ionic-angular";
import { SpeciesvideoComponent } from '../speciesvideo/speciesvideo';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

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
        public modalCtrl : ModalController,
        private auth : AuthServiceProvider) {
            this.specieVideo = navParams.get("specieVideo");
            this.specieTitle = navParams.get("specieTitle");
            this.specieDescription = navParams.get("specieDescription");
            this.specieImage = navParams.get("specieImage");
    }


    ionViewDidEnter() {}

    ionViewDidLoad() {}

    playVideo(specieVideo){
        const modal = this
            .modalCtrl
            .create(SpeciesvideoComponent, {
              "specieVideo": specieVideo,
            });
        modal.present();
        
        // this.auth.updateUser()
    }

    close() {
        this
            .viewCtrl
            .dismiss();
    }
}
