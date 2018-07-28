import {Component, ViewChild} from '@angular/core';
import {
  NavController,
  NavParams,
  ViewController,
  AlertController,
  ModalController,
  Slides
} from 'ionic-angular';
import {TopicOnePage} from '../topic-one/topic-one';
import {questions} from '../quiz/questions';
import {QuizResultPage} from './result';
import {badges} from '../quiz/badges';

@Component({selector: 'page-quiz', templateUrl: 'quiz.html'})
export class QuizPage {

  @ViewChild(Slides)quizSlides : Slides;

  questions : any[];
  isAnswer : boolean;
  btnStyle : string;
  score : number;
  badges : any = [];

  constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController, public alertCtrl : AlertController) {
    this.questions = questions;
    this.isAnswer = false;
    this.btnStyle = "";
    this.score = 0;
    this.badges = badges;
  }

  ionViewDidEnter() {
    this
      .quizSlides
      .lockSwipes(true);
  }

  ionViewDidLoad() {}

  checkAnswer(e, option) {

    if (option.isAnswer) {
      this.isAnswer = true;
      e
        .target
        .parentNode
        .classList
        .add("btn-correct");
      this.score++;
    } else {
      this.isAnswer = false;
      e
        .target
        .parentNode
        .classList
        .add("btn-wrong");
    }

    setTimeout(() => {
      if (this.quizSlides.clickedIndex < this.quizSlides.length() - 1) {
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
            }
          }
        ]
      });
    confirm.present();
  }

  showResultPage() {
    // let result = this   .badges   .find((item, index, array) => {     return
    // item.points == this.score;   }); console.log("result from quiz page");
    // console.log(result);

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
    modal.onDidDismiss(data => {
      if (data.action == 'remove') {
        this
          .navCtrl
          .pop();
      }
    });
    modal.present();
  }
}
