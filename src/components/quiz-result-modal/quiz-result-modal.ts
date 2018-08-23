import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'quiz-result-modal',
  templateUrl: 'quiz-result-modal.html'
})
export class QuizResultComponent {
    quizScore : number;
    totalScore : number;
    constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, private auth : AuthServiceProvider) {
        this.totalScore = this.auth.currentUser.totalScore;
        this.quizScore = this.navParams.get("quizScore");
    }

    ionViewDidLoad() {}

    close() {
        this
            .viewCtrl
            .dismiss({'action': 'remove'});
    }

}
