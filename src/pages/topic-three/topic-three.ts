import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides, Content, NavParams, ModalController} from 'ionic-angular';
import { TopicQuizComponent } from '../../components/topic-quiz/topic-quiz';
import { topic3 } from '../../shared/topic3-questions';
import { species } from '../../shared/species-info';
import {SpeciesModalComponent} from "../../components/species-modal/species-modal";

@Component({selector: 'page-topic-three', templateUrl: 'topic-three.html'})
export class TopicThreePage {
  species : any[];

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];

  constructor(public navCtrl : NavController,  public modalCtrl : ModalController ) {
    this.tabs = ["Species", "Quiz"];
    this.species = species;
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

    onTap($event, value) : void {
        const modal = this
            .modalCtrl
            .create(SpeciesModalComponent, {
              "specieVideo": this.species[value]["video"],
              "specieTitle": this.species[value]["title"],
              "specieDescription": this.species[value]["description"],
              "specieImage": this.species[value]["image"]
            });
        modal.present();
    }
  
  startQuiz() {
    const modal = this
      .modalCtrl
      .create(TopicQuizComponent, {"collection": topic3});
    modal.present();
  }
}
