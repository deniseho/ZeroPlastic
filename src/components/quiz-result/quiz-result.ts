import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'quiz-result',
  templateUrl: 'quiz-result.html'
})
export class QuizResultComponent {


    // badge : any;
    quizScore : number;
    totalScore : number;
    constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, private auth : AuthServiceProvider) {
        this.quizScore = navParams.get('quizScore');
        this.totalScore = this.auth.getCurrentUser().totalScore;
    }

    ionViewDidLoad() {}

    close() {
        this
            .viewCtrl
            .dismiss({'action': 'remove', 'quizScore': this.quizScore});
    }

}
