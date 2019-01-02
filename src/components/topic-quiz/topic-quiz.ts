import {Component, ViewChild} from '@angular/core';
import {
  Slides,
  NavController,
  NavParams,
  ViewController,
  ModalController,
  AlertController
} from 'ionic-angular';
import {NativeAudio} from '@ionic-native/native-audio';
import {UserServiceProvider} from '../../providers/user-service/user-service';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {QuizResultComponent} from '../quiz-result-modal/quiz-result-modal';
import {User} from '../../shared/user-model';
import { Vibration } from '@ionic-native/vibration';

@Component({selector: 'topic-quiz', templateUrl: 'topic-quiz.html'})
export class TopicQuizComponent {

  @ViewChild(Slides)quizSlides : Slides;

  topic : any;
  isAnswer : boolean;
  btnStyle : string;
  disableButtons : boolean;

  currentUser : User;
  quizScore : number;
  questionPoints : number[];
  topicTitle : string;
  correctNum : number;
  

  constructor(public navCtrl : NavController, public navParams : NavParams, 
    public viewCtrl : ViewController, public modalCtrl : ModalController,
     public alertCtrl : AlertController, private nativeAudio : NativeAudio, 
     private auth : AuthServiceProvider, private vibration: Vibration) {

    this.topic = navParams.get("collection");

    this.currentUser = this.auth.currentUser;
    this.quizScore = 0;
    this.questionPoints = [0, 0, 0, 0, 0];
    this.topicTitle = this.topic.collectionName;

    this.btnStyle = "";
    this.disableButtons = false;

    this.correctNum = 0;
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

    this
      .nativeAudio
      .setVolumeForComplexAsset("correct", 10);

    this
      .nativeAudio
      .setVolumeForComplexAsset("wrong", 10);

    this
      .nativeAudio
      .setVolumeForComplexAsset("new_badge", 10);
  }

  checkAnswer(e, i, option) {
    this.questionPoints[i] = option.points;
    this.quizScore += Number(option.points);

    // this.topic.questionList[i].options.forEach((element, index) => {
    //   if(element.isAnswer){
    //     console.log(
    //       e
    //       .target
    //       .parentNode.parentNode.parentNode
    //     )
    //   }  
    // });

    //user answer question correctly
    if (option.isAnswer) {
      this.correctNum++;

      e
        .target
        .parentNode
        .classList
        .add("btn-correct");

      this
        .nativeAudio
        .play('correct');

        this.vibration.vibrate(400);
        
        
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
        
        this.vibration.vibrate([200,100,200]);
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
          .auth
          .updateUserAchievement(this.currentUser, this.quizScore, this.questionPoints, this.topicTitle);

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
        title: 'Are you sure you want to exit?',
        message: 'You will lose your progress and current points!',
        buttons: [
          {
            text: 'Continue the quiz',
            handler: () => {}
          }, {
            text: 'Exit',
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
      .create(QuizResultComponent, {quizScore: this.quizScore, correctNum: this.correctNum});

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
