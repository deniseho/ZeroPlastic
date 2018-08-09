import {Component} from "@angular/core";
import {NavController, ViewController, NavParams} from "ionic-angular";
import {QuizPage} from "./quiz";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

@Component({selector: 'page-quiz-result', templateUrl: 'result.html'})
export class QuizResultPage {

    // badge : any;
    quizScore : number;
    totalScore : number;
    constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController, private authApi : AuthServiceProvider) {
        this.quizScore = navParams.get('quizScore');
        this.totalScore = this.authApi.getCurrentUser().totalScore;
    }

    ionViewDidLoad() {}

    close() {
        this
            .viewCtrl
            .dismiss({'action': 'remove', 'quizScore': this.quizScore});
    }

}