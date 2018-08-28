import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Loading, LoadingController, ViewController, NavController} from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {VideoPlayer, VideoOptions} from '@ionic-native/video-player';

@Component({selector: 'video-modal', templateUrl: 'video-modal.html'})
export class VideoModalComponent {
  videoOptions : VideoOptions;
  videoUrl : string;

  trustedVideoUrl : SafeResourceUrl;
  loading : Loading;

  constructor(public navCtrl : NavController, public loadingCtrl : LoadingController, private viewCtrl : ViewController, private videoPlayer : VideoPlayer) {
    // this.playVideo();
  }

  ionViewDidEnter() {}

  // stopVideo() {
  //   this
  //     .videoPlayer
  //     .close();
  // }

  // async playVideo() {
  //   try {
  //     this.videoOptions = {
  //       volume: 0.7,
  //       scalingMode: 1
  //     }

  //     this.videoUrl = "assets/videos/video01.mp4";
  //     await this
  //       .videoPlayer
  //       .play(this.videoUrl);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  close() {
    this
      .viewCtrl
      .dismiss();
  }

}
