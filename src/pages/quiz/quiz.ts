import {Component, ViewChild} from '@angular/core';
import {
  NavController,
  NavParams,
  ViewController,
  AlertController,
  ModalController,
  Slides
} from 'ionic-angular';
import {StreamingMedia, StreamingAudioOptions} from '@ionic-native/streaming-media';
import {questions} from '../quiz/questions';
import {QuizResultPage} from './result';
import {badges} from '../quiz/badges';
import {TopicOnePage} from '../topic-one/topic-one';

@Component({selector: 'page-quiz', templateUrl: 'quiz.html'})
export class QuizPage {

  @ViewChild(Slides)quizSlides : Slides;
  // @Output()scoreEmitter = new EventEmitter();

  questions : any[];
  isAnswer : boolean;
  btnStyle : string;
  score : number;
  badges : any = [];
  disableButtons : boolean;

  constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController, public alertCtrl : AlertController, private streamingMedia : StreamingMedia) {
    this.questions = questions;
    this.isAnswer = false;
    this.btnStyle = "";
    this.score = 0;
    this.badges = badges;
    this.disableButtons = false;
  }

  ionViewDidEnter() {
    this
      .quizSlides
      .lockSwipes(true);
  }

  ionViewDidLoad() {}

  checkAnswer(e, option) {
    // let audioOptions : StreamingAudioOptions = {
    //   successCallback: () => {
    //     console.log("audio successCallback");
    //   },
    //   errorCallback: ()=>{
    //     console.log("audio errorCallback");
    //   }
    // }

    if (option.isAnswer) {
      this.isAnswer = true;
      e
        .target
        .parentNode
        .classList
        .add("btn-correct");
      this.score++;
      this.streamingMedia.playAudio("assets/audio/correct.m4a");      
    } else {
      this.isAnswer = false;
      e
        .target
        .parentNode
        .classList
        .add("btn-wrong");
        this.streamingMedia.playAudio("assets/audio/wrong.m4a");
    }
    setTimeout(() => {
      this.disableButtons = true;
    }, 300);

    setTimeout(() => {
      if (this.quizSlides.clickedIndex < this.quizSlides.length() - 1) {
        this.disableButtons = false;
        this.nextSlide();
      } else {
        this.showResultPage();
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
              // this   .scoreEmitter   .emit(this.score);
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
        score: this.score,
        badge: this
          .badges
          .find((item, index, array) => {
            return item.points == this.score;
          })
      });

    //todo: insert score & badge into db

    modal.onDidDismiss(data => {
      if (data.action == 'remove') {
        this
          // .navCtrl.push(TopicOnePage, {'topicOneQuizScore': data.score});
        .navCtrl.pop();
      }
    });
    modal.present();
  }
}
