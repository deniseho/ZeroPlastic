import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { TopicOnePage } from '../topic-one/topic-one';
import { TopicTwoPage } from '../topic-two/topic-two';
import { TopicThreePage } from '../topic-three/topic-three';
import { TopicFourPage } from '../topic-four/topic-four';
import { TopicFivePage } from '../topic-five/topic-five';

@Component({selector: 'page-hello-ionic', templateUrl: 'hello-ionic.html'})
export class HelloIonicPage {
  constructor(public navCtrl : NavController, public navParams : NavParams) {}

  gotoTopicOne() {
    this
      .navCtrl
      .push(TopicOnePage);
  }

  gotoTopicTwo() {
    this
      .navCtrl
      .push(TopicTwoPage);
  }

  gotoTopicThree() {
    this
      .navCtrl
      .push(TopicThreePage);
  }

  gotoTopicFour() {
    this
      .navCtrl
      .push(TopicFourPage);
  }

  gotoTopicFive() {
    this
      .navCtrl
      .push(TopicFivePage);
  }

}
