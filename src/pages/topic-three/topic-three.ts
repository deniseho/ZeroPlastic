import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import fullpage from 'fullpage.js';
import { TopicFourPage } from '../topic-four/topic-four';
import { TopicTwoPage } from '../topic-two/topic-two';

/**
 * Generated class for the TopicThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-three',
  templateUrl: 'topic-three.html',
})
export class TopicThreePage {

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
      this.navCtrl.push(TopicFourPage);
    }

    if (e.direction == 4) {
      this.navCtrl.push(TopicTwoPage);
    }
  }

}
