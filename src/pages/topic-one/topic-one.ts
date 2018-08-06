import {Component, ViewChild} from '@angular/core';
import {
  IonicPage,
  NavController,
  ModalController,
  Slides,
  Content,
  ViewController,
  Events,
  NavParams
} from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';
import {Subject} from 'rxjs/Subject';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';

import * as _ from 'lodash';

@Component({selector: 'page-topic-one', templateUrl: 'topic-one.html'})
export class TopicOnePage {

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];
  quizScore : number;
  quizButtonText : string;

  constructor(private event : Events, public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController, public viewCtrl : ViewController, private auth : AuthServiceProvider) {
    this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];

    let score = this
      .navParams
      .get('topicOneQuizScore');
    this.quizScore = score
      ? score
      : 0;
    this.quizButtonText = score
      ? 'Try again'
      : 'Start the quiz';
  }

  addScore() {
    this
      .event
      .publish('topicOneQuizScore', Number(this.quizScore));
  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  ionViewDidLoad() {
    // let mySubject = new Subject();
    // mySubject.subscribe((data)=>{ console.log(data); }) mySubject.next('hello');
  }

  selectTab(index) {
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
    this
      .scroll
      .scrollTo(index * this.tabElementWidth_px, 0, 500);
    this
      .SwipedTabsSlider
      .slideTo(index, 500);
  }

  updateIndicatorPosition() {
    this
      .scroll
      .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);

    // this condition is to avoid passing to incorrect index
    if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
    }
  }

  animateIndicator($event) {
    if (this.SwipedTabsIndicator) 
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    }
  
  startQuiz() {
    const modal = this
      .modalCtrl
      .create(QuizPage);
    modal.present();
  }
}
