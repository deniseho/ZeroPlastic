import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Slides, Content, ModalController} from 'ionic-angular';
import {TopicQuizComponent} from '../../components/topic-quiz/topic-quiz';
import {topic3} from '../../shared/topic3-questions';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {User} from '../../shared/user-model';
import {VideoModalComponent} from '../../components/video-modal/video-modal';

@Component({selector: 'page-topic-three', templateUrl: 'topic-three.html'})
export class TopicThreePage {

  @ViewChild('SwipedTabsSlider')SwipedTabsSlider : Slides;
  @ViewChild('scroll')scroll : Content;

  SwipedTabsIndicator : any = null;
  tabElementWidth_px : number = 100;
  tabs : any = [];
  currentUser : User;

  constructor(public navCtrl : NavController, private auth : AuthServiceProvider, public modalCtrl : ModalController) {
    this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
    this.getPageData();
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

          if (y["email"] == this.auth.currentUser.email) {
            this.currentUser = y as User;
          }
        });
        let totalScore = this.currentUser.totalScore;
        this.currentUser.badges = this
          .auth
          .getBadgeRecord(totalScore);
        this
          .auth
          .updateUser(this.currentUser);
      });
  }

  playVideo() {
    const modal = this
      .modalCtrl
      .create(VideoModalComponent);
    modal.present();
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
      .create(TopicQuizComponent, {"collection": topic3});
    modal.present();
  }
}
