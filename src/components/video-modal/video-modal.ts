import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Loading, LoadingController, ViewController, NavController, NavParams} from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {VideoPlayer, VideoOptions} from '@ionic-native/video-player';

@Component({selector: 'video-modal', templateUrl: 'video-modal.html'})
export class VideoModalComponent {
  videoOptions : VideoOptions;
  videoUrl : string;

  trustedVideoUrl : SafeResourceUrl;
  loading : Loading;

  videoNum : any;

  constructor(public navCtrl : NavController, public navParam : NavParams, 
    public loadingCtrl : LoadingController, private viewCtrl : ViewController, 
    private videoPlayer : VideoPlayer, public sanitizer: DomSanitizer) {
    // this.playVideo();
    this.videoNum = this
      .navParam
      .get("videoNum");
  }

  ionViewDidEnter() {
    if (this.videoNum == '01') 
      this.videoUrl = "assets/videos/video01.mp4";
    else if (this.videoNum == '02') 
      this.videoUrl = "assets/videos/video02.mp4";
    }
  
  // stopVideo() {   this     .videoPlayer     .close(); } async playVideo() {
  // try {     this.videoOptions = {       volume: 0.7,       scalingMode: 1     }
  //     this.videoUrl = "assets/videos/video01.mp4";     await this
  // .videoPlayer       .play(this.videoUrl);   } catch (e) {
  // console.error(e);   } }

  close() {
    this
      .viewCtrl
      .dismiss();
  }

}
