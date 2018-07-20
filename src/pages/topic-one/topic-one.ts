import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import fullpage from 'fullpage.js';
import { TopicTwoPage } from '../topic-two/topic-two';
import { TopicFivePage } from '../topic-five/topic-five';
import * as $ from 'jquery';

/**
 * Generated class for the TopicTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-one',
  templateUrl: 'topic-one.html',
})

export class TopicOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    new fullpage('#fullpage', {
      autoScrolling:true,
      scrollHorizontally: true,
      offsetSections: false,
      paddingTop: '3em',
    });

    if ($("body").hasClass("edit-mode")) {
      console.log("has class")
    }
  }

  // swipeEvent(e) {
  //   if (e.direction == 2) {
  //     this.navCtrl.push(TopicTwoPage);
  //   }

  //   if (e.direction == 4) {
  //     this.navCtrl.push(TopicFivePage);
  //   }
  // }

}
