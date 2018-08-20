import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides, Content, NavParams, ModalController} from 'ionic-angular';
import { TopicQuizComponent } from '../../components/topic-quiz/topic-quiz';
import { topic2 } from '../../shared/topic2-questions';
import { country } from '../../shared/country-info';
import { MapInfoComponent } from '../../components/map-modal/map-modal';

@Component({selector: 'page-topic-two', templateUrl: 'topic-two.html'})
export class TopicTwoPage {
  title: string;
  countryList: string[];
  drawerOptions: any;
  
  constructor(public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController) {
    this.title = country.title;
    this.countryList = country.countryList;
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 100,
      thresholdFromTop: 100,
      bounceBack: false
    };
  }

  ionViewDidEnter() {
  }

  onTap($event, value): void {
    // let x = $event.srcEvent.offsetX;
    // let y = $event.srcEvent.offsetY;

    const modal = this
      .modalCtrl
      .create(MapInfoComponent, {"country": this.countryList[value]});
    modal.present();
}

    startQuiz() {
      const modal = this
        .modalCtrl
        .create(TopicQuizComponent, {"collection": topic2});
      modal.present();
    }
  
  }