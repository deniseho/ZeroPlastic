import {Component} from "@angular/core";
import {NavController, ViewController, NavParams} from "ionic-angular";
import {QuizPage} from "./quiz";

@Component({selector: 'page-quiz-result', templateUrl: 'result.html'})
export class QuizResultPage {

    // badge : any;
    quizScore : number;

    constructor(public navCtrl : NavController, public navParams : NavParams, public viewCtrl : ViewController,) {
        this.quizScore = navParams.get('quizScore');
        // this.badge = navParams.get('badge');
    }

    ionViewDidLoad() {
        // document.getElementById("BadgeTitle").innerHTML = this.badge.title;
        // let badgeImg = document.getElementById("BadgeImg") as HTMLImageElement;
        // badgeImg.src = this.badge.imgUrl;
    }

    close() {
        this
            .viewCtrl
            .dismiss({'action': 'remove', 'score': this.quizScore});
    }

}