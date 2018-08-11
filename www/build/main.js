webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alternatives_alternatives__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicFourPage = /** @class */ (function () {
    function TopicFourPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Game"];
    }
    TopicFourPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicFourPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicFourPage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicFourPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    TopicFourPage.prototype.gotoGamePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */]);
    };
    TopicFourPage.prototype.gotoAlternatives = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alternatives_alternatives__["a" /* AlternativesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TopicFourPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicFourPage.prototype, "scroll", void 0);
    TopicFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-four',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Four</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem Take action</h1>\n            <div>\n                <button ion-button (click)="gotoAlternatives()">Alternatives</button>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Game</h1>\n            <button ion-button (click)="gotoGamePage()">Start the game</button>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TopicFourPage);
    return TopicFourPage;
}());

//# sourceMappingURL=topic-four.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_quiz__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopicOnePage = /** @class */ (function () {
    function TopicOnePage(event, navCtrl, navParams, modalCtrl, viewCtrl, platform, auth, userApi) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.auth = auth;
        this.userApi = userApi;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
        //todo: check if the score exists from db
        var score = this
            .navParams
            .get('topicOneQuizScore');
        this.quizScore = score
            ? score
            : 0;
        this.quizButtonText = score
            ? 'Try again'
            : 'Start the quiz';
    }
    TopicOnePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicOnePage.prototype.ionViewDidLoad = function () { };
    TopicOnePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicOnePage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicOnePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    TopicOnePage.prototype.startQuiz = function (num) {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__quiz_quiz__["a" /* QuizPage */], { "num": num });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TopicOnePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicOnePage.prototype, "scroll", void 0);
    TopicOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-one',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic One</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n        <!--About plastic problem1-->\n            <ion-icon class="arrow-up-style" name="arrow-dropup-circle"></ion-icon>\n            <div class="container-slides-content">\n                <h1 class="slide-title-main">About plastic</h1>\n                <h1 class="slide-title2-main">Issue</h1>\n                <div class="line-separator-short"></div>\n                <h4 class="slide-subtitle">322 million tons</h4>\n                <p>of plastic were produced in 2015, the same weight as 900 Empire state buildings.</p>\n            </div>\n            <ion-icon class="arrow-down-style" name="arrow-dropdown-circle"></ion-icon>\n            <!-- <button ion-button (click)="addScore()">Add Score</button> -->\n        <!--About plastic problem2-->\n            <!--<div class="container-slides-content">-->\n                <!--<img class="icon_property" src="assets/imgs/icn_garbage_truck.png">-->\n                <!--<div class="line-separator-short"></div>-->\n                <!--<h4 class="slide-subtitle">8 millions tons</h4>-->\n                <!--<p>of  this plastic enters our oceans each year, equivalent to emptying a garbage truck of plastic\n                into an ocean every minute. This figure is estimated to rise to 60 tons per minute by 2050.</p>-->\n            <!--</div>-->\n        <!--About plastic problem3-->\n            <!--<div class="container-slides-content">-->\n                <!--<img class="icon_property" src="assets/imgs/icn_temp.png">-->\n                <!--<div class="line-separator-short"></div>-->\n                <!--<h4 class="slide-subtitle">Never fully biodegrade</h4>-->\n                <!--<p>Plastic never fully biodegrade rather plastics photodegrade, which means that they break down\n                into smaller, and smaller pieces to the microscopic level. Any toxic additives contained within the\n                plastics are released into the ocean.</p>-->\n            <!--</div>-->\n        <!--About plastic problem4-->\n            <!--<div class="container-slides-content">-->\n                <!--<img class="icon_property" src="assets/imgs/icn_temp.png">-->\n                <!--<div class="line-separator-short"></div>-->\n                <!--<h4 class="slide-subtitle">97%</h4>-->\n                <!--<p> of the Earth’s water supply is contained in the ocean. Plastic waste is greatly endangering the world’s-->\n                    <!--water supply. Plastics dumped in landfills form dangerous chemicals, and when these chemicals seep-->\n                    <!--underground, they degrade the water quality.</p>-->\n            <!--</div>-->\n            <ion-list>\n                <ion-item style="background: blue">\n                    <button ion-button (click)="startQuiz(1)">{{quizButtonText}}</button>\n                </ion-item>\n                <ion-item style="background: red">2</ion-item>\n                <ion-item style="background: blue">3</ion-item>\n                <ion-item style="background: red">4</ion-item>\n                <ion-item style="background: blue">5</ion-item>\n                <ion-item style="background: red">6</ion-item>\n            </ion-list>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Quiz</h1>\n            <!-- <h3>Score: {{quizScore}}</h3> -->\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserProvider */]])
    ], TopicOnePage);
    return TopicOnePage;
}());

//# sourceMappingURL=topic-one.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_questions__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__result__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, navParams, viewCtrl, modalCtrl, alertCtrl, nativeAudio, userApi, authApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.userApi = userApi;
        this.authApi = authApi;
        this.questionScore = [0, 0, 0, 0, 0];
        this.currentUser = authApi.getCurrentUser();
        var collectionNum = this
            .navParams
            .get("num");
        if (collectionNum == "1") {
            this.topic = __WEBPACK_IMPORTED_MODULE_3__quiz_questions__["a" /* topic1 */];
            this.topicTitle = "topic1";
        }
        else if (collectionNum == "2") {
            this.topic = __WEBPACK_IMPORTED_MODULE_3__quiz_questions__["b" /* topic2 */];
            this.topicTitle = "topic2";
        }
        this.btnStyle = "";
        this.quizScore = 0;
        this.disableButtons = false;
    }
    QuizPage.prototype.ionViewDidEnter = function () {
        this
            .quizSlides
            .lockSwipes(true);
    };
    QuizPage.prototype.ionViewDidLoad = function () {
        this
            .nativeAudio
            .preloadSimple('correct', 'assets/audio/correct.m4a');
        this
            .nativeAudio
            .preloadSimple('wrong', 'assets/audio/wrong.m4a');
        this
            .nativeAudio
            .preloadSimple('new_badge', 'assets/audio/New-Badge.m4a');
    };
    QuizPage.prototype.checkAnswer = function (e, i, option) {
        var _this = this;
        this.questionScore[i] = option.points;
        this.quizScore += Number(option.points);
        //user answer question correctly
        if (option.isAnswer) {
            e
                .target
                .parentNode
                .classList
                .add("btn-correct");
            this
                .nativeAudio
                .play('correct');
        }
        else {
            //user answer question wrongly
            e
                .target
                .parentNode
                .classList
                .add("btn-wrong");
            this
                .nativeAudio
                .play('wrong');
        }
        setTimeout(function () {
            _this.disableButtons = true;
        }, 300);
        setTimeout(function () {
            if (_this.quizSlides.clickedIndex < _this.quizSlides.length() - 1) {
                _this.disableButtons = false;
                _this.nextSlide();
            }
            else {
                _this
                    .userApi
                    .updateUserAchievement(_this.currentUser, _this.quizScore, _this.questionScore, _this.topicTitle);
                _this.showResultPage();
                _this
                    .nativeAudio
                    .play('new_badge');
            }
        }, 1000);
    };
    QuizPage.prototype.nextSlide = function () {
        this
            .quizSlides
            .lockSwipes(false);
        this
            .quizSlides
            .slideNext();
        this
            .quizSlides
            .lockSwipes(true);
    };
    QuizPage.prototype.showLeaveConfirm = function () {
        var _this = this;
        var confirm = this
            .alertCtrl
            .create({
            title: 'Are you sure to leave?',
            message: 'You will lose your current points!',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () { }
                }, {
                    text: 'Confirm',
                    handler: function () {
                        _this
                            .viewCtrl
                            .dismiss();
                    }
                }
            ]
        });
        confirm.present();
    };
    QuizPage.prototype.showResultPage = function () {
        var _this = this;
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_4__result__["a" /* QuizResultPage */], {
            quizScore: this.quizScore,
        });
        //todo: insert score & badge into db
        modal.onDidDismiss(function (data) {
            if (data.action == 'remove') {
                _this
                    .viewCtrl
                    .dismiss();
            }
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], QuizPage.prototype, "quizSlides", void 0);
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-quiz',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/quiz/quiz.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Quiz\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="showLeaveConfirm()">\n        <span ion-text color="primary">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides #quizSlides>\n    <ion-slide *ngFor="let question of topic.questionList; index as i">\n      <h3>{{question.question}}</h3>\n      <ion-buttons *ngFor="let option of question.options">\n        <button ion-button block large \n          [ngClass]="[btnStyle]"\n          [disabled]="disableButtons"\n          (click)="checkAnswer($event, i, option)">\n          {{option.description}}\n        </button>\n      </ion-buttons>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/quiz/quiz.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(db, auth) {
        this.db = db;
        this.auth = auth;
        this.$userKey = '-LJU-nVcB4Jp-UXcA6dE';
        this.userList = this.db.list('/users');
        this.userAchievementList = this.db.list('/userAchievementList');
        this.totalScore = 0;
    }
    UserProvider.prototype.getUsers = function () {
        return this.userList;
    };
    UserProvider.prototype.insertUser = function (user) {
        this.userList.push({
            name: user.name,
            email: user.email,
            password: user.password,
            badge: user.badge
        });
    };
    UserProvider.prototype.updateUser = function (user) {
        this.userList.update(this.$userKey, {
            name: user.name,
            email: user.email,
            password: user.password,
            badge: user.badge,
            totalScore: user.totalScore,
            topic1: user.topic1,
            topic2: user.topic2,
            topic3: user.topic3,
            topic4: user.topic4,
            topic5: user.topic5,
        });
    };
    UserProvider.prototype.updateUserAchievement = function (currentUser, quizScore, questionScore, topicTitle) {
        var user = currentUser;
        var preTotalScore = currentUser.totalScore;
        var preTopicScores = currentUser[topicTitle];
        var temp = 0;
        console.log("preTopicScores");
        console.log(preTopicScores);
        console.log("questionScore");
        console.log(questionScore);
        for (var i = 0; i < questionScore.length; i++) {
            if (preTopicScores[i] > questionScore[i]) {
                temp += preTopicScores[i];
            }
            else {
                temp += questionScore[i];
            }
        }
        console.log("temp");
        console.log(temp);
        if (temp > preTotalScore) {
            user.totalScore = temp;
        }
        else {
            user.totalScore = preTotalScore;
        }
        console.log("ser.totalScore");
        console.log(user.totalScore);
        this.updateUser(user);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_quiz__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicTwoPage = /** @class */ (function () {
    function TopicTwoPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
        //check if the score exists
        var score = this
            .navParams
            .get('topicOneQuizScore');
        this.quizScore = score
            ? score
            : 0;
        this.quizButtonText = score
            ? 'Try again'
            : 'Start the quiz';
    }
    TopicTwoPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicTwoPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicTwoPage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicTwoPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    TopicTwoPage.prototype.startQuiz = function (num) {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__quiz_quiz__["a" /* QuizPage */], { "num": num });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TopicTwoPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicTwoPage.prototype, "scroll", void 0);
    TopicTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-two',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/'<ion-header>\n<!-- \n    <ion-navbar>\n      <ion-title>Topic Two</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>    \n  <ion-content  #scroll scrollX="true" scrollY="false" style="height: 50px;">\n    <ion-segment  class="SwipedTabs-tabs">\n      <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n      [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'  [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" >\n        {{tab}}\n      </ion-segment-button>\n    </ion-segment>\n  \n    <!-- here is our dynamic line  "indicator"-->\n    <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" ></div>\n  </ion-content>\n  </ion-header>\n  \n  <ion-content >\n  \n    <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                (ionSlideWillChange)="updateIndicatorPosition()"\n                (ionSlideDidChange)="updateIndicatorPosition()"\n                (pan)="updateIndicatorPosition()"\n                [pager]="false"\n          >\n      <ion-slide>\n        <h1>Problem About Plastics</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Cause</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Effect</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Importance</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Quiz</h1>\n        <button ion-button (click)="startQuiz(2)">{{quizButtonText}}</button>\n      </ion-slide>\n    </ion-slides>\n  \n  \n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TopicTwoPage);
    return TopicTwoPage;
}());

//# sourceMappingURL=topic-two.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicThreePage = /** @class */ (function () {
    function TopicThreePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
    }
    TopicThreePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicThreePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicThreePage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicThreePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TopicThreePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicThreePage.prototype, "scroll", void 0);
    TopicThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-three',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Three</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem Species affected</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Quiz</h1>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TopicThreePage);
    return TopicThreePage;
}());

//# sourceMappingURL=topic-three.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlternativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AlternativesPage = /** @class */ (function () {
    function AlternativesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.drawerOptions = {
            handleHeight: 50,
            thresholdFromBottom: 200,
            thresholdFromTop: 200,
            bounceBack: true
        };
    }
    AlternativesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlternativesPage');
    };
    AlternativesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alternatives',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/alternatives/alternatives.html"*/'<ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n<!-- <ion-content parallax-header>\n  <div class="alternativeMenu">\n    <div>\n      <ion-icon name="basket"></ion-icon>\n    </div>\n    <div>\n      <ion-icon name="beer"></ion-icon>\n    </div>\n    <div>\n      <ion-icon name="restaurant"></ion-icon>\n    </div>\n    <div>\n      <ion-icon name="football"></ion-icon>\n    </div>\n  </div>\n\n  <div class="header-image">\n    <img src="../../assets//imgs/plastic-bag.jpg">\n  </div>\n\n  <content-drawer class="main-content" [options]="drawerOptions">\n    <div class="content">\n      <ion-slides>\n        <ion-slide>\n          <h1>Alternative 1</h1>\n          <img src="../../assets//imgs/canvas-bag.jpg">\n        </ion-slide>\n        <ion-slide>\n          <h1>Alternative 2</h1>\n          <img src="../../assets//imgs/canvas-bag.jpg">\n        </ion-slide>\n        <ion-slide>\n          <h1>Alternative 3</h1>\n          <img src="../../assets//imgs/canvas-bag.jpg">\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </content-drawer>\n\n</ion-content> -->\n\n\n\n<ion-content>\n  <div class="alternativeMenu">\n    <div>\n      <ion-icon name="basket"></ion-icon>\n    </div>\n    <div>\n      <ion-icon name="beer"></ion-icon>\n    </div>\n    <div>\n      <ion-icon name="restaurant"></ion-icon>\n    </div>\n    <div>\n      <ion-icon name="football"></ion-icon>\n    </div>\n  </div>\n\n  <ion-content text-center parallax-header>\n    <div class="img header-image">\n      <img src="../../assets//imgs/plastic-bag.jpg">\n    </div>\n      <div class="main-content">\n        <ion-slides>\n          <ion-slide>\n            <h1>Alternative 1</h1>\n            <div class="img">\n              <img src="../../assets//imgs/canvas-bag.jpg">\n            </div>\n          </ion-slide>\n          <ion-slide>\n            <h1>Alternative 2</h1>\n            <div class="img">\n              <img src="../../assets//imgs/canvas-bag.jpg">\n            </div>\n          </ion-slide>\n          <ion-slide>\n            <h1>Alternative 3</h1>\n            <div class="img">\n              <img src="../../assets//imgs/canvas-bag.jpg">\n            </div>\n          </ion-slide>\n        </ion-slides>\n        </div>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/alternatives/alternatives.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AlternativesPage);
    return AlternativesPage;
}());

//# sourceMappingURL=alternatives.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopicFivePage = /** @class */ (function () {
    function TopicFivePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Problem", "Cause", "Effect", "Importance", "Quiz"];
    }
    TopicFivePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicFivePage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 * index) + '%,0,0)';
        this
            .scroll
            .scrollTo(index * this.tabElementWidth_px, 0, 500);
        this
            .SwipedTabsSlider
            .slideTo(index, 500);
    };
    TopicFivePage.prototype.updateIndicatorPosition = function () {
        this
            .scroll
            .scrollTo(this.SwipedTabsSlider.getActiveIndex() * this.tabElementWidth_px, 0, 200);
        // this condition is to avoid passing to incorrect index
        if (this.SwipedTabsSlider.length() > this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicFivePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TopicFivePage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], TopicFivePage.prototype, "scroll", void 0);
    TopicFivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-five',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Five</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem Activities</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Quiz</h1>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], TopicFivePage);
    return TopicFivePage;
}());

//# sourceMappingURL=topic-five.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 259;

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizResultPage = /** @class */ (function () {
    function QuizResultPage(navCtrl, navParams, viewCtrl, authApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.authApi = authApi;
        this.quizScore = navParams.get('quizScore');
        this.totalScore = this.authApi.getCurrentUser().totalScore;
    }
    QuizResultPage.prototype.ionViewDidLoad = function () { };
    QuizResultPage.prototype.close = function () {
        this
            .viewCtrl
            .dismiss({ 'action': 'remove', 'quizScore': this.quizScore });
    };
    QuizResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-quiz-result',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/quiz/result.html"*/'<!--template for overlay-->\n\n<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Result\n        </ion-title>\n        <ion-buttons start>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Quiz score: {{quizScore}}</h1>\n    <h1>Total score: {{totalScore}}</h1>\n    <!-- <h1 *ngIf=\'badge\'>Badge: {{badge.title}}</h1>\n    <img *ngIf=\'badge\'[src]=\'badge.imgUrl\'> -->\n    <button ion-button (click)="close()">\n        <span ion-text>Confirm</span>\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/quiz/result.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuizResultPage);
    return QuizResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__User__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, db) {
        var _this = this;
        this.http = http;
        this.db = db;
        this.baseUrl = "https://plastic-ocean.firebaseio.com";
        this
            .getAllUsers()
            .then(function (data) {
            _this.allUsers = data;
        });
        console.log(this.currentUser);
    }
    AuthServiceProvider.prototype.ionViewDidLoad = function () { };
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_lodash__["first"](__WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.allUsers, function (item) {
                    return item.email === credentials.email;
                }));
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            var newUser = new __WEBPACK_IMPORTED_MODULE_5__User__["a" /* User */](credentials.name, credentials.email, credentials.password, "Novice", 0, [
                0, 0, 0, 0, 0
            ], [
                0, 0, 0, 0, 0
            ], [
                0, 0, 0, 0, 0
            ], [
                0, 0, 0, 0, 0
            ], [
                0, 0, 0, 0, 0
            ]);
            this
                .db
                .list('users')
                .push(newUser);
        }
        ;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthServiceProvider.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this
                .http
                .get(_this.baseUrl + "/users.json")
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    AuthServiceProvider.prototype.getCurrentUser = function () { return this.currentUser; };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_items__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePage = /** @class */ (function () {
    function GamePage(navCtrl, alertCtrl, nativeAudio) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.gameScore = 0;
        this.gameLife = 5;
        this.gamePlay = true;
    }
    GamePage_1 = GamePage;
    GamePage.prototype.playGame = function () {
        var self = this;
        self.gamePlay = !self.gamePlay;
        if (self.gamePlay) {
            self
                .app
                .ticker
                .start();
        }
        else {
            self
                .app
                .ticker
                .stop();
        }
    };
    GamePage.prototype.ionViewDidLoad = function () {
        this
            .nativeAudio
            .preloadSimple('correct', 'assets/audio/correct.m4a');
        this
            .nativeAudio
            .preloadSimple('wrong', 'assets/audio/wrong.m4a');
        this
            .nativeAudio
            .preloadSimple('new_badge', 'assets/audio/New-Badge.m4a');
        var self = this;
        var bottomPadding = 75;
        self.app = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Application"](window.innerWidth, window.innerHeight, { backgroundColor: 0x1099bb });
        ;
        this
            .content
            .nativeElement
            .appendChild(self.app.view);
        var container = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Container"]();
        self
            .app
            .stage
            .addChild(container);
        startAlert(self);
        function startAlert(self) {
            var alert = self
                .alertCtrl
                .create({
                title: 'Start the game!',
                subTitle: 'Description',
                buttons: [
                    {
                        text: 'OK',
                        handler: function (data) {
                            fall();
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            alert.present();
        }
        function fall() {
            var firstTime = true;
            if (self.gamePlay) {
                if (firstTime) {
                    __WEBPACK_IMPORTED_MODULE_4__game_items__["a" /* items */].forEach(function (elemData, index) {
                        createItem(elemData, index);
                    });
                    firstTime = false;
                }
                if (!firstTime) {
                    setTimeout(fall, 1500);
                }
            }
        }
        function createItem(elemData, index) {
            console.log("Create Item: " + elemData.url);
            var item = __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Sprite"]
                .fromImage(elemData.url);
            // center the sprite's anchor point
            item
                .anchor
                .set(0.5);
            item.x = getItemPosX();
            item.y = getItemPosY(index);
            function getItemPosX() {
                var padding = 60;
                var max = self.app.screen.width - padding;
                var min = padding;
                var posX = Math.random() * (max - min + 1) + min;
                if (posX > min && posX < self.app.screen.width / 2 - padding || posX > self.app.screen.width / 2 + padding / 2 && posX < max) {
                    return posX;
                }
            }
            function getItemPosY(i) {
                var max = 100;
                var min = 0;
                return -i * (Math.floor(Math.random() * (max - min + 1)) + min) * 20 - Math.floor(Math.random() * 200);
            }
            item.rotation = Math.random() * 360;
            item
                .scale
                .set(0.6);
            item.interactive = true;
            item.buttonMode = true;
            item
                .on('pointerdown', onDragStart)
                .on('pointerup', onDragEnd)
                .on('pointerupoutside', onDragEnd)
                .on('pointermove', onDragMove);
            container.addChild(item);
            self
                .app
                .ticker
                .add(function (delta) {
                if (item.y < self.app.screen.height - bottomPadding) {
                    item.y += elemData.speed;
                }
                else {
                    calScore(elemData, item);
                    if (self.gameLife == 0) {
                        self
                            .app
                            .ticker
                            .stop();
                        gameOverAlert(self);
                        self.gamePlay = false;
                    }
                    this.destroy();
                }
            });
        }
        function calScore(elemData, item) {
            item
                .on('pointerdown', onDragStop)
                .on('pointerup', onDragStop)
                .on('pointerupoutside', onDragStop)
                .on('pointermove', onDragStop);
            //recycable bin
            if (item.x >= self.app.screen.width / 2) {
                if (elemData.recycable) {
                    self
                        .nativeAudio
                        .play('correct');
                    self.gameScore++;
                    container.removeChild(item);
                }
                else if (!elemData.recycable) {
                    self
                        .nativeAudio
                        .play('wrong');
                    item.y = self.app.screen.height - bottomPadding;
                    bottomPadding += 3;
                    self.gameLife--;
                }
            }
            //unrecycable bin
            if (item.x < self.app.screen.width / 2) {
                if (elemData.recycable) {
                    self
                        .nativeAudio
                        .play('wrong');
                    item.y = self.app.screen.height - bottomPadding;
                    bottomPadding += 3;
                    self.gameLife--;
                }
                else if (!elemData.recycable) {
                    self
                        .nativeAudio
                        .play('correct');
                    self.gameScore++;
                    container.removeChild(item);
                }
            }
        }
        function gameOverAlert(self) {
            self
                .app
                .ticker
                .stop();
            var prompt = self
                .alertCtrl
                .create({
                title: 'Game Over.',
                message: "Your score: " + self.gameScore,
                buttons: [
                    {
                        text: 'Play again',
                        handler: function (data) {
                            self
                                .navCtrl
                                .push(GamePage_1);
                        }
                    }, {
                        text: 'Back to the topic',
                        handler: function (data) {
                            self
                                .navCtrl
                                .push(__WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */]);
                        }
                    }
                ],
                enableBackdropDismiss: false
            });
            prompt.present();
        }
        function onDragStart(event) {
            this.data = event.data;
            this.alpha = 0.5;
            this.dragging = true;
        }
        function onDragEnd() {
            this.alpha = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
        }
        function onDragMove() {
            if (this.x <= 0 || this.x >= self.app.screen.width || this.y >= self.app.screen.height) {
                this.dragging = false;
            }
            if (this.dragging) {
                var newPosition = this
                    .data
                    .getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
        function onDragStop() {
            this.dragging = false;
        }
        var drawSeaBottom = function () {
            var graphics = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Graphics"]();
            graphics.lineStyle(1);
            graphics.beginFill(0xFF0000, 0.7);
            graphics.drawRect(0, self.app.screen.height - 80, self.app.screen.width / 2, 80);
            graphics.endFill();
            graphics.lineStyle(1);
            graphics.beginFill(0x33FF00, 0.7);
            graphics.drawRect(self.app.screen.width / 2, self.app.screen.height - 80, self.app.screen.width / 2, 80);
            graphics.endFill();
            self
                .app
                .stage
                .addChild(graphics);
        };
        drawSeaBottom();
    };
    GamePage.prototype.ionViewWillLeave = function () {
        var self = this;
        self
            .app
            .ticker
            .stop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], GamePage.prototype, "content", void 0);
    GamePage = GamePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-game',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/game/game.html"*/'<!-- <ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header> -->\n\n<ion-content>\n  <div #content ion-fixed>\n    <ion-grid ion-fixed>\n      <ion-row>\n        <ion-col col-4>\n          <h4>Score: {{gameScore}}</h4>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button color="light" outline (click)="playGame()">\n            <ion-icon name="{{gamePlay?\'pause\':\'play\'}}"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <h4>Life: {{gameLife}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/game/game.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], GamePage);
    return GamePage;
    var GamePage_1;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, auth, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = {
            email: 'hoc2@tcd.ie',
            password: 'deniseho'
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.createAccount = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        if (this.registerCredentials.email == '' || this.registerCredentials.email == null || this.registerCredentials.email == undefined) {
            this.showError("Please enter your email.");
        }
        else if (this.registerCredentials.password == '' || this.registerCredentials.password == null || this.registerCredentials.password == undefined) {
            this.showError("Please enter your password.");
        }
        else {
            this
                .auth
                .login(this.registerCredentials)
                .subscribe(function (allowed) {
                if (allowed) {
                    _this
                        .navCtrl
                        .setRoot(__WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__["a" /* TopicMenu */]);
                }
                else {
                    _this.showError("Access Denied");
                }
            }, function (error) {
                _this.showError(error);
            });
        }
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this
            .loadingCtrl
            .create({ content: 'Please wait...', dismissOnPageChange: true });
        this
            .loading
            .present();
    };
    LoginPage.prototype.showError = function (text) {
        this
            .loading
            .dismiss();
        var alert = this
            .alertCtrl
            .create({ title: 'Fail', subTitle: text, buttons: ['OK'] });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-login',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n      LOGO\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <div>\n    <form (ngSubmit)="login()" #loginForm="ngForm">\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n          <button ion-button block clear type="button" (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/login/login.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = {
            name: 'Chia',
            email: 'hoc2@tcd.ie',
            password: 'deniseho'
        };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.registerCredentials.name == '' || this.registerCredentials.name == null || this.registerCredentials.name == undefined) {
            this.showPopup("Error", "Please enter your name.");
        }
        else if (this.registerCredentials.email == '' || this.registerCredentials.email == null || this.registerCredentials.email == undefined) {
            this.showPopup("Error", "Please enter your email.");
        }
        else if (this.registerCredentials.password == '' || this.registerCredentials.password == null || this.registerCredentials.password == undefined) {
            this.showPopup("Error", "Please enter your password.");
        }
        else {
            this
                .auth
                .register(this.registerCredentials)
                .subscribe(function (success) {
                if (success) {
                    _this.createSuccess = true;
                    _this.showPopup("Success", "Account created.");
                }
                else {
                    _this.showPopup("Error", "Problem creating account.");
                }
            });
        }
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-register',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/register/register.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountMenuPage = /** @class */ (function () {
    function AccountMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            {
                title: 'Profile',
                component: __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]
            }, {
                title: 'Achivement',
                component: __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__["a" /* AchievementPage */]
            }
            // , {
            //   title: 'Community Feed',
            //   component: AchievementPage
            // }
        ];
        this.userScore = navParams.get('score');
    }
    AccountMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountMenuPage');
    };
    AccountMenuPage.prototype.pageSelected = function (page) {
        this.navCtrl.push(page.component, { score: this.userScore });
    };
    AccountMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-account-menu',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/'<!--//drawer of achievement icon -->\n\n<ion-header>\n    <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let page of pages" (click)="pageSelected(page)">\n      {{ page.title }}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AccountMenuPage);
    return AccountMenuPage;
}());

//# sourceMappingURL=account-menu.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, auth) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        var currentUser = this
            .auth
            .getCurrentUser();
        this.username = currentUser['name'];
        this.email = currentUser['email'];
        this.badge = currentUser['badge'];
    }
    ProfilePage.prototype.ionViewDidLoad = function () { };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-profile',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>Name: {{username}}</p>\n  <p>Email: {{email}}</p>\n  <p>Position: {{badge}}</p>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AchievementPage = /** @class */ (function () {
    function AchievementPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.currentUser = this
            .auth
            .getCurrentUser();
    }
    AchievementPage.prototype.ionViewDidLoad = function () {
        console.log(this.currentUser.achievements);
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-achievement',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/'<!--\n  Generated template for the AchievementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Achievement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n<h4>{{currentUser.name}}</h4>\n<h4>Score: {{totalScore}}</h4>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(474);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_topic_menu_topic_menu__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_account_menu_account_menu__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_achievement_achievement__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_game_game__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_quiz_quiz__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_quiz_result__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_register__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_audio__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__firebase_credentials__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_fullpage__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ngx_fullpage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_service_user_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_alternatives_alternatives__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_content_drawer_content_drawer__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__directives_parallax_header_parallax_header__ = __webpack_require__(924);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_quiz_result__["a" /* QuizResultPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_alternatives_alternatives__["a" /* AlternativesPage */],
                __WEBPACK_IMPORTED_MODULE_33__components_content_drawer_content_drawer__["a" /* ContentDrawerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__directives_parallax_header_parallax_header__["a" /* ParallaxHeaderDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_29__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_30_ngx_fullpage__["MnFullpageModule"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_quiz_result__["a" /* QuizResultPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_alternatives_alternatives__["a" /* AlternativesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_31__providers_user_service_user_service__["a" /* UserProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_alternatives_alternatives__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fullpage_js__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_fullpage_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













 // Import jQuery
 // Import fullpage.js
var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        // make HelloIonicPage the root (or first) page
        // rootPage = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_alternatives_alternatives__["a" /* AlternativesPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__["a" /* TopicFivePage */] },
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        console.log('Initial App State');
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.gotoPage = function (page) {
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.gotoHomepage = function () {
        this.menu.close();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.menu.close();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>MENU</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item icon-only (click)="gotoHomepage()">\n          <ion-icon name="home"></ion-icon>\n        </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Pages</ion-list-header>\n      <button ion-item *ngFor="let p of pages" (click)="gotoPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>Settings</ion-list-header>\n      <button ion-item (click)="logout()">\n        <ion-icon name="log-out"> Logout</ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/deniseho/plastic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topic1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return topic2; });
var topic1 = {
    collectionName: "Topic1",
    questionList: [
        {
            id: "tp1_q1",
            question: "topic1 question 01",
            options: [
                {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp1_q2",
            question: "topic1 question 02",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp1_q3",
            question: "topic1 question 03",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp1_q4",
            question: "topic1 question 04",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp1_q5",
            question: "topic1 question 05",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }
            ]
        }
    ]
};
var topic2 = {
    collectionName: "Topic2",
    questionList: [
        {
            id: "tp2_q1",
            question: "topic2 question 01",
            options: [
                {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp2_q2",
            question: "topic2 question 02",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp2_q3",
            question: "topic2 question 03",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp2_q4",
            question: "topic2 question 04",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            id: "tp2_q5",
            question: "topic2 question 05",
            options: [
                {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "wrong",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "correct",
                    points: 5,
                    isAnswer: true
                }
            ]
        }
    ]
};
//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password, badge, totalScore, topic1, topic2, topic3, topic4, topic5) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.badge = badge;
        this.totalScore = totalScore;
        this.topic1 = topic1;
        this.topic2 = topic2;
        this.topic3 = topic3;
        this.topic4 = topic4;
        this.topic5 = topic5;
    }
    return User;
}());

// export class Achievement {
//     email : string;
//     topic1 : any;
//     topic2 : any;
//     topic3 : any;
//     topic4 : any;
//     topic5 : any;
//     constructor(email: string) {
//         this.email = email,
//         this.topic1 = [
//             {
//                 id: "tp1_q1",
//                 score: 0
//             }, {
//                 id: "tp1_q2",
//                 score: 0
//             }, {
//                 id: "tp1_q3",
//                 score: 0
//             }, {
//                 id: "tp1_q4",
//                 score: 0
//             }, {
//                 id: "tp1_q5",
//                 score: 0
//             }
//         ];
//         this.topic2 = [
//             {
//                 id: "tp2_q1",
//                 score: 0
//             }, {
//                 id: "tp2_q2",
//                 score: 0
//             }, {
//                 id: "tp2_q3",
//                 score: 0
//             }, {
//                 id: "tp2_q4",
//                 score: 0
//             }, {
//                 id: "tp2_q5",
//                 score: 0
//             }
//         ];
//         this.topic3 = [
//             {
//                 id: "tp3_q1",
//                 score: 0
//             }, {
//                 id: "tp3_q2",
//                 score: 0
//             }, {
//                 id: "tp3_q3",
//                 score: 0
//             }, {
//                 id: "tp3_q4",
//                 score: 0
//             }, {
//                 id: "tp3_q5",
//                 score: 0
//             }
//         ];
//         this.topic4 = [
//             {
//                 id: "tp4_game",
//                 score: 0
//             }
//         ];
//         this.topic5 = [
//             {
//                 id: "tp5_q1",
//                 score: 0
//             }, {
//                 id: "tp5_q2",
//                 score: 0
//             }, {
//                 id: "tp5_q3",
//                 score: 0
//             }, {
//                 id: "tp5_q4",
//                 score: 0
//             }, {
//                 id: "tp5_q5",
//                 score: 0
//             }
//         ]
//     }
// }
//# sourceMappingURL=User.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return items; });
var items = [
    {
        url: 'assets/imgs/cup.png',
        name: "Plastic Cup",
        type: "tag1",
        recycable: true,
        speed: 2.5,
    }, {
        url: 'assets/imgs/bottle.png',
        name: "Plastic Cup",
        type: "tag2",
        recycable: true,
        speed: 3,
    }, {
        url: 'assets/imgs/microplastic.png',
        name: "Microplastic",
        type: "tag3",
        recycable: true,
        speed: 1.8,
    },
    ,
    {
        url: 'assets/imgs/fork_knife.png',
        name: 'Fork and knife',
        type: "tag4",
        recycable: false,
        speed: 3.5,
    }
];

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CustomNavBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomNavBarPage = /** @class */ (function () {
    function CustomNavBarPage(event, navCtrl, menuCtrl, navParams) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.totalScore = 0;
        // this.event.subscribe('topicOneQuizScore', (score)=>{
        //   this.calculateScore(score);
        // })
    }
    // calculateScore(score: number){
    //   this.totalScore += score;
    //   console.log(this.totalScore);
    // }
    CustomNavBarPage.prototype.ionViewDidLoad = function () {
    };
    CustomNavBarPage.prototype.gotoHomepage = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    CustomNavBarPage.prototype.gotoAccountMenu = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__["a" /* AccountMenuPage */]);
    };
    CustomNavBarPage.prototype.openMenu = function () {
        this
            .menuCtrl
            .open();
    };
    CustomNavBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'custom-nav-bar',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/'<ion-toolbar color="lightest">\n  <ion-row>\n    <ion-col col-3>\n      <ion-buttons start>\n        <button ion-button menuToggle (click)="openMenu()">\n          <ion-icon name="menu" color="blue-medium"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-6 class="logo_properties">\n      <div>\n        <img src="assets/imgs/logo_toolbar.png" alt="ZeroPlastic logo" (click)="gotoHomepage()">\n      </div>\n      <!--\n      <ion-buttons>\n        <button ion-button icon-only color="royal" (click)="gotoHomepage()">\n          <ion-title>OUR LOGO</ion-title>\n        </button>\n      </ion-buttons>\n      -->\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="gotoAccountMenu()">\n          <ion-icon name="trophy" color="blue-medium"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDIYnzJ93JmFzcbhMfWKbWsmmpKYnsHhuU",
    authDomain: "plastic-ocean.firebaseapp.com",
    databaseURL: "https://plastic-ocean.firebaseio.com",
    projectId: "plastic-ocean",
    storageBucket: "plastic-ocean.appspot.com",
    messagingSenderId: "362589726291"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentDrawerComponent = /** @class */ (function () {
    function ContentDrawerComponent(element, renderer, domCtrl, platform) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.handleHeight = 50;
        this.bounceBack = true;
        this.thresholdTop = 200;
        this.thresholdBottom = 200;
    }
    ContentDrawerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.options.handleHeight) {
            this.handleHeight = this.options.handleHeight;
        }
        if (this.options.bounceBack) {
            this.bounceBack = this.options.bounceBack;
        }
        if (this.options.thresholdFromBottom) {
            this.thresholdBottom = this.options.thresholdFromBottom;
        }
        if (this.options.thresholdFromTop) {
            this.thresholdTop = this.options.thresholdFromTop;
        }
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - (this.handleHeight + 90) + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'padding-top', this.handleHeight + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
    };
    ContentDrawerComponent.prototype.handlePan = function (ev) {
        var _this = this;
        var newTop = ev.center.y;
        var bounceToBottom = false;
        var bounceToTop = false;
        if (this.bounceBack && ev.isFinal) {
            var topDiff = newTop - this.thresholdTop;
            var bottomDiff = (this.platform.height() - this.thresholdBottom) - newTop;
            topDiff >= bottomDiff ? bounceToBottom = true : bounceToTop = true;
        }
        if ((newTop < this.thresholdTop && ev.additionalEvent === "panup") || bounceToTop) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', '0px');
            });
        }
        else if (((this.platform.height() - newTop) < this.thresholdBottom && ev.additionalEvent === "pandown") || bounceToBottom) {
            this.domCtrl.write(function () {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', _this.platform.height() - (_this.handleHeight + 90) + 'px');
            });
        }
        else {
            this.renderer.setElementStyle(this.element.nativeElement, 'transition', 'none');
            if (newTop > 0 && newTop < (this.platform.height() - this.handleHeight)) {
                if (ev.additionalEvent === "panup" || ev.additionalEvent === "pandown") {
                    this.domCtrl.write(function () {
                        _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
                    });
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
        __metadata("design:type", Object)
    ], ContentDrawerComponent.prototype, "options", void 0);
    ContentDrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'content-drawer',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/content-drawer/content-drawer.html"*/'<ion-content padding>\n    <ng-content></ng-content>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/content-drawer/content-drawer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* DomController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ContentDrawerComponent);
    return ContentDrawerComponent;
}());

//# sourceMappingURL=content-drawer.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParallaxHeaderDirective = /** @class */ (function () {
    function ParallaxHeaderDirective(element, renderer, platform) {
        this.element = element;
        this.renderer = renderer;
        this.platform = platform;
    }
    ParallaxHeaderDirective.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeaderDirective.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeaderDirective.prototype.updateParallaxHeader = function (ev) {
        console.log("ev.scrollTop: " + ev.scrollTop);
        console.log("this.platform.height: " + this.platform.height());
        console.log("this.headerHeight: " + this.headerHeight);
        console.log("this.header: " + this.header);
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    };
    ParallaxHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[parallax-header]',
            host: {
                '(ionScroll)': 'onContentScroll($event)',
                // '(on-swipe-up)': 'onContentScroll($event)',
                '(window:resize)': 'onWindowResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _c || Object])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
    var _a, _b, _c;
}());

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TopicMenu = /** @class */ (function () {
    function TopicMenu(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */] },
        ];
    }
    TopicMenu.prototype.gotoPage = function (p) {
        this
            .navCtrl
            .push(p);
    };
    TopicMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/'<!--HOME-->\n\n<ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="menuList" *ngFor="let p of pages" (click)="gotoPage(p.component)">\n    <div class="card-title">{{p.title}}</div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TopicMenu);
    return TopicMenu;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ })

},[469]);
//# sourceMappingURL=main.js.map