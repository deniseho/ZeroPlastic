import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import fullpage from 'fullpage.js';
import { TopicOnePage } from '../topic-one/topic-one';
import { TopicFourPage } from '../topic-four/topic-four';

/**
 * Generated class for the TopicFivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-five',
  templateUrl: 'topic-five.html',
})
export class TopicFivePage {

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
      this.navCtrl.push(TopicOnePage);
    }

    if (e.direction == 4) {
      this.navCtrl.push(TopicFourPage);
    }
  }
}
