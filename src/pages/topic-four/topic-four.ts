import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import fullpage from 'fullpage.js';
import { TopicFivePage } from '../topic-five/topic-five';
import { TopicThreePage } from '../topic-three/topic-three';

/**
 * Generated class for the TopicFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-four',
  templateUrl: 'topic-four.html',
})
export class TopicFourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    new fullpage('#fullpage', {
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
      offsetSections: false,
      paddingTop: '3em',
    });
  }

  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.push(TopicFivePage);
    }

    if (e.direction == 4) {
      this.navCtrl.push(TopicThreePage);
    }
  }

}
