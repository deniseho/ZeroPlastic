webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alternatives_alternatives__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_tags_info__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tags_modal_tags_modal__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_topic_quiz_topic_quiz__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_topic4_questions__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_event_modal_event_modal__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_toast_service_toast_service__ = __webpack_require__(200);
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
    function TopicFourPage(navCtrl, navParams, modalCtrl, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Take action", "Volunteer", "Recycle", "Alternatives", "Quiz"];
        this.tagsList = __WEBPACK_IMPORTED_MODULE_4__shared_tags_info__["a" /* tags */];
        this.events = [
            {
                date: {
                    day: "17",
                    month: "Sep",
                    year: "2018"
                },
                title: "Beach clean up",
                location: "Donabate Village, Balcarrick, Donabate, Co. Dublin",
                time: "9:30am",
                contact: "(01) 896 2320"
            }, {
                date: {
                    day: "22",
                    month: "Sep",
                    year: "2018"
                },
                title: "Recycling workshop",
                location: "Donabate Village, Balcarrick, Donabate, Co. Dublin",
                time: "6:00pm",
                contact: "(01) 896 2320"
            }
        ];
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
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__game_game__["a" /* GamePage */]);
    };
    TopicFourPage.prototype.gotoAlternatives = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__alternatives_alternatives__["a" /* AlternativesPage */]);
    };
    TopicFourPage.prototype.onTap = function ($event, value) {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_5__components_tags_modal_tags_modal__["a" /* TagsModalComponent */], {
            "tagTitle": this.tagsList[value]["title"],
            "tagFoundIn": this.tagsList[value]["foundIn"],
            "tagPlastic": this.tagsList[value]["plastic"],
            "tagRecyclabilityTitle": this.tagsList[value]["recyclabilityTitle"],
            "tagRecyclable": this.tagsList[value]["recyclable"],
            "tagIcon": this.tagsList[value]["icon"],
            "tagTypePlasticTitle": this.tagsList[value]["typePlasticTitle"],
            "tagRecyclableDescription": this.tagsList[value]["recyclableDescription"]
        });
        modal.present();
    };
    TopicFourPage.prototype.startQuiz = function () {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_6__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */], { "collection": __WEBPACK_IMPORTED_MODULE_7__shared_topic4_questions__["a" /* topic4 */] });
        modal.present();
    };
    TopicFourPage.prototype.createEvent = function () {
        var _this = this;
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_8__components_event_modal_event_modal__["a" /* EventModalComponent */]);
        modal.onDidDismiss(function (data) {
            if (data.action != 'cancel') {
                _this.events.push(data.event);
                _this.toast.showToast("A new event is created!", "");
            }
        });
        modal.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-four',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/'<ion-header>\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n    <!--INTRO-->\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <div class="container-intro sea-gradient-wrapper">\n                <div class="vertical-center">\n                    <h1 class="slide-title-main">Take action</h1>\n                    <div class="line-separator-short"></div>\n                    <p style="padding-top: 10px">\n                        <b>Swipe left</b> and discover what you can do to help avoid plastic pollution. Be a hero environmentalist\n                        and save our ocean! </p>\n                    <img class="icon-intro-property" src="assets/imgs/swipe-left.svg">\n                    <!--<ion-icon class="arrow-right-style" name="ios-arrow-dropright-circle"></ion-icon>-->\n                </div>\n                <img class="sea-gradient" src="assets/imgs/bg_ocean.png">\n            </div>\n        </ion-slide>\n\n        <!--VOLUNTEER-->\n        <ion-slide>\n            <!--Icons for scrolling\n            <ion-icon class="arrow-up-style" name="ios-arrow-dropup-circle-outline"></ion-icon>\n            <ion-icon class="arrow-down-style" name="ios-arrow-dropdown-circle-outline"></ion-icon>-->\n\n            <div>\n                <!--tidy towns-->\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                        <h1 class="slide-title-main">Take action</h1>\n                        <h1 class="slide-title2-main" style="margin: 0px">Volunteer</h1>\n                        <div class="line-separator-short" style="margin-top: 20px; margin-bottom: 20px"></div>\n                        <a href="http://www.tidytowns.ie/get-involved/find-your-local-committee/" target="_blank">\n                            <img src="assets/imgs/tidytowns.jpg" style="width: 150px">\n                        </a>\n                        <h4 class="slide-subtitle" style="margin-bottom: -15px; margin-top: 10px">Option 1</h4>\n                        <h4 class="slide-subtitle" style="font-weight: normal; padding-top: 0px">Join a Volunteering group\n                        </h4>\n                        <p>You can search for a group in your own community, like TidyTowns, and join them.\n                            <a href="http://www.tidytowns.ie/get-involved/find-your-local-committee/"\n                                target="_blank">\n                                Visit TidyTowns\n                                <ion-icon name="ios-exit-outline"></ion-icon>\n                            </a> to find a group near you.\n                        </p>\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n                <div class="sea-bg-gradient">\n                    <!--Create your own group-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_volunteer.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle" style="color: white; margin-bottom: -15px">Option 2</h4>\n                            <h4 class="slide-subtitle" style="color: white; font-weight: normal">Start a volunteering group\n                            </h4>\n                            <p style="color: white">With everything you have learned using the ZeroPlastic app teach your family and community how\n                                important it is to avoid plastic pollution.</p>\n                            <p style="color: white">If you can, start a ZeroPlastic group and organize recycling events or beach clean-ups in your\n                                community. Start creating events from the button below!</p>\n                        </div>\n                    </div>\n                </div>\n\n                <!--EVENTS-->\n                <div class="events-container" padding="">\n                    <button ion-button full color="primary" item-end icon-start (click)="createEvent()">\n                        <ion-icon name="add-circle"></ion-icon>\n                        Create event\n                    </button>\n\n                    <ion-list-header no-padding="" no-lines="" class="events-title">Events</ion-list-header>\n                    <ion-card *ngFor="let event of events">\n                        <ion-row>\n                            <ion-col align-self-center class="date-wrapper-1" col-3>\n                                <div class="date-bg">\n                                    <h3 class="day">{{event.date.day}}</h3>\n                                    <h4 class="month">{{event.date.month}}</h4>\n                                    <h5 class="year">{{event.date.year}}</h5>\n                                </div>\n                            </ion-col>\n                            <ion-col col-9 class="info-wrapper">\n                                <ion-row class="card-title" style="font-size: 14px">{{event.title}}</ion-row>\n                                <ion-row>\n                                    <ion-col col-12 class="location" item-end icon-start>\n                                        <ion-icon name="pin" small></ion-icon>\n                                        {{event.location}}\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class="card-contact-time">\n                                    <ion-col class="time" col-5 item-end icon-start>\n                                        <ion-icon name="time" small></ion-icon>\n                                        {{event.time}}\n                                    </ion-col>\n                                    <ion-col class="contact" col-7 item-end icon-start>\n                                        <ion-icon name="call" small></ion-icon>\n                                        {{event.contact}}\n                                    </ion-col>\n                                </ion-row>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card>\n                </div>\n            </div>\n        </ion-slide>\n\n        <!--RECYCLE-->\n        <ion-slide>\n            <div>\n                <div class="sea-gradient-wrapper">\n                    <div>\n                        <h1 class="slide-title-main">Take action</h1>\n                        <h1 class="slide-title2-main">Recycle</h1>\n                        <div class="line-separator-short"></div>\n                        <h4 class="slide-subtitle">Resin Tags</h4>\n                        <p style="margin-top: 20px">Before you dispose of your plastic items, check the number on the bottom- it tells you the type of\n                            plastic, letting you know its recyclability.</p>\n                    </div>\n                    <img class="sea-gradient" style="margin-bottom: -16px" src="assets/imgs/sea_gradient.png">\n                </div>\n\n                <div class="sea-bg-gradient">\n                    <ion-grid padding="">\n                        <!--<h4 class="slide-subtitle">Resin tags information</h4>-->\n                        <p> Select a tag for more information</p>\n                        <ion-row>\n                            <ion-col col-6>\n                                <ion-card padding="" on-tap="onTap($event, \'Tag1\')">\n                                    <img class="tags-property" src="assets/imgs/tag_1.png">\n                                </ion-card>\n                            </ion-col>\n                            <ion-col col-6>\n                                <ion-card padding="" on-tap="onTap($event, \'Tag2\')">\n                                    <img class="tags-property" src="assets/imgs/tag_2.png">\n                                </ion-card>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-6>\n                                <ion-card padding="" on-tap="onTap($event, \'Tag3\')">\n                                    <img class="tags-property" src="assets/imgs/tag_3.png">\n                                </ion-card>\n                            </ion-col>\n                            <ion-col col-6>\n                                <ion-card padding="" on-tap="onTap($event, \'Tag4\')">\n                                    <img class="tags-property" src="assets/imgs/tag_4.png">\n                                </ion-card>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-6>\n                                <ion-card padding="" on-tap="onTap($event, \'Tag5\')">\n                                    <img class="tags-property" src="assets/imgs/tag_5.png">\n                                </ion-card>\n                            </ion-col>\n                            <ion-col col-6>\n                                <ion-card padding="" on-tap="onTap($event, \'Tag6\')">\n                                    <img class="tags-property" src="assets/imgs/tag_6.png">\n                                </ion-card>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n                <!--GAME-->\n                <div class="game-container">\n                    <div class="container-btn-content-game">\n                        <div class="game-content-wrapper">\n                            <h4 class="slide-subtitle text-shadow" style="margin-top: 0px">Now test your knowledge with this game!</h4>\n                            <p class="text-shadow">Place the plastics in the correct trash bin and earn points</p>\n                        </div>\n                        <button ion-button (click)="gotoGamePage()" color="secondary" icon-start item-end>\n                            <ion-icon name="md-game-controller-b"></ion-icon>\n                            Start playing\n                        </button>\n                    </div>\n                </div>\n\n            </div>\n        </ion-slide>\n\n        <!--ALTERNATIVES-->\n        <ion-slide>\n            <page-alternatives></page-alternatives>\n        </ion-slide>\n\n        <!--QUIZ-->\n        <ion-slide>\n            <div class="container-slides-content">\n                <div class="vertical-center">\n                    <img style="width: 120px" src="assets/imgs/icn_temp.png">\n                    <h1 class="slide-title-main">About plastic</h1>\n                    <h1 class="slide-title2-main">Quiz</h1>\n                    <div class="line-separator-short"></div>\n                    <h4 class="slide-subtitle">Test your knowledge with this quiz</h4>\n                    <p>Earn points and become a senior ecologist!</p>\n                    <button ion-button (click)="startQuiz()">Start the quiz</button>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], TopicFourPage);
    return TopicFourPage;
}());

//# sourceMappingURL=topic-four.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_topic_quiz_topic_quiz__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_topic1_questions__ = __webpack_require__(710);
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
    function TopicOnePage(event, navCtrl, navParams, modalCtrl, renderer, viewCtrl, auth) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.SwipedTabsIndicator = null;
        this.tabElementWidth_px = 100;
        this.tabs = [];
        this.tabs = ["Issue", "Cause", "Effect", "Solution", "Quiz"];
    }
    TopicOnePage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    TopicOnePage.prototype.ionViewDidLoad = function () {
    };
    TopicOnePage.prototype.selectTab = function (index) {
        // this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (100 *
        // index) + '%,0,0)';
        this
            .renderer
            .setElementStyle(this.SwipedTabsIndicator, 'webkitTransform', 'translate3d(' + (100 * index) + '%,0,0)');
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
            this
                .renderer
                .setElementStyle(this.SwipedTabsIndicator, 'webkitTransform', 'translate3d(' + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)');
            // this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
            // (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    TopicOnePage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator)
            this.renderer.setElementStyle(this.SwipedTabsIndicator, 'webkitTransform', 'translate3d(' + (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)');
        // this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
        // (($event.progress * (this.SwipedTabsSlider.length() - 1)) * 100) + '%,0,0)';
    };
    TopicOnePage.prototype.startQuiz = function () {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_3__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */], { "collection": __WEBPACK_IMPORTED_MODULE_4__shared_topic1_questions__["a" /* topic1 */] });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-one',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/'<ion-header>\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n    <!--PROBLEM-->\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <!--Icons for scrolling-->\n            <!--<ion-icon class="arrow-up-style" name="ios-arrow-up"></ion-icon>-->\n            <ion-icon class="arrow-down-style" name="ios-arrow-down"></ion-icon>\n\n            <div>\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                    <!--About plastic problem1-->\n                        <h1 class="slide-title-main">About plastic</h1>\n                        <h1 class="slide-title2-main">Issue</h1>\n                        <div class="line-separator-short"></div>\n                        <h4 class="slide-subtitle-secondary">322</h4>\n                        <h3 class="slide-subtitle2-secondary">millions</h3>\n                        <img class="infographics-image" src="assets/imgs/icn_tons.png">\n                        <p>of plastic were produced in 2015, the same weight as 900 Empire state buildings.</p>\n                        <img src="../../assets/imgs/swipe-right.svg" class="swipe-icon">\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n\n                <div class="sea-bg-gradient">\n                    <div class="container-slides-content">\n                        <!--About plastic problem2-->\n                        <div class="vertical-center">\n                            <h4 class="slide-subtitle-secondary">8</h4>\n                            <h3 class="slide-subtitle2-secondary">millions</h3>\n                            <img class="infographics-image" src="assets/imgs/icn_tons.png">\n                            <p>8 millions of  this plastic enters our oceans each year, equivalent to emptying a garbage truck of plastic\n                                into an ocean every minute. This figure is estimated to rise to 60 tons per minute by 2050.</p>\n                            <img class="icon_secondary_property" src="assets/imgs/icn_garbage_truck_3_small.png">\n                        </div>\n                    </div>\n\n                    <div class="container-slides-content">\n                        <!--About plastic problem3-->\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_degrading_bottle.png">\n                            <div class="line-separator-long"></div>\n                            <p class="subtitle-small">Plastic</p>\n                            <h4 class="slide-subtitle-line-before">never fully biodegrade</h4>\n                            <p>Plastics photodegrade, which means that they break down\n                                into smaller, and smaller pieces to the microscopic level. Any toxic additives contained within the\n                                plastics are released into the ocean.</p>\n                        </div>\n                    </div>\n\n                    <div class="container-slides-content">\n                        <!--About plastic problem4-->\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_ocean_percentage.png">\n                            <div class="line-separator-long"></div>\n                            <p class="p_line_before" style="color: white">97% of the Earth’s water supply is contained in the ocean. Plastic waste is greatly endangering the world’s\n                                water supply. Plastics dumped in landfills form dangerous chemicals, and when these chemicals seep\n                                underground, they degrade the water quality.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </ion-slide>\n\n        <!--CAUSE-->\n        <ion-slide>\n            <!--About plastic cause1-->\n            <div>\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                        <h1 class="slide-title-main">About plastic</h1>\n                        <h1 class="slide-title2-main">Cause</h1>\n                        <div class="line-separator-short"></div>\n                        <img class="icon_property_coins" src="assets/imgs/icn_coins.png">\n                        <h4 class="slide-subtitle">Plastics are cheap and easy to manufacture</h4>\n                        <p>Plastics have been used to make countless utilities, including plastic\n                            water bottles, straws, food containers, lids, and packaging wrappers.</p>\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n\n                <div class="sea-bg-gradient">\n                    <!--About plastic cause2-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_trash_full.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Plastics are easily and haphazardly discarded</h4>\n                            <p>The use of plastic items such as bags, wrappers, bottles, straws and food containers is\n                                typically very short. Whenever plastics are thrown away, they continue to persist within\n                                the environment.</p>\n                        </div>\n                    </div>\n\n                    <!--About plastic cause3-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_fishing_net.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Plastic decomposes slowly</h4>\n                            <p>Plastics are slow to decompose due to their strong chemical bonds that make plastic items\n                                durable. The EPA has stated that “every bit of plastic ever made still exists”. A plastic\n                                bottle can take up to 400 years to decompose, while plastic fishing lines can take more than 600 years.</p>\n                        </div>\n                    </div>\n\n                    <!--About plastic cause4-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_fishing_ship.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle" style="color: white">The shipping and fishing industry</h4>\n                            <p style="color: white">are major contributors of plastic pollution. Plastic waste from ships, sea accidents, and nets\n                                used for fishing emit toxins into the water which severely affects marine creatures.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <!--EFFECT-->\n        <ion-slide>\n            <div>\n                <!--About plastic effect1-->\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                        <h1 class="slide-title-main">About plastic</h1>\n                        <h1 class="slide-title2-main">Effect</h1>\n                        <div class="line-separator-short"></div>\n                        <h4 class="slide-subtitle">Threatens the life of numerous sea creatures</h4>\n                        <p>These marine creatures ingest plastic mainly by mistaking it as food, and can also be endangered\n                            by plastics through becoming entangled in plastic products such as fishing nets, and can holders.\n                            44% of all seabird species, along with sea turtles, and cetaceans have been documented to have\n                            plastic debris in or around their bodies.</p>\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n                <div class="sea-bg-gradient">\n                    <!--About plastic effect2-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_human.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Affects humans</h4>\n                            <p>Plastic pollution in our oceans severely affects humans in numerous ways. Studies have shown\n                                that toxins in plastics can cause several health issues such as cancer, and immune system\n                                problems. Ingestion of plastic by fish and other marine creatures finds its way into peoples’\n                                bodies when they consume marine food.</p>\n                        </div>\n                    </div>\n\n                    <!--About plastic effect3-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_ecosystem.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Threat to our ecosystem</h4>\n                            <p>Plastic pollution poses a serious threat to our ecosystems. Plastics in our oceans can lead\n                                to the invasion of non-indigenous species, and organisms in marine colonies. </p>\n                        </div>\n                    </div>\n\n                    <!--About plastic effect4-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_garbage_patch.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle" style="color: white">Garbage patches</h4>\n                            <p style="color: white">Plastic pollution has resulted in the creation of several floating garbage patches in our\n                                oceans called gyres. The Great Pacific Garbage patch located in the North Pacific Ocean off\n                                the coast of California is reported to be the largest ocean garbage patch in the world.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <!--SOLUTION-->\n        <ion-slide>\n            <!--About plastic solution1-->\n            <div class="container-slides-content sea-gradient-wrapper">\n                <div class="vertical-center">\n                    <h1 class="slide-title-main">About plastic</h1>\n                    <h1 class="slide-title2-main">Solution</h1>\n                    <div class="line-separator-short"></div>\n                    <h4 class="slide-subtitle">Reduce use of single-use plastics</h4>\n                    <p>As 60-90% of marine litter is plastic-based refusing  any single-use plastics, reducing our\n                        dependence on plastics, and  carrying  reusable versions of these products will greatly help to\n                        reduce the amount of new plastics in circulation.</p>\n                </div>\n                <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n            </div>\n\n            <div class="sea-bg-gradient">\n                <!--About plastic solution2-->\n                <div class="container-slides-content">\n                    <div class="vertical-center">\n                        <img class="icon_property" src="assets/imgs/icn_recycle.png">\n                        <div class="line-separator-long"></div>\n                        <h4 class="slide-subtitle">Recycle</h4>\n                        <p>Recycling helps keep single-use plastics out of the ocean, and reduces the amount of new plastics\n                            in circulation.</p>\n                    </div>\n                </div>\n\n                <!--About plastic solution3-->\n                <div class="container-slides-content">\n                    <div class="vertical-center">\n                        <img class="icon_property" src="assets/imgs/icn_no_microbread.png">\n                        <div class="line-separator-long"></div>\n                        <h4 class="slide-subtitle">Avoid using products containing microbeads</h4>\n                        <p>Microbeads have become a growing source of plastic pollution in recent years. You can avoid\n                            products containing microbeads by looking for polythelene and polypropylene on the ingredients\n                            label of cosmetic products, and toiletries such as face wash, and shower gel. </p>\n                    </div>\n                </div>\n\n                <!--About plastic solution4-->\n                <div class="container-slides-content">\n                    <div class="vertical-center">\n                        <img class="icon_property" src="assets/imgs/icn_non-profit.png">\n                        <div class="line-separator-long"></div>\n                        <h4 class="slide-subtitle" style="color: white">Support organisations adressing plastic pollution</h4>\n                        <p style="color: white">Non-profit organisations dealing with the problem of ocean plastic include the Oceanic Society\n                            Plastic Soup Foundation, and Plastic Pollution Coalition.</p>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="container-slides-content">\n                <div class="vertical-center">\n                    <h4 class="slide-subtitle">Test your knowledge with this quiz</h4>\n                    <p>Earn points and become a senior ecologist!</p>\n                    <p></p>\n                    <button ion-button (click)="startQuiz()">Start the quiz</button>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TopicOnePage);
    return TopicOnePage;
}());

//# sourceMappingURL=topic-one.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_user_model__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(db, auth) {
        this.db = db;
        this.auth = auth;
        this.loginUser = new __WEBPACK_IMPORTED_MODULE_3__shared_user_model__["a" /* User */]();
        this.$userKey = '-LK1lKdGyqIssZruGmac';
        this.totalScore = 0;
    }
    UserServiceProvider.prototype.ionViewDidEnter = function () { };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_topic_quiz_topic_quiz__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_topic2_questions__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_country_info__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_map_modal_map_modal__ = __webpack_require__(329);
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
        this.title = __WEBPACK_IMPORTED_MODULE_4__shared_country_info__["a" /* country */].title;
        this.countryList = __WEBPACK_IMPORTED_MODULE_4__shared_country_info__["a" /* country */].countryList;
        this.drawerOptions = {
            handleHeight: 50,
            thresholdFromBottom: 100,
            thresholdFromTop: 100,
            bounceBack: false
        };
    }
    TopicTwoPage.prototype.ionViewDidEnter = function () {
    };
    TopicTwoPage.prototype.onTap = function ($event, value) {
        // let x = $event.srcEvent.offsetX;
        // let y = $event.srcEvent.offsetY;
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_5__components_map_modal_map_modal__["a" /* MapInfoComponent */], { "country": this.countryList[value] });
        modal.present();
    };
    TopicTwoPage.prototype.startQuiz = function () {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */], { "collection": __WEBPACK_IMPORTED_MODULE_3__shared_topic2_questions__["a" /* topic2 */] });
        modal.present();
    };
    TopicTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-two',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/'<ion-header>\n    <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n<ion-content scrollX="true" scrollY="false">\n    <h3 class="title" [innerHTML]="title"></h3>\n    <!--This divs make each country tapable and are linked to an event in ?-->\n    <div class="inner">\n        <div class="country China" on-tap="onTap($event, \'China\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 1</p>\n            </div>\n        </div>\n        <div class="country China" on-tap="onTap($event, \'China\')"></div>\n        <div class="country China" on-tap="onTap($event, \'China\')"></div>\n        <div class="country China" on-tap="onTap($event, \'China\')"></div>\n\n        <div class="country Indonesia" on-tap="onTap($event, \'Indonesia\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 2</p>\n            </div>\n        </div>\n\n        <div class="country Philippines" on-tap="onTap($event, \'Philippines\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 3</p>\n            </div>\n        </div>\n\n        <div class="country Vietnam" on-tap="onTap($event, \'Vietnam\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 4</p>\n            </div>\n        </div>\n\n        <div class="country SriLanka" on-tap="onTap($event, \'Sri Lanka\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 5</p>\n            </div>\n        </div>\n\n        <div class="country Egypt" on-tap="onTap($event, \'Egypt\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 6</p>\n            </div>\n        </div>\n\n        <div class="country Thailand" on-tap="onTap($event, \'Thailand\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 7</p>\n            </div>\n        </div>\n\n        <div class="country Malaysia" on-tap="onTap($event, \'Malaysia\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 8</p>\n            </div>\n        </div>\n\n        <div class="country Nigeria" on-tap="onTap($event, \'Nigeria\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 9</p>\n            </div>\n        </div>\n\n        <div class="country Bangladesh" on-tap="onTap($event, \'Bangladesh\')">\n            <div class="circle-btn">\n                <p class="btn-text"># 10</p>\n            </div>\n        </div>\n        <img class="icon_property" src="assets/imgs/swipe-right.svg">\n        <div class="worldMap">\n            <img src="assets/imgs/world_map.png">\n        </div>\n    </div>\n    <div></div>\n</ion-content>\n\n<!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n	 viewBox="0 0 1190.6 841.9" style="enable-background:new 0 0 1190.6 841.9;" xml:space="preserve">\n<style type="text/css">\n	.st0{font-family:\'MyriadPro-Regular\';}\n	.st1{font-size:18px;}\n</style>\n<image style="overflow:visible;" width="816" height="1056" xlink:href="assets/imgs/C0B8A0DE7654F74E.png"  transform="matrix(0.5 0 0 0.5 391 156.89)">\n</image>\n<image style="overflow:visible;" width="1080" height="607" xlink:href="assets/imgs/C0B8A0DE7654F752.png"  transform="matrix(1 0 0 1 324 27.89)">\n</image>\n<image style="overflow:visible;" width="1080" height="607" xlink:href="assets/imgs/C0B8A0DE7654F755.png"  transform="matrix(1 0 0 1 354 4.89)">\n</image>\n<text transform="matrix(1 0 0 1 645 315.89)" class="st0 st1">6</text>\n<text transform="matrix(1 0 0 1 495 439.89)" class="st0 st1">9</text>\n</svg> -->\n\n<content-drawer [options]="drawerOptions">\n  <div class="content">\n   <img src="assets/imgs/legend.png">\n  </div>\n</content-drawer>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TopicTwoPage);
    return TopicTwoPage;
}());

//# sourceMappingURL=topic-two.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_topic_quiz_topic_quiz__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_topic3_questions__ = __webpack_require__(713);
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
    function TopicThreePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
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
    TopicThreePage.prototype.startQuiz = function () {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */], { "collection": __WEBPACK_IMPORTED_MODULE_3__shared_topic3_questions__["a" /* topic3 */] });
        modal.present();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-three',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/'<ion-header>\n    <!-- \n            <ion-navbar>\n              <ion-title>Topic Three</ion-title>\n            </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <h1>Problem Species affected</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Cause</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Effect</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Importance</h1>\n        </ion-slide>\n        <ion-slide>\n            <div class="container-slides-content">\n                <div class="vertical-center">\n                    <img style="width: 120px" src="assets/imgs/icn_temp.png">\n                    <h1 class="slide-title-main">Species Affected</h1>\n                    <h1 class="slide-title2-main">Quiz</h1>\n                    <div class="line-separator-short"></div>\n                    <h4 class="slide-subtitle">Test your knowledge with this quiz</h4>\n                    <p>Earn points and become a senior ecologist!</p>\n                    <button ion-button (click)="startQuiz()">Start the quiz</button>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TopicThreePage);
    return TopicThreePage;
}());

//# sourceMappingURL=topic-three.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastServiceProvider = /** @class */ (function () {
    function ToastServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastServiceProvider Provider');
    }
    ToastServiceProvider.prototype.showToast = function (message, cssClass) {
        var toast = this
            .toastCtrl
            .create({
            message: message,
            duration: 1500,
            position: 'middle',
            cssClass: cssClass
        });
        toast.present(toast);
    };
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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

/***/ 234:
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
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 276:
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
webpackEmptyAsyncContext.id = 276;

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password, totalScore, badges, topic1, topic2, topic3, topic4, topic5, firstLogin) {
        this.name = (name != null || name != undefined) ? name : "guest";
        this.email = (email != null || email != undefined) ? email : "guest";
        this.password = (password != null || password != undefined) ? password : "guest";
        this.totalScore = (totalScore != null || totalScore != undefined) ? totalScore : 0;
        this.badges = (badges != null || badges != undefined) ? badges : [1, 0, 0, 0, 0];
        this.topic1 = (topic1 != null || topic1 != undefined) ? topic1 : [0, 0, 0, 0, 0];
        this.topic2 = (topic2 != null || topic2 != undefined) ? topic2 : [0, 0, 0, 0, 0];
        this.topic3 = (topic3 != null || topic3 != undefined) ? topic3 : [0, 0, 0, 0, 0];
        this.topic4 = (topic4 != null || topic4 != undefined) ? topic4 : [0, 0, 0, 0, 0];
        this.topic5 = (topic5 != null || topic5 != undefined) ? topic5 : [0, 0, 0, 0, 0];
        this.firstLogin = (firstLogin != null || firstLogin != undefined) ? 1 : 0;
        this.loginTime = new Date().toISOString();
    }
    return User;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizResultComponent = /** @class */ (function () {
    function QuizResultComponent(navCtrl, navParams, viewCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.auth = auth;
        this.totalScore = this.auth.currentUser.totalScore;
        this.quizScore = this.navParams.get("quizScore");
    }
    QuizResultComponent.prototype.ionViewDidLoad = function () { };
    QuizResultComponent.prototype.close = function () {
        this
            .viewCtrl
            .dismiss({ 'action': 'remove' });
    };
    QuizResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quiz-result-modal',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/quiz-result-modal/quiz-result-modal.html"*/'<!--template for overlay-->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Result\n    </ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Quiz score: {{quizScore}}</h1>\n  <h1>Total score: {{totalScore}}</h1>\n  <button ion-button (click)="close()">\n    <span ion-text>Confirm</span>\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/quiz-result-modal/quiz-result-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuizResultComponent);
    return QuizResultComponent;
}());

//# sourceMappingURL=quiz-result-modal.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapInfoComponent = /** @class */ (function () {
    function MapInfoComponent(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.countryInfo = navParams.get("country");
    }
    MapInfoComponent.prototype.ionViewDidEnter = function () { };
    MapInfoComponent.prototype.ionViewDidLoad = function () { };
    MapInfoComponent.prototype.close = function () {
        this
            .viewCtrl
            .dismiss();
    };
    MapInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'map-modal',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/map-modal/map-modal.html"*/'<!--Modal for interactive map-->\n\n<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Information\n      </ion-title>\n      <ion-buttons start>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <p [innerHTML]="countryInfo"></p>\n    <button ion-button (click)="close()">\n      <span ion-text>Back to the map</span>\n    </button>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/map-modal/map-modal.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MapInfoComponent);
    return MapInfoComponent;
}());

//# sourceMappingURL=map-modal.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_items__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(109);
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
        this.gamePlay = true;
        this
            .app
            .ticker
            .start();
    };
    GamePage.prototype.stopGame = function () {
        this.gamePlay = false;
        this
            .app
            .ticker
            .stop();
    };
    GamePage.prototype.toggleGame = function () {
        this.gamePlay = !this.gamePlay;
        if (this.gamePlay) {
            this.playGame();
        }
        else {
            this.stopGame();
        }
    };
    GamePage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
        var bottomPadding = 95;
        self.app = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Application"](window.innerWidth, window.innerHeight, { backgroundColor: 0x1099bb });
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
                title: 'Recycle!',
                subTitle: 'Drag each plastic element to the correct bin',
                buttons: [
                    {
                        text: 'Start',
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
                title: 'Game Over',
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
                        text: 'Exit',
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
            var container = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Container"]();
            _this
                .app
                .stage
                .addChild(container);
            var texture = __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Texture"]
                .fromImage('assets/imgs/trash.svg');
            var bins = new __WEBPACK_IMPORTED_MODULE_3_pixi_js__["Sprite"](texture);
            bins
                .anchor
                .set(0.5, 0.7);
            bins.x = _this.app.screen.width / 2;
            bins.y = _this.app.screen.height;
            container.addChild(bins);
            _this
                .app
                .stage
                .addChild(container);
        };
        drawSeaBottom();
    };
    GamePage.prototype.exitAlert = function () {
        var _this = this;
        this.stopGame();
        var prompt = this
            .alertCtrl
            .create({
            title: 'Are you sure you want to exit?',
            buttons: [
                {
                    text: 'Continue the game',
                    handler: function (data) {
                        _this.playGame();
                    }
                }, {
                    text: 'Exit',
                    handler: function (data) {
                        _this
                            .navCtrl
                            .push(__WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */]);
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        prompt.present();
    };
    GamePage.prototype.ionViewWillLeave = function () {
        this.stopGame();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], GamePage.prototype, "content", void 0);
    GamePage = GamePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-game',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/game/game.html"*/'<!-- <ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header> -->\n\n<ion-content>\n  <div class="game-bg" #content ion-fixed>\n    <ion-grid ion-fixed>\n      <ion-row>\n        <ion-col col-2>\n          <button ion-button color="light" outline round="" (click)="toggleGame()" class="pause-btn">\n            <ion-icon name="{{gamePlay?\'pause\':\'play\'}}"></ion-icon>\n          </button>\n        </ion-col>\n\n        <ion-col col-1=""></ion-col>\n\n        <ion-col col-4>\n          <div class="score">\n            <p>Score:</p>\n            <h4>{{gameScore}}</h4>\n          </div>\n\n        </ion-col>\n        <ion-col col-3 >\n          <div class="tries">\n            <p>Tries left:</p>\n            <h4> {{gameLife}}</h4>\n          </div>\n        </ion-col>\n        <ion-col col-2>\n          <button ion-button color="light" clear="" (click)="exitAlert()">\n            <ion-icon name="close" style="font-size: 25px;"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/game/game.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], GamePage);
    return GamePage;
    var GamePage_1;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alternatives_info__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlternativesPage = /** @class */ (function (_super) {
    __extends(AlternativesPage, _super);
    function AlternativesPage(navCtrl, navParams) {
        var _this = _super.call(this, 300, 400, { legacy: true }) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.alternativesList = __WEBPACK_IMPORTED_MODULE_3__shared_alternatives_info__["a" /* alternativesList */];
        _this.item = "plasticBags";
        _this.selectItem();
        return _this;
    }
    AlternativesPage.prototype.ionViewDidLoad = function () {
        // this.createScratchPad();
    };
    AlternativesPage.prototype.selectItem = function () {
        var _this = this;
        this.selectedItem = __WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](this.alternativesList, function (item) {
            return item.item == _this.item;
        })[0];
        this.plasticImage = this.selectedItem.plasticImage;
        this.plasticText = this.selectedItem.plasticText;
        this.alternatives = this.selectedItem.alternatives;
        this.alternativesText1 = this.selectedItem.alternativesText1;
        this.alternativesText2 = this.selectedItem.alternativesText2;
    };
    AlternativesPage.prototype.segmentChanged = function (e) {
        this.item = e._value;
        this.selectItem();
        // this.createScratchPad();
    };
    AlternativesPage.prototype.arrawDivClick = function () { };
    AlternativesPage.prototype.createScratchPad = function () {
        __WEBPACK_IMPORTED_MODULE_2_pixi_js__["loader"].destroy;
        __WEBPACK_IMPORTED_MODULE_2_pixi_js__["loader"].reset();
        var app = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Application"](300, 400, { transparent: true, antialias: true });
        this
            .content
            .nativeElement
            .appendChild(app.view);
        var stage = app.stage;
        //prepare circle texture, that will be our brush
        var brush = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Graphics"]();
        brush.beginFill(0xffffff);
        brush.drawCircle(0, 0, 50);
        brush.endFill();
        __WEBPACK_IMPORTED_MODULE_2_pixi_js__["loader"]
            .add("plasticImage", this.plasticImage);
        __WEBPACK_IMPORTED_MODULE_2_pixi_js__["loader"]
            .add("plasticText", this.plasticText);
        __WEBPACK_IMPORTED_MODULE_2_pixi_js__["loader"]
            .load(setup);
        function setup(loader, resources) {
            var plasticImage = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"](resources["plasticImage"].texture);
            stage.addChild(plasticImage);
            plasticImage.width = app.screen.width;
            plasticImage.height = app.screen.height;
            var plasticText = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"](resources["plasticText"].texture);
            stage.addChild(plasticText);
            plasticText.width = app.screen.width;
            plasticText.height = app.screen.height;
            var renderTexture = __WEBPACK_IMPORTED_MODULE_2_pixi_js__["RenderTexture"]
                .create(app.screen.width, app.screen.height);
            var renderTextureSprite = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"](renderTexture);
            stage.addChild(renderTextureSprite);
            plasticText.mask = renderTextureSprite;
            app.stage.interactive = true;
            app
                .stage
                .on('pointerdown', pointerDown);
            app
                .stage
                .on('pointerup', pointerUp);
            app
                .stage
                .on('pointermove', pointerMove);
            var dragging = false;
            function pointerMove(event) {
                if (dragging) {
                    brush
                        .position
                        .copy(event.data.global);
                    app
                        .renderer
                        .render(brush, renderTexture, false, null, false);
                }
            }
            function pointerDown(event) {
                dragging = true;
                pointerMove(event);
            }
            function pointerUp(event) {
                dragging = false;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlternativesPage.prototype, "content", void 0);
    AlternativesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-alternatives',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/alternatives/alternatives.html"*/'<ion-content parallax-header>\n\n    <ion-segment class="plastic-buttons" [(ngModel)]="item" color="primary" (ionChange)="segmentChanged($event)">\n\n        <ion-segment-button value="plasticBags">\n            <img src="assets/imgs/icn-bag.svg">\n        </ion-segment-button>\n        <ion-segment-button value="waterBottles">\n            <img src="assets/imgs/icn-bottle.svg">\n\n        </ion-segment-button>\n        <ion-segment-button value="straws">\n            <img src="assets/imgs/icn-straw.svg">\n        </ion-segment-button>\n        <ion-segment-button value="utensils">\n            <img class="tootbrush" src="assets/imgs/icn-cutlery.svg">\n        </ion-segment-button>\n        <ion-segment-button value="toothbrush">\n            <img src="assets/imgs/icn-toothbrush.svg">\n        </ion-segment-button>\n\n        <!-- <button value="plasticBags" ion-button="" outline="">\n          <img src="assets/imgs/icn-bag.svg">\n        </button>\n        <button value="waterBottles" ion-button="" outline="">\n          <img src="assets/imgs/icn-bottle.svg">\n        </button>\n        <button value="straws" ion-button="" outline="">\n          <img src="assets/imgs/icn-straw.svg" >\n        </button>\n        <button value="utensils" ion-button="" outline="">\n          <img class="tootbrush" src="assets/imgs/icn-cutlery.svg">\n        </button>\n        <button value="toothbrush" ion-button="" outline="">\n          <img src="assets/imgs/icn-toothbrush.svg">\n        </button> -->\n    </ion-segment>\n\n    <div class="image-wrapper header-image" #content text-center>\n        <div class="section-title">\n            <h1 class="slide-title-main">Take action</h1>\n            <!--<h1 class="slide-title2-main">Use alternatives</h1>-->\n        </div>\n        <img class="img" src={{plasticImage}}>\n        <p class="image-content">{{plasticText}}</p>\n    </div>\n\n    <div class="main-content" text-center>\n        <div class="drawer">\n            <p class="scroll-content" color="secondary">Scroll down</p>\n            <div class="arrawDiv" (click)="arrawDivClick">\n                <ion-icon name="ios-arrow-down"></ion-icon>\n            </div>\n        </div>\n\n        <ion-slides class="alternatives-container" pager color="secondary">\n            <ion-slide *ngFor="let item of alternatives">\n                <!--<h1>Alternative 1</h1>-->\n                <div class="image-wrapper">\n                    <img src={{item.image}} class="img">\n                    <p class="image-content"> {{item.text}}</p>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/alternatives/alternatives.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AlternativesPage);
    return AlternativesPage;
}(__WEBPACK_IMPORTED_MODULE_2_pixi_js__["Application"]));

//# sourceMappingURL=alternatives.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsModalComponent = /** @class */ (function () {
    function TagsModalComponent(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.tagTitle = navParams.get("tagTitle");
        this.tagFoundIn = navParams.get("tagFoundIn");
        this.tagPlastic = navParams.get("tagPlastic");
        this.tagRecyclabilityTitle = navParams.get("tagRecyclabilityTitle");
        this.tagRecyclable = navParams.get("tagRecyclable");
        this.tagIcon = navParams.get("tagIcon");
        this.tagTypePlasticTitle = navParams.get("tagTypePlasticTitle");
        this.tagRecyclableDescription = navParams.get("tagRecyclableDescription");
    }
    TagsModalComponent.prototype.ionViewDidEnter = function () { };
    TagsModalComponent.prototype.ionViewDidLoad = function () { };
    TagsModalComponent.prototype.close = function () {
        this
            .viewCtrl
            .dismiss();
    };
    TagsModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tags-modal',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/tags-modal/tags-modal.html"*/'<!--<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Tags information\n    </ion-title>\n    <ion-buttons start>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>-->\n\n<ion-header no-border="">\n  <ion-toolbar class="modal-toolbar" color="lightest">\n    <ion-buttons end="">\n      <button ion-button (click)="close()" icon-only="">\n        <ion-icon name="close" large=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="content-wrapper">\n    <img class="icon-property" src="{{tagIcon}}">\n    <div class="divider-short"></div>\n    <h4 class="label" [innerHTML]="tagTypePlasticTitle"></h4>\n    <p class="value" [innerHTML]="tagTitle"></p>\n    <div class="divider-long"></div>\n    <h4 class="label" [innerHTML]="tagRecyclabilityTitle"></h4>\n    <p class="value" [innerHTML]="tagRecyclable"></p>\n    <p class="value" [innerHTML]="tagRecyclableDescription"></p>\n    <div class="divider-long"></div>\n    <h4 class="label" [innerHTML]="tagFoundIn"></h4>\n    <p class="value" [innerHTML]="tagPlastic"></p>\n    <div class="item-plastic-wrapper">\n      <ion-row>\n        <ion-col col-4>\n          <img class="plastic-items" src="assets/imgs/icn_water_bottle.png">\n        </ion-col>\n        <ion-col col-4>\n          <img class="plastic-items" src="assets/imgs/icn_water_bottle.png">\n        </ion-col>\n        <ion-col col-4>\n          <img class="plastic-items" src="assets/imgs/icn_water_bottle.png">\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <!--<button ion-button (click)="close()">\n    <span ion-text>Back</span>\n  </button>-->\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/tags-modal/tags-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TagsModalComponent);
    return TagsModalComponent;
}());

//# sourceMappingURL=tags-modal.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalComponent; });
/* unused harmony export Event */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventModalComponent = /** @class */ (function () {
    function EventModalComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.event = {
            date: {
                day: "",
                month: "",
                year: ""
            },
            title: "",
            location: "",
            time: "",
            contact: ""
        };
        this.showError = false;
    }
    EventModalComponent.prototype.submitEventForm = function () {
        var date = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.datePickerVal).format("DD-MMM-YYYY");
        if (this.datePickerVal != "" && this.event.title != "" && this.event.location != "" && this.event.time != "" && this.event.contact != "") {
            this.showError = false;
            this.event.date = {
                day: this.datePickerVal.split("-")[2],
                month: date.split("-")[1],
                year: this.datePickerVal.split("-")[0],
            };
            this
                .viewCtrl
                .dismiss({ "event": this.event });
        }
        else {
            this.showError = true;
        }
    };
    EventModalComponent.prototype.close = function () {
        this
            .viewCtrl
            .dismiss({ "action": "cancel" });
    };
    EventModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'event-modal',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/event-modal/event-modal.html"*/'<ion-header no-border="">\n  <ion-toolbar class="modal-toolbar" color="lightest">\n    <ion-buttons end="">\n      <button ion-button (click)="close()" icon-only="">\n        <ion-icon name="close" large=""></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="">\n  <div class="img-wrapper">\n    <img src="../../assets/imgs/icn_temp.png" class="icon_property">\n  </div>\n\n  <form (ngSubmit)="submitEventForm()" class="content-wrapper">\n    <p class="event-header">Create your event below and share it with the ZeroPlastic Community</p>\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MMM/D/YYYY" pickerFormat="MMM/D/YYYY"\n      monthShortNames = "Jan, Feb, Mar, Apr, Mat, Jun, Jul, Aug, Sep, Oct, Nov, Dec"       \n      name="datepicker" [(ngModel)]="datePickerVal"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Event name</ion-label>\n      <ion-input type="text" [(ngModel)]="event.title" name="title" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Location</ion-label>\n      <ion-input type="text" [(ngModel)]="event.location" name="location" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Time</ion-label>\n      <ion-input type="text" [(ngModel)]="event.time" name="time" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contact</ion-label>\n      <ion-input type="text" [(ngModel)]="event.contact" name="contact" required></ion-input>\n    </ion-item>\n\n    <button ion-button type="submit" block class="event-btn">Create event</button>\n    <ion-label *ngIf="showError" color="danger">Oops! Some information is missing.</ion-label>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/event-modal/event-modal.html"*/ }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]) === "function" && _a || Object])
    ], EventModalComponent);
    return EventModalComponent;
    var _a;
}());

var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_model__ = __webpack_require__(327);
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
        this.http = http;
        this.db = db;
        // allUsers : any;
        this.baseUrl = "https://plastic-ocean.firebaseio.com";
    }
    AuthServiceProvider.prototype.ionViewDidLoad = function () { };
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            this.getAllUsers();
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.currentUser = __WEBPACK_IMPORTED_MODULE_4_lodash__["first"](__WEBPACK_IMPORTED_MODULE_4_lodash__["filter"](_this.usersList, function (item) {
                    return item.email === credentials.email;
                }));
                console.log("this.currentUser");
                console.log(_this.currentUser);
                _this.$userKey = _this.currentUser.$key;
                console.log("this.$userKey");
                console.log(_this.$userKey);
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthServiceProvider.prototype.register = function (credentials) {
        if (credentials.name === null || credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            this
                .db
                .list('users')
                .push(new __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */](credentials.name, credentials.email, credentials.password));
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
    AuthServiceProvider.prototype.getDBUsers = function () {
        this.dbUserList = this
            .db
            .list('/users');
        return this.dbUserList;
    };
    AuthServiceProvider.prototype.getAllUsers = function () {
        var _this = this;
        this
            .getDBUsers()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.usersList = [];
            item.forEach(function (element) {
                var y = element
                    .payload
                    .toJSON();
                y["$key"] = element.key;
                _this
                    .usersList
                    .push(y);
            });
        });
    };
    AuthServiceProvider.prototype.getDBCurrentUser = function () {
        return this
            .db
            .list('/users/' + this.$userKey);
        // return Object.assign({}, this.currentUser);
    };
    AuthServiceProvider.prototype.insertUser = function (user) {
        this
            .dbUserList
            .push({ name: user.name, email: user.email, password: user.password });
    };
    AuthServiceProvider.prototype.updateUser = function (user) {
        this
            .dbUserList
            .update(user.$key, {
            name: user.name,
            email: user.email,
            password: user.password,
            totalScore: user.totalScore,
            badges: user.badges,
            topic1: user.topic1,
            topic2: user.topic2,
            topic3: user.topic3,
            topic4: user.topic4,
            topic5: user.topic5,
            firstLogin: user.firstLogin,
            loginTime: user.loginTime
        });
    };
    AuthServiceProvider.prototype.updateUserAchievement = function (currentUser, quizScore, questionScore, topicTitle) {
        var user = currentUser;
        var preTotalScore = currentUser.totalScore;
        var preQuestionScores = currentUser[topicTitle];
        var quizTotal = 0;
        var quizDiff = 0;
        for (var i = 0; i < questionScore.length; i++) {
            quizTotal += questionScore[i];
            if (preQuestionScores[i] < questionScore[i]) {
                quizDiff += questionScore[i];
            }
            else {
                quizDiff += 0;
            }
        }
        user[topicTitle] = questionScore;
        user.totalScore += quizDiff;
        this.updateUser(user);
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__ = __webpack_require__(79);
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
        // loading  : Loading;
        this.registerCredentials = {
            email: 'hoc2@tcd.ie',
            password: 'deniseho'
        };
    }
    LoginPage.prototype.createAccount = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // this.showLoading();
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
    // showLoading() {
    //   this.loading = this
    //     .loadingCtrl
    //     .create({content: 'Please wait...', dismissOnPageChange: true});
    //   this
    //     .loading
    //     .present();
    // }
    LoginPage.prototype.showError = function (text) {
        // this
        //   .loading
        //   .dismiss();
        var alert = this
            .alertCtrl
            .create({ title: 'Fail', subTitle: text, buttons: ['OK'] });
        alert.present();
    };
    LoginPage.prototype.gotoHomepage = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-login',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding="">\n  <img class="login-background" src="assets/imgs/bg-log-in-2.png">\n\n  <ion-grid style="height: 100%">\n    <ion-row justify-content-center align-items-center style="height: 100%">\n      <ion-card>\n        <ion-card-header>Login</ion-card-header>\n\n        <img class="avatar" style="width: 110px" src="assets/imgs/avatar_temp.png">\n        <div>\n          <form (ngSubmit)="login()" #loginForm="ngForm">\n            <ion-list inset="">\n              <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input type="email" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n              </ion-item>\n\n            </ion-list>\n\n            <div padding>\n              <button ion-button color="primary" full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n              <button ion-button color="primary" block clear type="button" (click)="createAccount()">Register</button>\n            </div>\n            <!-- <button class="skip-button" ion-button color="secondary" clear item-start icon-end (click)="gotoHomepage()">Skip <ion-icon name="ios-arrow-forward"></ion-icon></button> -->\n\n          </form>\n        </div>\n        \n      </ion-card>\n    </ion-row>\n  </ion-grid>\n\n\n  <!--<ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n      LOGO\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <div>\n    <form (ngSubmit)="login()" #loginForm="ngForm">\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!loginForm.form.valid">Login</button>\n          <button ion-button block clear type="button" (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>-->\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/login/login.html"*/ }),
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

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        this.ageGroup = "9-13";
    }
    RegisterPage.prototype.ionViewDidLoad = function () { };
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
        var alert = this
            .alertCtrl
            .create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this
                                .navCtrl
                                .popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage.prototype.gotoHomepage = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    RegisterPage.prototype.backToLogin = function () {
        this
            .navCtrl
            .pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-register',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/register/register.html"*/'<!--<ion-header>\n\n  <ion-navbar color="lightest">\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <ion-card>\n        <ion-card-header>Register</ion-card-header>\n        <img class="avatar" style="width: 110px" src="assets/imgs/avatar_temp.png">\n        <div>\n          <form (ngSubmit)="register()" #registerForm="ngForm">\n            <ion-list radio-group [(ngModel)]="ageGroup" name="ageGroup">\n              <ion-list-header no-lines="">How old are you?</ion-list-header>\n              <ion-item>\n                <ion-radio value="9-13"></ion-radio>\n                <ion-label>9-13</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-radio value="14+"></ion-radio>\n                <ion-label>14 +</ion-label>\n              </ion-item>\n            </ion-list>\n\n            <ion-list inset="">\n              <ion-item>\n                <ion-label stacked>Nickname</ion-label>\n                <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n              </ion-item>\n              <ion-item *ngIf="ageGroup==\'9-13\'" >\n                <ion-label stacked>Parent email</ion-label>\n                <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <div padding>\n              <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n              <button ion-button color="primary" block clear type="button" (click)="backToLogin()">Login</button>\n            </div>\n            <button class="skip-button" ion-button color="secondary" clear item-start icon-end (click)="gotoHomepage()">Skip <ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n\n          </form>\n        </div>\n\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n  <img class="login-background" src="assets/imgs/bg-log-in-2.png">\n  <!--<div>\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/register/register.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
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
    // usersList : User[];
    function AchievementPage(navCtrl, navParams, auth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.toast = toast;
        this.currentUser = this.auth.currentUser;
        this.getScoreRanking();
    }
    AchievementPage.prototype.getScoreRanking = function () {
        var _this = this;
        this
            .auth
            .getDBUsers()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.usersList = [];
            item.forEach(function (element) {
                var y = element
                    .payload
                    .toJSON();
                y["$key"] = element.key;
                _this
                    .usersList
                    .push(y);
                _this.usersList = __WEBPACK_IMPORTED_MODULE_4_lodash__["first"](__WEBPACK_IMPORTED_MODULE_4_lodash__["chunk"](__WEBPACK_IMPORTED_MODULE_4_lodash__["sortBy"](_this.usersList, "totalScore").reverse(), 10));
            });
            console.log(_this.usersList);
        });
    };
    AchievementPage.prototype.ionViewDidLoad = function () {
        var totalScore = this.currentUser.totalScore;
        if (totalScore < 25) {
            this.badgeRecord = [1, 0, 0, 0, 0];
        }
        else if (totalScore >= 25 && totalScore < 60) {
            this.badgeRecord = [1, 1, 0, 0, 0];
        }
        else if (totalScore >= 60 && totalScore < 100) {
            this.badgeRecord = [1, 1, 1, 0, 0];
        }
        else if (totalScore >= 100 && totalScore < 150) {
            this.badgeRecord = [1, 1, 1, 1, 0];
        }
        else if (totalScore >= 150) {
            this.badgeRecord = [1, 1, 1, 1, 1];
        }
        if (this.badgeRecord != this.currentUser.badges) {
            this.currentUser.badges = this.badgeRecord;
            // this.auth.updateUser(this.currentUser);
        }
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-achievement',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/'<ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n<ion-content padding>\n  <h4>Name: {{currentUser.name}}</h4>\n  <h4>Email: {{currentUser.email}}</h4>\n  <h4>Total Score: {{currentUser.totalScore}}</h4>\n  <h4>Badges: </h4>\n  <div class="badgeRecord" *ngFor="let item of badgeRecord; index as i">\n    <img src="{{item|badges: i}}">\n  </div>\n\n  <h4>Leaderboard</h4>\n    <ion-row *ngFor="let user of (usersList); index as i">\n        <ion-col>{{i+1}}</ion-col>\n        <ion-col>{{user.name}}</ion-col>\n        <ion-col>{{user.totalScore}}</ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(642);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_topic_menu_topic_menu__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_achievement_achievement__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_game_game__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_audio__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__firebase_credentials__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_fullpage__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ngx_fullpage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_user_service_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_alternatives_alternatives__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_parallax_header_parallax_header__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_toast_service_toast_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_badges_badges__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_topic_quiz_topic_quiz__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_quiz_result_modal_quiz_result_modal__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_map_modal_map_modal__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_tags_modal_tags_modal__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_event_modal_event_modal__ = __webpack_require__(385);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_33__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_quiz_result_modal_quiz_result_modal__["a" /* QuizResultComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_alternatives_alternatives__["a" /* AlternativesPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__["a" /* ContentDrawerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__directives_parallax_header_parallax_header__["a" /* ParallaxHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_badges_badges__["a" /* BadgesPipe */],
                __WEBPACK_IMPORTED_MODULE_35__components_map_modal_map_modal__["a" /* MapInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_tags_modal_tags_modal__["a" /* TagsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_event_modal_event_modal__["a" /* EventModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_26_ngx_fullpage__["MnFullpageModule"].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_game_game__["a" /* GamePage */],
                __WEBPACK_IMPORTED_MODULE_33__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_quiz_result_modal_quiz_result_modal__["a" /* QuizResultComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_alternatives_alternatives__["a" /* AlternativesPage */],
                __WEBPACK_IMPORTED_MODULE_35__components_map_modal_map_modal__["a" /* MapInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_tags_modal_tags_modal__["a" /* TagsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_event_modal_event_modal__["a" /* EventModalComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_27__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_31__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jquery__);
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
var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, auth) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        console.log("this.auth.getAllUsers()");
        console.log(this.auth.getAllUsers());
        // set our app's pages
        this.pages = [
            { title: 'About Plastic', component: __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__["a" /* TopicOnePage */], avatar: 'assets/imgs/icn_plastic_pollution.png' },
            { title: 'Top 10 countries', component: __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__["a" /* TopicTwoPage */], avatar: 'assets/imgs/icn_plastics.png' },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__["a" /* TopicThreePage */], avatar: 'assets/imgs/icn_octopus.png' },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__["a" /* TopicFourPage */], avatar: 'assets/imgs/icn_take_action.png' },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__["a" /* TopicFivePage */], avatar: 'assets/imgs/icn_activities.png' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-header>\n\n  </ion-header>\n\n  <ion-content class="menu-gradient menu-bottom">\n    <!--<ion-list>-->\n      <!--<button ion-item icon-only (click)="gotoHomepage()">-->\n          <!--<ion-icon name="home"></ion-icon>-->\n        <!--</button>-->\n    <!--</ion-list>-->\n    <ion-list class="profile_section_wrapper">\n      <ion-item class="profile_section bg-color">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/avatar_temp.png">\n        </ion-thumbnail>\n        <h2 class="points content-color">25 points</h2>\n        <h2 class="badges content-color">1/6 badges</h2>\n        <img class="progress-bar" src="assets/imgs/progress_bar.png">\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header class="bg-color">Discover</ion-list-header>\n      <ion-item class="bg-color" ion-item *ngFor="let p of pages" (click)="gotoPage(p)">\n          <ion-avatar item-start>\n            <img class="menu-avatar" src={{p.avatar}}>\n          </ion-avatar>\n          <h2 class="content-color">{{p.title}}</h2>\n          <ion-icon item-end name="ios-arrow-forward" color="gray"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <button class="log-out" ion-button color="secondary" round="" item-end icon-start (click)="logout()">\n        <ion-icon color="light" name="log-out"> </ion-icon>\n        Logout\n      </button>\n    </ion-list>\n\n    <img src="assets/imgs/seaweed-2.png" class="seaweed-property">\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/deniseho/plastic/src/app/app.html"*/
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

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topic1; });
var topic1 = {
    collectionName: "topic1",
    questionList: [
        {
            question: "In Ireland, how much plastic does each person consume per year ?",
            options: [
                {
                    description: "61kg of plastic",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "15,000 kg of plastic",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "20kg of plastic",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "90kg of plastic",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "How many number of marine species are endangered by the floating plastic on the surface of our oceans? ",
            options: [
                {
                    description: "10 species",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "300 species",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "700 species",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "1,200 species",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "How many years does it take a plastic bottle to degrade?",
            options: [
                {
                    description: "10 years",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "400 years",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "50 years",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "100 years",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "What is a gyre?",
            options: [
                {
                    description: "The name of the biggest fish ever found in the ocean",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Large schools of fish who are becoming sick due to microplastics",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Very large garbage patches in our oceans that are in large part created due to our consumption of plastic",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "Areas of the ocean which free from plastics",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "What is a solution that you can take to help improve the plastic problem?",
            options: [
                {
                    description: "Reduce use of single use plastics ",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Recycle",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Avoid using plastics containing microbeads",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Support organizations that deal with plastic pollution",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "All the above ",
                    points: 5,
                    isAnswer: true
                }
            ]
        }
    ]
};
//# sourceMappingURL=topic1-questions.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topic2; });
var topic2 = {
    collectionName: "topic2",
    questionList: [
        {
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
//# sourceMappingURL=topic2-questions.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return country; });
var country = {
    title: "Top Ten Producers of Plastic Waste in the world",
    countryList: {
        "China": "<h1>NO.1 China</h1> China is responsible for nearly 30% of the plastic waste in our world’s oceans",
        "Indonesia": "<h1>NO.2 Indonesia</h1> Indonesia contributes roughly 200,000 tonnes of waste to our world’s oceans",
        "Philippines": "<h1>NO.3 Philippines</h1> The passig river in the Philippines dumps the equivalent of 10,600 elephants of plastic into the pacific ocean every year",
        "Vietnam": "<h1>NO.4 Vietnam</h1> 18,000 tonnes of plastic waste are generated in Vietnam on a daily basis",
        "Sri Lanka": "<h1>NO.5 Sri Lanka</h1> While Sri Lanka implemented a ban on single-use plastics in January 2018, the country comes fifth in the world for plastic polluters",
        "Egypt": "<h1>NO.6 Egypt</h1> Egypt produces 16 million tonnes of rubbish per year, with 55% of its plastics recycled",
        "Thailand": "<h1>NO.7 Thailand</h1> In Thailand almost 500 marine life forms die each year, mainly caused by man-made marine debris",
        "Malaysia": "<h1>NO.8 Malaysia</h1> Malaysia is the 8th worst country worldwide for plastic waste, Only 15% of Malaysian people recycle",
        "Nigeria": "<h1>NO.9 Nigeria’s</h1> Nigeria’s largest city Lagos generates approximately 600,000 metric tonnes of plastic waste per year, of which 100,000 tonnes finds its way into the ocean",
        "Bangladesh": "<h1>NO.10 Bangladesh</h1> The use of plastics in Bangladesh has grown to 1200,000 metric tonnes in 2018,compared to just 15,000 metric tonnes in 1990",
    }
};
//# sourceMappingURL=country-info.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topic3; });
var topic3 = {
    collectionName: "topic3",
    questionList: [
        {
            question: "How many animals are dying each year due to ocean debris?",
            options: [
                {
                    description: "100 million",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "20 million",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "1,000",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "30,000",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "What is/are the main ways animals become hurt and injured by plastics?",
            options: [
                {
                    description: "Suffocation",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Starvation",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Drowning",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "Infection",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "All the Above",
                    points: 5,
                    isAnswer: true
                }
            ]
        }, {
            question: "What percentage of whales and dolphins have been recorded ingesting plastics?",
            options: [
                {
                    description: "20%",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "56%",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "12%",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "97%",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "What is the percentage of albatross seabirds that have plastic in their stomach at some point in their    lives ?",
            options: [
                {
                    description: "44%",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "2%",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "98%",
                    points: 5,
                    isAnswer: true
                }, {
                    description: "10%",
                    points: 0,
                    isAnswer: false
                }
            ]
        }, {
            question: "Based on the whale video, how many pounds of plastic end up in our oceans each year?",
            options: [
                {
                    description: "20 million pounds of plastic",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "1 billion pounds of plastic",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "100 million pounds of plastic",
                    points: 0,
                    isAnswer: false
                }, {
                    description: "18 billion pounds of plastic",
                    points: 5,
                    isAnswer: true
                }
            ]
        }
    ]
};
//# sourceMappingURL=topic3-questions.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(201);
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
            { title: 'About Plastic', component: __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'Top 10 countries', component: __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */] },
        ];
    }
    TopicMenu.prototype.ionViewDidLoad = function () {
    };
    TopicMenu.prototype.gotoPage = function (p) {
        this
            .navCtrl
            .push(p);
    };
    TopicMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/'<!--HOME-->\n\n<ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n\n<ion-content class="display-height">\n  <h1 class="slide-title-main">Discover</h1>\n  <ion-card class="menuList" *ngFor="let p of pages" (click)="gotoPage(p.component)">\n    <div class="card-title">{{p.title}}</div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TopicMenu);
    return TopicMenu;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return items; });
var items = [
    {
        url: 'assets/imgs/game/tag1-1.png',
        tag: "tag1",
        recycable: true,
        speed: 2.5,
    }, {
        url: 'assets/imgs/game/tag1-2.png',
        tag: "tag1",
        recycable: true,
        speed: 3,
    },
    {
        url: 'assets/imgs/bottle.png',
        tag: "tag1",
        recycable: true,
        speed: 2,
    }, {
        url: 'assets/imgs/game/tag2-1.png',
        tag: "tag2",
        recycable: true,
        speed: 1.8,
    },
    {
        url: 'assets/imgs/game/tag2-2.png',
        tag: "tag2",
        recycable: true,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/game/tag3-1.png',
        tag: "tag3",
        recycable: false,
        speed: 2.5,
    }, {
        url: 'assets/imgs/game/tag3-2.png',
        tag: "tag3",
        recycable: false,
        speed: 3,
    }, {
        url: 'assets/imgs/game/tag3-3.png',
        tag: "tag3",
        recycable: false,
        speed: 1.8,
    },
    {
        url: 'assets/imgs/game/tag4-1.png',
        tag: "tag4",
        recycable: true,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/game/tag4-2.png',
        tag: "tag4",
        recycable: true,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/game/tag5-1.png',
        tag: "tag5",
        recycable: true,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/game/tag5-2.png',
        tag: "tag5",
        recycable: false,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/game/tag6-1.png',
        tag: "tag6",
        recycable: false,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/game/tag6-2.png',
        tag: "tag6",
        recycable: false,
        speed: 3.5,
    },
    {
        url: 'assets/imgs/fork_knife.png',
        tag: "tag6",
        recycable: false,
        speed: 3.5,
    }
];

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alternativesList; });
var alternativesList = [
    {
        item: "plasticBags",
        plasticImage: "assets/imgs/Bags/bag.png",
        plasticText: "160,000 plastic bags are used globally every second, 5 Trillion plastic bags are" +
            " produced yearly. All together, they circle around the world 7 times! There are " +
            "much better and more environmentally friendly options available.",
        alternatives: [
            {
                image: "assets/imgs/Bags/bag2.png",
                text: "Canvas bags: The best replacement for plastic bags are reusable cotton canvas ba" +
                    "gs. Cheap to buy and very durable, they can be washed and reused as much as you " +
                    "like."
            }, {
                image: "assets/imgs/Bags/bag1.png",
                text: "Backpack: Another good option, especially with heavy items. It also allows you t" +
                    "o keep your hands free in the process."
            }
        ]
    }, {
        item: "waterBottles",
        plasticImage: "assets/imgs/Bottles/bottle.png",
        plasticText: "assets/imgs/bunny.png",
        alternatives: [
            {
                image: "assets/imgs/Bottles/bottle1.png",
                text: ""
            }, {
                image: "assets/imgs/Bottles/bottle2.png",
                text: ""
            }
        ],
    }, {
        item: "straws",
        plasticImage: "assets/imgs/Straws/straw.png",
        plasticText: "assets/imgs/bunny.png",
        alternatives: [
            {
                image: "assets/imgs/Straws/straw1.png",
                text: ""
            }, {
                image: "assets/imgs/Straws/straw2.jpg",
                text: ""
            },
            {
                image: "assets/imgs/Straws/straw3.png",
                text: ""
            }, {
                image: "assets/imgs/Straws/straw4.jpg",
                text: ""
            },
            {
                image: "assets/imgs/Straws/straw5.png",
                text: ""
            }, {
                image: "assets/imgs/Straws/straw6.jpg",
                text: ""
            }
        ],
    }, {
        item: "utensils",
        plasticImage: "assets/imgs/Utensils/utensils.png",
        plasticText: "assets/imgs/bunny.png",
        alternatives: [
            {
                image: "assets/imgs/Utensils/utensils1.png",
                text: ""
            }, {
                image: "assets/imgs/Utensils/utensils2.png",
                text: ""
            }
        ],
    }, {
        item: "toothbrush",
        plasticImage: "assets/imgs/Toothbrush/toothbrush2.png",
        plasticText: "assets/imgs/bunny.png",
        alternatives: [
            {
                image: "assets/imgs/Toothbrush/toothbrush1.png",
                text: ""
            }
        ],
    }
];
//# sourceMappingURL=alternatives-info.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tags; });
var tags = {
    Tag1: {
        icon: "assets/imgs/tag_1.png",
        typePlasticTitle: "Type of plastic:",
        title: "PETE",
        foundIn: "Found in:",
        plastic: "Soft drink bottle, sports drink bottle, and water bottle",
        recyclabilityTitle: "Recyclable:",
        recyclable: "YES",
        recyclableDescription: "(through most curbside recycling programs)"
    },
    Tag2: {
        icon: "assets/imgs/tag_2.png",
        typePlasticTitle: "Type of plastic:",
        title: "HDPE",
        foundIn: "Found in:",
        plastic: "Milk bottle and detergent bottle",
        recyclabilityTitle: "Recyclable:",
        recyclable: "YES",
        recyclableDescription: "(through most curbside recycling programs)"
    },
    Tag3: {
        icon: "assets/imgs/tag_3.png",
        typePlasticTitle: "Type of plastic:",
        title: "PVC",
        foundIn: "Found in:",
        plastic: "Pipe and water jug",
        recyclabilityTitle: "Recyclable:",
        recyclable: "NO",
        recyclableDescription: "(difficult to recycle, and are not accepted through most curbside recycling programs)"
    },
    Tag4: {
        icon: "assets/imgs/tag_4.png",
        typePlasticTitle: "Type of plastic:",
        title: "LDPE",
        foundIn: "Found in:",
        plastic: "Squeezable bottle and dry cleaning bag",
        recyclabilityTitle: "Recyclable:",
        recyclable: "YES",
        recyclableDescription: "(through most curbside recycling programs)"
    },
    Tag5: {
        icon: "assets/imgs/tag_5.png",
        typePlasticTitle: "Type of plastic:",
        title: "PP",
        foundIn: "Found in:",
        plastic: "Ketchup bottle and medicine bottle",
        recyclabilityTitle: "Recyclable:",
        recyclable: "YES",
        recyclableDescription: "(through most curbside recycling programs)"
    },
    Tag6: {
        icon: "assets/imgs/tag_6.png",
        typePlasticTitle: "Type of plastic:",
        title: "Different",
        foundIn: "Found in:",
        plastic: "Disposable plate and disposable cutlery",
        recyclabilityTitle: "Recyclable:",
        recyclable: "NO",
        recyclableDescription: "(difficult to recycle, and are not accepted through most curbside recycling programs)"
    }
    /*
    tagsList: {
        "Tag1": "<h1>Tag 1 PETE</h1><p>Found in: plastics Soft drink bottle, sports drink bottle, and water bottle</p>" +
        "<p>Recyclable: YES (through most curbside recycling programs)</p>",
        "Tag2": "<h1>Tag 2 HDPE</h1><p>Found in: milk bottle and detergent bottle</p>" +
        "<p>Recyclable: YES (through most curbside recycling programs)</p>",
        "Tag3": "<h1>Tag 3 PVC</h1><p>Found in: pipe and water jug</p>" +
        "<p>Recyclable: NO (difficult to recycle, and are not accepted through most curbside recycling programs)</p>",
        "Tag4": "<h1>Tag 4 LDPE</h1><p>Found in: squeezable bottle and dry cleaning bag</p>" +
        "<p>Recyclable: YES (through most curbside recycling programs)</p>",
        "Tag5": "<h1>Tag 5 PP</h1><p>Found in: ketchup bottle and medicine bottle</p>" +
        "<p>Recyclable: YES (through most curbside recycling programs)</p>",
        "Tag6": "<h1></h1><p>Found in: disposable plate and disposable cutlery</p>" +
        "<p>Recyclable: NO (difficult to recycle, and are not accepted through most curbside recycling programs)</p>"
    }*/
};
//# sourceMappingURL=tags-info.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return topic4; });
var topic4 = {
    collectionName: "topic4",
    questionList: [
        {
            question: "topic4 question 01",
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
            question: "topic4 question 02",
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
            question: "topic4 question 03",
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
            question: "topic4 question 04",
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
            question: "topic4 question 05",
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
//# sourceMappingURL=topic4-questions.js.map

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 386,
	"./af.js": 386,
	"./ar": 387,
	"./ar-dz": 388,
	"./ar-dz.js": 388,
	"./ar-kw": 389,
	"./ar-kw.js": 389,
	"./ar-ly": 390,
	"./ar-ly.js": 390,
	"./ar-ma": 391,
	"./ar-ma.js": 391,
	"./ar-sa": 392,
	"./ar-sa.js": 392,
	"./ar-tn": 393,
	"./ar-tn.js": 393,
	"./ar.js": 387,
	"./az": 394,
	"./az.js": 394,
	"./be": 395,
	"./be.js": 395,
	"./bg": 396,
	"./bg.js": 396,
	"./bm": 397,
	"./bm.js": 397,
	"./bn": 398,
	"./bn.js": 398,
	"./bo": 399,
	"./bo.js": 399,
	"./br": 400,
	"./br.js": 400,
	"./bs": 401,
	"./bs.js": 401,
	"./ca": 402,
	"./ca.js": 402,
	"./cs": 403,
	"./cs.js": 403,
	"./cv": 404,
	"./cv.js": 404,
	"./cy": 405,
	"./cy.js": 405,
	"./da": 406,
	"./da.js": 406,
	"./de": 407,
	"./de-at": 408,
	"./de-at.js": 408,
	"./de-ch": 409,
	"./de-ch.js": 409,
	"./de.js": 407,
	"./dv": 410,
	"./dv.js": 410,
	"./el": 411,
	"./el.js": 411,
	"./en-au": 412,
	"./en-au.js": 412,
	"./en-ca": 413,
	"./en-ca.js": 413,
	"./en-gb": 414,
	"./en-gb.js": 414,
	"./en-ie": 415,
	"./en-ie.js": 415,
	"./en-il": 416,
	"./en-il.js": 416,
	"./en-nz": 417,
	"./en-nz.js": 417,
	"./eo": 418,
	"./eo.js": 418,
	"./es": 419,
	"./es-do": 420,
	"./es-do.js": 420,
	"./es-us": 421,
	"./es-us.js": 421,
	"./es.js": 419,
	"./et": 422,
	"./et.js": 422,
	"./eu": 423,
	"./eu.js": 423,
	"./fa": 424,
	"./fa.js": 424,
	"./fi": 425,
	"./fi.js": 425,
	"./fo": 426,
	"./fo.js": 426,
	"./fr": 427,
	"./fr-ca": 428,
	"./fr-ca.js": 428,
	"./fr-ch": 429,
	"./fr-ch.js": 429,
	"./fr.js": 427,
	"./fy": 430,
	"./fy.js": 430,
	"./gd": 431,
	"./gd.js": 431,
	"./gl": 432,
	"./gl.js": 432,
	"./gom-latn": 433,
	"./gom-latn.js": 433,
	"./gu": 434,
	"./gu.js": 434,
	"./he": 435,
	"./he.js": 435,
	"./hi": 436,
	"./hi.js": 436,
	"./hr": 437,
	"./hr.js": 437,
	"./hu": 438,
	"./hu.js": 438,
	"./hy-am": 439,
	"./hy-am.js": 439,
	"./id": 440,
	"./id.js": 440,
	"./is": 441,
	"./is.js": 441,
	"./it": 442,
	"./it.js": 442,
	"./ja": 443,
	"./ja.js": 443,
	"./jv": 444,
	"./jv.js": 444,
	"./ka": 445,
	"./ka.js": 445,
	"./kk": 446,
	"./kk.js": 446,
	"./km": 447,
	"./km.js": 447,
	"./kn": 448,
	"./kn.js": 448,
	"./ko": 449,
	"./ko.js": 449,
	"./ky": 450,
	"./ky.js": 450,
	"./lb": 451,
	"./lb.js": 451,
	"./lo": 452,
	"./lo.js": 452,
	"./lt": 453,
	"./lt.js": 453,
	"./lv": 454,
	"./lv.js": 454,
	"./me": 455,
	"./me.js": 455,
	"./mi": 456,
	"./mi.js": 456,
	"./mk": 457,
	"./mk.js": 457,
	"./ml": 458,
	"./ml.js": 458,
	"./mn": 459,
	"./mn.js": 459,
	"./mr": 460,
	"./mr.js": 460,
	"./ms": 461,
	"./ms-my": 462,
	"./ms-my.js": 462,
	"./ms.js": 461,
	"./mt": 463,
	"./mt.js": 463,
	"./my": 464,
	"./my.js": 464,
	"./nb": 465,
	"./nb.js": 465,
	"./ne": 466,
	"./ne.js": 466,
	"./nl": 467,
	"./nl-be": 468,
	"./nl-be.js": 468,
	"./nl.js": 467,
	"./nn": 469,
	"./nn.js": 469,
	"./pa-in": 470,
	"./pa-in.js": 470,
	"./pl": 471,
	"./pl.js": 471,
	"./pt": 472,
	"./pt-br": 473,
	"./pt-br.js": 473,
	"./pt.js": 472,
	"./ro": 474,
	"./ro.js": 474,
	"./ru": 475,
	"./ru.js": 475,
	"./sd": 476,
	"./sd.js": 476,
	"./se": 477,
	"./se.js": 477,
	"./si": 478,
	"./si.js": 478,
	"./sk": 479,
	"./sk.js": 479,
	"./sl": 480,
	"./sl.js": 480,
	"./sq": 481,
	"./sq.js": 481,
	"./sr": 482,
	"./sr-cyrl": 483,
	"./sr-cyrl.js": 483,
	"./sr.js": 482,
	"./ss": 484,
	"./ss.js": 484,
	"./sv": 485,
	"./sv.js": 485,
	"./sw": 486,
	"./sw.js": 486,
	"./ta": 487,
	"./ta.js": 487,
	"./te": 488,
	"./te.js": 488,
	"./tet": 489,
	"./tet.js": 489,
	"./tg": 490,
	"./tg.js": 490,
	"./th": 491,
	"./th.js": 491,
	"./tl-ph": 492,
	"./tl-ph.js": 492,
	"./tlh": 493,
	"./tlh.js": 493,
	"./tr": 494,
	"./tr.js": 494,
	"./tzl": 495,
	"./tzl.js": 495,
	"./tzm": 496,
	"./tzm-latn": 497,
	"./tzm-latn.js": 497,
	"./tzm.js": 496,
	"./ug-cn": 498,
	"./ug-cn.js": 498,
	"./uk": 499,
	"./uk.js": 499,
	"./ur": 500,
	"./ur.js": 500,
	"./uz": 501,
	"./uz-latn": 502,
	"./uz-latn.js": 502,
	"./uz.js": 501,
	"./vi": 503,
	"./vi.js": 503,
	"./x-pseudo": 504,
	"./x-pseudo.js": 504,
	"./yo": 505,
	"./yo.js": 505,
	"./zh-cn": 506,
	"./zh-cn.js": 506,
	"./zh-hk": 507,
	"./zh-hk.js": 507,
	"./zh-tw": 508,
	"./zh-tw.js": 508
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 818;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_result_modal_quiz_result_modal__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicQuizComponent = /** @class */ (function () {
    function TopicQuizComponent(navCtrl, navParams, viewCtrl, modalCtrl, alertCtrl, nativeAudio, userApi, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.nativeAudio = nativeAudio;
        this.userApi = userApi;
        this.auth = auth;
        this.topic = navParams.get("collection");
        this.currentUser = this.auth.currentUser;
        console.log(this.currentUser);
        this.quizScore = 0;
        this.questionPoints = [0, 0, 0, 0, 0];
        this.topicTitle = this.topic.collectionName;
        this.btnStyle = "";
        this.disableButtons = false;
    }
    TopicQuizComponent.prototype.ionViewDidEnter = function () {
        this
            .quizSlides
            .lockSwipes(true);
    };
    TopicQuizComponent.prototype.ionViewDidLoad = function () {
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
    TopicQuizComponent.prototype.checkAnswer = function (e, i, option) {
        var _this = this;
        this.questionPoints[i] = option.points;
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
                    .auth
                    .updateUserAchievement(_this.currentUser, _this.quizScore, _this.questionPoints, _this.topicTitle);
                _this.showResultPage();
                _this
                    .nativeAudio
                    .play('new_badge');
            }
        }, 1000);
    };
    TopicQuizComponent.prototype.nextSlide = function () {
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
    TopicQuizComponent.prototype.showLeaveConfirm = function () {
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
    TopicQuizComponent.prototype.showResultPage = function () {
        var _this = this;
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_5__quiz_result_modal_quiz_result_modal__["a" /* QuizResultComponent */], { quizScore: this.quizScore });
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
    ], TopicQuizComponent.prototype, "quizSlides", void 0);
    TopicQuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'topic-quiz',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/topic-quiz/topic-quiz.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Quiz\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="showLeaveConfirm()">\n          <span ion-text color="primary">Cancel</span>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-slides #quizSlides>\n      <ion-slide *ngFor="let question of topic.questionList; index as i">\n        <h3>{{question.question}}</h3>\n        <ion-buttons *ngFor="let option of question.options">\n          <button ion-button block large \n            [ngClass]="[btnStyle]"\n            [disabled]="disableButtons"\n            (click)="checkAnswer($event, i, option)">\n            {{option.description}}\n          </button>\n        </ion-buttons>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/topic-quiz/topic-quiz.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TopicQuizComponent);
    return TopicQuizComponent;
}());

//# sourceMappingURL=topic-quiz.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_menu_topic_menu__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomNavBarPage = /** @class */ (function () {
    function CustomNavBarPage(event, navCtrl, menuCtrl, navParams, auth, userApi) {
        var _this = this;
        this.event = event;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.userApi = userApi;
        this
            .auth
            .getDBCurrentUser()
            .snapshotChanges()
            .subscribe(function (item) {
            _this.totalScore = __WEBPACK_IMPORTED_MODULE_6_lodash__["first"](__WEBPACK_IMPORTED_MODULE_6_lodash__["filter"](item, function (elem) {
                return elem.key == "totalScore";
            }))
                .payload
                .toJSON();
        });
    }
    CustomNavBarPage.prototype.ionViewDidLoad = function () { };
    CustomNavBarPage.prototype.gotoHomepage = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    CustomNavBarPage.prototype.gotoAchievement = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__achievement_achievement__["a" /* AchievementPage */]);
    };
    CustomNavBarPage.prototype.openMenu = function () {
        this
            .menuCtrl
            .open();
    };
    CustomNavBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'custom-nav-bar',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/'<ion-toolbar color="lightest">\n  <ion-row>\n    <ion-col col-3>\n      <ion-buttons start>\n        <button ion-button menuToggle (click)="openMenu()">\n          <ion-icon name="menu" color="secondary-lightest"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-6 class="logo_properties">\n      <div>\n        <img src="assets/imgs/logo_toolbar.png" alt="ZeroPlastic logo" (click)="gotoHomepage()">\n      </div>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="gotoAchievement()">\n          <ion-badge item-end>{{totalScore}}</ion-badge>\n          <ion-icon name="trophy" color="secondary-lightest"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 828:
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

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        this.thresholdTop = 100;
        this.thresholdBottom = 100;
    }
    ContentDrawerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementClass(this.element.nativeElement, "map-drawer", true);
        document.getElementsByClassName("map-drawer")[0].setAttribute("data-content", "Scroll up to see legend");
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
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.platform.height() - (this.handleHeight) + 'px');
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
            document.getElementsByClassName("map-drawer")[0].setAttribute("data-content", topDiff >= bottomDiff ? "Scroll up" : "Scroll down");
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
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', _this.platform.height() - (_this.handleHeight) + 'px');
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

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        var content = this
            .element
            .nativeElement
            .getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this
            .renderer
            .setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this
            .renderer
            .setElementStyle(this.header, 'background-size', 'cover');
        this
            .renderer
            .setElementStyle(mainContent, 'position', 'absolute');
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
        var div = document.getElementsByName('ios-arrow-down')[0];
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
            this.rotate(180, 0);
            if (ev.scrollTop > 250) {
                this.rotate(0, 180);
            }
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this
            .renderer
            .setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    };
    ParallaxHeaderDirective.prototype.rotate = function (start, end) {
        var div = document.getElementsByName('ios-arrow-down')[0];
        var rotated = false, deg = rotated
            ? start
            : end;
        div.style.webkitTransform = 'rotate(' + deg + 'deg)';
        div.style.transform = 'rotate(' + deg + 'deg)';
        div.style.transition = 'linear 0.3s';
        rotated = !rotated;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
}());

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BadgesPipe = /** @class */ (function () {
    function BadgesPipe() {
    }
    BadgesPipe.prototype.transform = function (achieved, index) {
        if (achieved == 1) {
            return badgeList[index].unlockImgUrl;
        }
        else {
            return badgeList[index].lockImgUrl;
        }
    };
    BadgesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'badges',
        })
    ], BadgesPipe);
    return BadgesPipe;
}());

var badgeList = [
    {
        title: "Novice",
        minPoints: 0,
        unlockImgUrl: "assets/imgs/1st-LEVEL.png",
        lockImgUrl: "assets/imgs/bunny.png"
    }, {
        title: "Assistant",
        minPoints: 25,
        unlockImgUrl: "assets/imgs/2nd-LEVEL.png",
        lockImgUrl: "assets/imgs/bunny.png"
    }, {
        title: "Advanced",
        minPoints: 60,
        unlockImgUrl: "assets/imgs/3rd-LEVEL.png",
        lockImgUrl: "assets/imgs/bunny.png"
    }, {
        title: "Expert",
        minPoints: 100,
        unlockImgUrl: "assets/imgs/4th-LEVEL.png",
        lockImgUrl: "assets/imgs/bunny.png"
    }, {
        title: "Master Environmentalist",
        minPoints: 150,
        unlockImgUrl: "assets/imgs/5th-LEVEL.png",
        lockImgUrl: "assets/imgs/bunny.png"
    }
];
//# sourceMappingURL=badges.js.map

/***/ })

},[519]);
//# sourceMappingURL=main.js.map