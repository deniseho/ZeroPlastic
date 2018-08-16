import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides, Content, NavParams, ModalController} from 'ionic-angular';
import { TopicQuizComponent } from '../../components/topic-quiz/topic-quiz';
import { topic2 } from '../../shared/topic2-qustions';

@Component({selector: 'page-topic-two', templateUrl: 'topic-two.html'})
export class TopicTwoPage {

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];
  quizScore : number;
  quizButtonText : string;

  constructor(public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController) {
    this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];

    //check if the score exists
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

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
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
        .create(TopicQuizComponent, {"collection": topic2});
      modal.present();
    }
  
  }