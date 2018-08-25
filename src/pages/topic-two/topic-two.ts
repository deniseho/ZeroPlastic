import {Component, ViewChild} from '@angular/core';
import {
  IonicPage,
  NavController,
  Slides,
  Content,
  NavParams,
  ModalController
} from 'ionic-angular';
import {TopicQuizComponent} from '../../components/topic-quiz/topic-quiz';
import {topic2} from '../../shared/topic2-questions';
import {country} from '../../shared/country-info';
import {MapInfoComponent} from '../../components/map-modal/map-modal';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {User} from '../../shared/user-model';

@Component({selector: 'page-topic-two', templateUrl: 'topic-two.html'})
export class TopicTwoPage {
  title : string;
  countryList : string[];
  drawerOptions : any;
  currentUser : User;

  constructor(public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController, private auth : AuthServiceProvider) {
    this.title = country.title;
    this.countryList = country.countryList;
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 100,
      thresholdFromTop: 100,
      bounceBack: false
    };
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

  ionViewDidEnter() {}

  onTap($event, value) : void {
    // let x = $event.srcEvent.offsetX; let y = $event.srcEvent.offsetY;

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