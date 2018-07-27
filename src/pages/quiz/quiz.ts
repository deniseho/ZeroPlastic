import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ViewController, AlertController, Slides} from 'ionic-angular';
import {TopicOnePage} from '../topic-one/topic-one';
import {questions} from '../quiz/questions';

@Component({selector: 'page-quiz', templateUrl: 'quiz.html'})
export class QuizPage {
  @ViewChild(Slides)quizSlides : Slides;

  questions : any[] = questions;
  isAnswer : boolean = false;
  btnStyle : string;

  constructor(public navCtrl : NavController, 
    public navParams : NavParams, 
    public viewCtrl : ViewController, 
    public alertCtrl : AlertController) {
      this.btnStyle = "";
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
      e.target.parentNode.classList.add("btn-correct");
    } else {
      this.isAnswer = false;
      e.target.parentNode.classList.add("btn-wrong");
    }

    setTimeout(() => {
      this.nextSlide();
    }, 1500);
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

  showConfirm() {
    const confirm = this
      .alertCtrl
      .create({
        title: 'Are you sure to leave?',
        message: 'You will lose your current points!',
        buttons: [
          {
            text: 'Cancel',
            handler: () => {
              this
                .viewCtrl
                .dismiss();
            }
          }, {
            text: 'Confirm',
            handler: () => {
              this
                .navCtrl
                .push(TopicOnePage);
            }
          }
        ]
      });
    confirm.present();
  }
}
