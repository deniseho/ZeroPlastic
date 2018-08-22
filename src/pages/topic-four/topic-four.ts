import {Component, ViewChild} from '@angular/core';
import {
  IonicPage,
  NavController,
  Slides,
  Content,
  NavParams,
  ModalController
} from 'ionic-angular';
import {GamePage} from '../game/game';
import {AlternativesPage} from '../alternatives/alternatives';
import {tags} from "../../shared/tags-info";
import {TagsModalComponent} from "../../components/tags-modal/tags-modal";
import {TopicQuizComponent} from '../../components/topic-quiz/topic-quiz';
import {topic4} from '../../shared/topic4-questions';
import {EventModalComponent} from '../../components/event-modal/event-modal';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

@Component({selector: 'page-topic-four', templateUrl: 'topic-four.html'})
export class TopicFourPage {
  tagsList : any[];

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];
  events : any[];
  newEvent : any;

  constructor(public navCtrl : NavController, public navParams : NavParams, 
    public modalCtrl : ModalController, private toast: ToastServiceProvider) {
    this.tabs = ["Take action", "Volunteer", "Recycle", "Alternatives", "Quiz"];
    this.tagsList = tags;
    this.events = [
      {
        date: {
          day: "17",
          month: "Sep",
          year: "2018"
        },
        title: "Beach clean up",
        location: "Donabate Village, Balcarrick, Donabate, Co. Dublin",
        time: "9:30am",
        contact: "(01) 896 2320"
      }, {
        date: {
          day: "22",
          month: "Sep",
          year: "2018"
        },
        title: "Recycling workshop",
        location: "Donabate Village, Balcarrick, Donabate, Co. Dublin",
        time: "6:00pm",
        contact: "(01) 896 2320"
      }
    ];
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
  
  gotoGamePage() {
    this
      .navCtrl
      .push(GamePage);
  }

  gotoAlternatives() {
    this
      .navCtrl
      .push(AlternativesPage);
  }

  onTap($event, value) : void {
    const modal = this
      .modalCtrl
      .create(TagsModalComponent, {
        "tagTitle": this.tagsList[value]["title"],
        "tagFoundIn": this.tagsList[value]["foundIn"],
        "tagPlastic": this.tagsList[value]["plastic"],
        "tagRecyclabilityTitle": this.tagsList[value]["recyclabilityTitle"],
        "tagRecyclable": this.tagsList[value]["recyclable"],
        "tagIcon": this.tagsList[value]["icon"],
        "tagTypePlasticTitle": this.tagsList[value]["typePlasticTitle"],
        "tagRecyclableDescription": this.tagsList[value]["recyclableDescription"]
      });
    modal.present();
  }

  startQuiz() {
    const modal = this
      .modalCtrl
      .create(TopicQuizComponent, {"collection": topic4});
    modal.present();
  }

  createEvent() {
    const modal = this
      .modalCtrl
      .create(EventModalComponent);

    modal.onDidDismiss(data => {
      this.events.push(data.event);
      this.toast.showToast("A new event is created!", "");
    });
    
    modal.present();
  }
}