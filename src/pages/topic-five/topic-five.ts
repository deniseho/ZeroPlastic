import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides, Content} from 'ionic-angular';
import { User } from '../../shared/user-model';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({selector: 'page-topic-five', templateUrl: 'topic-five.html'})
export class TopicFivePage {

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];

  currentUser : User;  
  events: any[];
  
  constructor(public navCtrl : NavController, private auth : AuthServiceProvider) {
    this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
  }

  getPageData() {
    this
      .auth
      .getDBUsers()
      .snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {
          var y = element
            .payload
            .toJSON();
          y["$key"] = element.key;

          if(y["email"]==this.auth.currentUser.email){
            this.currentUser = y as User;
          }
        });
      });

      this
      .auth
      .getDBEvents()
      .snapshotChanges()
      .subscribe(item => {
        this.events = [];

        item.forEach(element => {
          var y = element
            .payload
            .toJSON();
          y["$key"] = element.key;
          console.log("getDBEvents y")
          console.log(y)
          if (this.events != undefined) {
            this
              .events
              .push(y);
          }
        });
      });
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
  }