import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TopicOnePage} from '../topic-one/topic-one';
import {TopicTwoPage} from '../topic-two/topic-two';
import {TopicThreePage} from '../topic-three/topic-three';
import {TopicFourPage} from '../topic-four/topic-four';
import {TopicFivePage} from '../topic-five/topic-five';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import * as _ from 'lodash';
import { User } from '../../shared/user-model';

@Component({selector: 'page-hello-ionic', templateUrl: 'topic-menu.html'})

export class TopicMenu {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl : NavController, 
    public navParams : NavParams, 
  ) {
      this.pages = [
      { title: 'About Plastics', component: TopicOnePage },
      { title: 'Top 10 contributors', component: TopicTwoPage },
      { title: 'Species Affected', component: TopicThreePage },
      { title: 'Take Action', component: TopicFourPage },
      { title: 'Activities', component: TopicFivePage },
    ];
  }

  ionViewDidLoad() {
  }


  gotoPage(p){
    this
    .navCtrl
    .push(p);
  }
}
