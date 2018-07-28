import {Component} from "@angular/core";
import {NavController, ViewController, NavParams} from "ionic-angular";
import {QuizPage} from "./quiz";

@Component({selector: 'page-quiz-result', templateUrl: 'result.html'})
export class QuizResultPage {

    badge : any;
    score : number;

    constructor(public navCtrl : NavController, public param : NavParams, public viewCtrl : ViewController,) {
        this.score = param.get('score');
        this.badge = param.get('badge');
    }

    ionViewDidLoad() {
        document.getElementById("BadgeTitle").innerHTML = this.badge.title;
        document.getElementById("BadgeImg").src = this.badge.imgUrl;
    }

    close() {
        this
            .viewCtrl
            .dismiss({'action': 'remove'});
    }

}