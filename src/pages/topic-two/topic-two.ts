import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import fullpage from 'fullpage.js';
import { TopicThreePage } from '../topic-three/topic-three';
import { TopicOnePage } from '../topic-one/topic-one';

/**
 * Generated class for the TopicTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-two',
  templateUrl: 'topic-two.html',
})
export class TopicTwoPage {

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
      this.navCtrl.push(TopicThreePage);
    }

    if (e.direction == 4) {
      this.navCtrl.push(TopicOnePage);
    }
  }
}
