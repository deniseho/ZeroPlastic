import {Component, ViewChild} from '@angular/core';
import {
  IonicPage,
  NavController,
  Slides,
  Content,
  NavParams,
  ModalController
} from 'ionic-angular';
import {User} from '../../shared/user-model';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {GamePage} from '../game/game';
import {TopicQuizComponent} from '../../components/topic-quiz/topic-quiz';
import {topic1} from '../../shared/topic1-questions';
import {topic4} from '../../shared/topic4-questions';
import {topic3} from '../../shared/topic3-questions';

@Component({selector: 'page-topic-five', templateUrl: 'topic-five.html'})
export class TopicFivePage {
  // pages: Array<{title: string, component: any, collection: any}>;
  currentUser: User;
  events: any[];

  constructor(public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController, private auth : AuthServiceProvider) {
  }
  
  ionViewDidLoad() {}

  gotoQuizOne() {
    const modal = this
      .modalCtrl
      .create(TopicQuizComponent, {"collection": topic1});
    modal.present();
  }

  gotoQuizThree() {
    const modal = this
      .modalCtrl
      .create(TopicQuizComponent, {"collection": topic3});
    modal.present();
  }

  gotoQuizFour() {
    const modal = this
      .modalCtrl
      .create(TopicQuizComponent, {"collection": topic4});
    modal.present();
  }

  gotoGame() {
    this
    .navCtrl
    .push(GamePage);
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
          if (this.events != undefined) {
            this
              .events
              .push(y);
          }
        });
      });
  }

}