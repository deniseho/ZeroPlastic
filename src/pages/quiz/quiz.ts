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
import {questionsCollection01, questionsCollection02} from '../quiz/questions';
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

  constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController, public alertCtrl : AlertController, private nativeAudio : NativeAudio) {
    let collectionNum = this
      .navParams
      .get("num");

    if (collectionNum == "1") {
      this.questions = questionsCollection01;
    } else if (collectionNum == "2") {
      this.questions = questionsCollection02;
    }
    
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

  checkAnswer(e, option) {
    if (option.isAnswer) {
      this.isAnswer = true;
      e
        .target
        .parentNode
        .classList
        .add("btn-correct");
      this.score++;

      this
        .nativeAudio
        .play('correct');

    } else {
      this.isAnswer = false;
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
    //
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
