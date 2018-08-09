import {Component, ViewChild} from '@angular/core';
import {
  NavController,
  NavParams,
  ViewController,
  AlertController,
  ModalController,
  Slides
} from 'ionic-angular';
import {NativeAudio} from '@ionic-native/native-audio';
import {topic1, topic2} from '../quiz/questions';
import {QuizResultPage} from './result';
import {badges} from '../quiz/badges';
import {TopicOnePage} from '../topic-one/topic-one';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserProvider} from '../../providers/user-service/user-service';
import {User} from '../../providers/auth-service/User';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import * as _ from 'lodash';

@Component({selector: 'page-quiz', templateUrl: 'quiz.html'})
export class QuizPage {

  @ViewChild(Slides)quizSlides : Slides;

  topic : any;
  topicTitle : string;
  isAnswer : boolean;
  btnStyle : string;
  quizScore : number;
  // badges : any = [];
  disableButtons : boolean;

  questionScore : any = [0, 0, 0, 0, 0];
  currentUser : User;

  constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController, public alertCtrl : AlertController, private nativeAudio : NativeAudio, private userApi : UserProvider, private authApi : AuthServiceProvider) {

    this.currentUser = authApi.getCurrentUser();

    let collectionNum = this
      .navParams
      .get("num");

    if (collectionNum == "1") {
      this.topic = topic1;
      this.topicTitle = "topic1";
    } else if (collectionNum == "2") {
      this.topic = topic2;
      this.topicTitle = "topic2";
    }

    this.btnStyle = "";
    this.quizScore = 0;
    // this.badges = badges;
    this.disableButtons = false;
  }

  ionViewDidEnter() {
    this
      .quizSlides
      .lockSwipes(true);
  }

  ionViewDidLoad() {
    this
      .nativeAudio
      .preloadSimple('correct', 'assets/audio/correct.m4a');

    this
      .nativeAudio
      .preloadSimple('wrong', 'assets/audio/wrong.m4a');

    this
      .nativeAudio
      .preloadSimple('new_badge', 'assets/audio/New-Badge.m4a');

  }

  checkAnswer(e, i, option) {
    this.questionScore[i] = option.points;
    this.quizScore += Number(option.points);

    //user answer question correctly
    if (option.isAnswer) {
      e
        .target
        .parentNode
        .classList
        .add("btn-correct");

      this
        .nativeAudio
        .play('correct');

    } else {
      //user answer question wrongly
      e
        .target
        .parentNode
        .classList
        .add("btn-wrong");

      this
        .nativeAudio
        .play('wrong');
    }

    setTimeout(() => {
      this.disableButtons = true;
    }, 300);

    setTimeout(() => {
      if (this.quizSlides.clickedIndex < this.quizSlides.length() - 1) {
        this.disableButtons = false;
        this.nextSlide();
      } else {
        this
        .userApi
        .updateUserAchievement(this.currentUser, this.quizScore, this.questionScore, this.topicTitle);
  
        this.showResultPage();
        this
          .nativeAudio
          .play('new_badge');

      }
    }, 1000);

  }

  nextSlide() {
    this
      .quizSlides
      .lockSwipes(false);
    this
      .quizSlides
      .slideNext();
    this
      .quizSlides
      .lockSwipes(true);
  }

  showLeaveConfirm() {
    const confirm = this
      .alertCtrl
      .create({
        title: 'Are you sure to leave?',
        message: 'You will lose your current points!',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {}
          }, {
            text: 'Confirm',
            handler: () => {
              this
                .viewCtrl
                .dismiss();
            }
          }
        ]
      });
    confirm.present();
  }

  showResultPage() {
    const modal = this
      .modalCtrl
      .create(QuizResultPage, {
        quizScore: this.quizScore,
        // badge: this   .badges   .find((item, index, array) => {     return
        // item.points == this.quizScore;   })
      });

    //todo: insert score & badge into db
    modal.onDidDismiss(data => {
      if (data.action == 'remove') {
        this
          .viewCtrl
          .dismiss();
      }
    });
    modal.present();
  }

}
