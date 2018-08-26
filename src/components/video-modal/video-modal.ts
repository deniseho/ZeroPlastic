import {Component} from '@angular/core';
import {Loading, LoadingController, ViewController, NavController} from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({selector: 'video-modal', templateUrl: 'video-modal.html'})
export class VideoModalComponent {

  video : any = {
    url: 'https://www.youtube.com/embed/omXcEA8YDgM?autoplay=1'
  };

  trustedVideoUrl : SafeResourceUrl;
  loading : Loading;

  constructor(public navCtrl : NavController, public loadingCtrl : LoadingController, 
    private viewCtrl : ViewController, private domSanitizer : DomSanitizer) {
  }

  ionViewWillEnter() : void {
    this.trustedVideoUrl = this
      .domSanitizer
      .bypassSecurityTrustResourceUrl(this.video.url);

    // this.loading = this
    //   .loadingCtrl
    //   .create({content: 'Please wait...'});

    // this
    //   .loading
    //   .present();
  }

  handleIFrameLoadEvent() : void {
    // this
    //   .loading
    //   .dismiss();
  }

  close() {
    this
      .viewCtrl
      .dismiss();
  }

}
