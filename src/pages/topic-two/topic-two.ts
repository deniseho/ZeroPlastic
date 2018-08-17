import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides, Content, NavParams, ModalController} from 'ionic-angular';
import { TopicQuizComponent } from '../../components/topic-quiz/topic-quiz';
import { topic2 } from '../../shared/topic2-qustions';
import { country } from '../../shared/country-info';
import { MapInfoComponent } from '../../components/map-info/map-info';

@Component({selector: 'page-topic-two', templateUrl: 'topic-two.html'})
export class TopicTwoPage {
  title: string;
  countryList: string[];
  
  constructor(public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController) {
    this.title = country.title;
    this.countryList = country.countryList;
  }

  ionViewDidEnter() {
  }

  onTap($event, value): void {
    let x = $event.srcEvent.offsetX;
    let y = $event.srcEvent.offsetY;

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