import {Component, ViewChild, Renderer} from '@angular/core';
import {
  IonicPage,
  NavController,
  ModalController,
  Slides,
  Content,
  ViewController,
  Events,
  NavParams,
  Platform
} from 'ionic-angular';
import {Subject} from 'rxjs/Subject';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import * as _ from 'lodash';
import * as $ from 'jquery';
import {UserServiceProvider} from '../../providers/user-service/user-service';
import { TopicQuizComponent } from '../../components/topic-quiz/topic-quiz';
import { topic1 } from '../../shared/topic1-questions';

@Component({selector: 'page-topic-one', templateUrl: 'topic-one.html'})
export class TopicOnePage {

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];

  constructor(private event : Events, public navCtrl : NavController, 
    public navParams : NavParams, public modalCtrl : ModalController, 
    public renderer : Renderer, public viewCtrl : ViewController, 
    private auth : AuthServiceProvider) {
    this.tabs = ["Problem", "Cause", "Effect", "Solution", "Quiz"];
  }

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  ionViewDidLoad() {
  }

  selectTab(index) {
    // this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 *
    // index) + '%,0,0)';
    this
      .renderer
      .setElementStyle(this.SwipedTabsIndicator, 'webkitTransform', 'translate3d(' + (100 * index) + '%,0,0)');
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
      this
        .renderer
        .setElementStyle(this.SwipedTabsIndicator, 'webkitTransform', 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)');
      // this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
      // (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
    }
  }

  animateIndicator($event) {
    if (this.SwipedTabsIndicator) 
      this.renderer.setElementStyle(this.SwipedTabsIndicator, 'webkitTransform', 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)');
      // this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
      // (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    }
  
  startQuiz() {
    const modal = this
      .modalCtrl
      .create(TopicQuizComponent, {"collection": topic1});
    modal.present();
  }

}