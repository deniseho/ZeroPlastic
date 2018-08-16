webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_game__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alternatives_alternatives__ = __webpack_require__(456);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_topic_quiz_topic_quiz__ = __webpack_require__(402);
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
        this.tabs = ["Problem", "Cause", "Effect", "Solution", "Quiz"];
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
    TopicOnePage.prototype.startQuiz = function (num) {
        var modal = this
            .modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_3__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */], { "num": num });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-one',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/'<ion-header>\n    <custom-nav-bar></custom-nav-bar>\n    <ion-content #scroll scrollX="true" scrollY="false" style="height: 50px;">\n        <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)" [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'\n                [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}">\n                {{tab}}\n            </ion-segment-button>\n        </ion-segment>\n\n        <!-- here is our dynamic line  "indicator"-->\n        <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}"></div>\n    </ion-content>\n</ion-header>\n\n<ion-content>\n    <!--PROBLEM-->\n    <ion-slides #SwipedTabsSlider (ionSlideDrag)="animateIndicator($event)" (ionSlideWillChange)="updateIndicatorPosition()"\n        (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <ion-slide>\n            <!-- Icons for scrolling\n            <ion-icon class="arrow-up-style" name="arrow-dropup-circle"></ion-icon>\n            <ion-icon class="arrow-down-style" name="arrow-dropdown-circle"></ion-icon>-->\n\n            <div>\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                    <!--About plastic problem1-->\n                        <h1 class="slide-title-main">About plastic</h1>\n                        <h1 class="slide-title2-main">Issue</h1>\n                        <div class="line-separator-short"></div>\n                        <h4 class="slide-subtitle-secondary">322</h4>\n                        <h3 class="slide-subtitle2-secondary">millions</h3>\n                        <img class="infographics-image" src="assets/imgs/icn_tons.png">\n                        <p>of plastic were produced in 2015, the same weight as 900 Empire state buildings.</p>\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n\n                <div class="sea-bg-gradient">\n                    <div class="container-slides-content">\n                        <!--About plastic problem2-->\n                        <div class="vertical-center">\n                            <h4 class="slide-subtitle-secondary">8</h4>\n                            <h3 class="slide-subtitle2-secondary">millions</h3>\n                            <img class="infographics-image" src="assets/imgs/icn_tons.png">\n                            <p>8 millions of  this plastic enters our oceans each year, equivalent to emptying a garbage truck of plastic\n                                into an ocean every minute. This figure is estimated to rise to 60 tons per minute by 2050.</p>\n                            <img class="icon_secondary_property" src="assets/imgs/icn_garbage_truck_3_small.png">\n                        </div>\n                    </div>\n\n                    <div class="container-slides-content">\n                        <!--About plastic problem3-->\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_degrading_bottle.png">\n                            <div class="line-separator-long"></div>\n                            <p class="subtitle-small">Plastic</p>\n                            <h4 class="slide-subtitle-line-before">never fully biodegrade</h4>\n                            <p>Plastics photodegrade, which means that they break down\n                                into smaller, and smaller pieces to the microscopic level. Any toxic additives contained within the\n                                plastics are released into the ocean.</p>\n                        </div>\n                    </div>\n\n                    <div class="container-slides-content">\n                        <!--About plastic problem4-->\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_ocean_percentage.png">\n                            <div class="line-separator-long"></div>\n                            <p class="p_line_before">97% of the Earth’s water supply is contained in the ocean. Plastic waste is greatly endangering the world’s\n                                water supply. Plastics dumped in landfills form dangerous chemicals, and when these chemicals seep\n                                underground, they degrade the water quality.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </ion-slide>\n\n        <!--CAUSE-->\n        <ion-slide>\n            <!--About plastic cause1-->\n            <div>\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                        <h1 class="slide-title-main">About plastic</h1>\n                        <h1 class="slide-title2-main">Cause</h1>\n                        <div class="line-separator-short"></div>\n                        <img class="icon_property_coins" src="assets/imgs/icn_coins.png">\n                        <h4 class="slide-subtitle">Plastics are cheap and easy to manufacture</h4>\n                        <p>Plastics have been used to make countless utilities, including plastic\n                            water bottles, straws, food containers, lids, and packaging wrappers.</p>\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n\n                <div class="sea-bg-gradient">\n                    <!--About plastic cause2-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_trash_full.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Plastics are easily and haphazardly discarded</h4>\n                            <p>The use of plastic items such as bags, wrappers, bottles, straws and food containers is\n                                typically very short. Whenever plastics are thrown away, they continue to persist within\n                                the environment.</p>\n                        </div>\n                    </div>\n\n                    <!--About plastic cause3-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_fishing_net.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Plastic decomposes slowly</h4>\n                            <p>Plastics are slow to decompose due to their strong chemical bonds that make plastic items\n                                durable. The EPA has stated that “every bit of plastic ever made still exists”. A plastic\n                                bottle can take up to 400 years to decompose, while plastic fishing lines can take more than 600 years.</p>\n                        </div>\n                    </div>\n\n                    <!--About plastic cause4-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_fishing_ship.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">The shipping and fishing industry</h4>\n                            <p>are major contributors of plastic pollution. Plastic waste from ships, sea accidents, and nets\n                                used for fishing emit toxins into the water which severely affects marine creatures.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <!--EFFECT-->\n        <ion-slide>\n            <div>\n                <!--About plastic effect1-->\n                <div class="container-slides-content sea-gradient-wrapper">\n                    <div class="vertical-center">\n                        <h1 class="slide-title-main">About plastic</h1>\n                        <h1 class="slide-title2-main">Effect</h1>\n                        <div class="line-separator-short"></div>\n                        <h4 class="slide-subtitle">Threatens the life of numerous sea creatures</h4>\n                        <p>These marine creatures ingest plastic mainly by mistaking it as food, and can also be endangered\n                            by plastics through becoming entangled in plastic products such as fishing nets, and can holders.\n                            44% of all seabird species, along with sea turtles, and cetaceans have been documented to have\n                            plastic debris in or around their bodies.</p>\n                    </div>\n                    <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n                </div>\n                <div class="sea-bg-gradient">\n                    <!--About plastic effect2-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_human.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Affects humans</h4>\n                            <p>Plastic pollution in our oceans severely affects humans in numerous ways. Studies have shown\n                                that toxins in plastics can cause several health issues such as cancer, and immune system\n                                problems. Ingestion of plastic by fish and other marine creatures finds its way into peoples’\n                                bodies when they consume marine food.</p>\n                        </div>\n                    </div>\n\n                    <!--About plastic effect3-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_ecosystem.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Threat to our ecosystem</h4>\n                            <p>Plastic pollution poses a serious threat to our ecosystems. Plastics in our oceans can lead\n                                to the invasion of non-indigenous species, and organisms in marine colonies. </p>\n                        </div>\n                    </div>\n\n                    <!--About plastic effect4-->\n                    <div class="container-slides-content">\n                        <div class="vertical-center">\n                            <img class="icon_property" src="assets/imgs/icn_garbage_patch.png">\n                            <div class="line-separator-long"></div>\n                            <h4 class="slide-subtitle">Garbage patches</h4>\n                            <p>Plastic pollution has resulted in the creation of several floating garbage patches in our\n                                oceans called gyres. The Great Pacific Garbage patch located in the North Pacific Ocean off\n                                the coast of California is reported to be the largest ocean garbage patch in the world.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <!--SOLUTION-->\n        <ion-slide>\n            <!--About plastic solution1-->\n            <div class="container-slides-content sea-gradient-wrapper">\n                <div class="vertical-center">\n                    <h1 class="slide-title-main">About plastic</h1>\n                    <h1 class="slide-title2-main">Solution</h1>\n                    <div class="line-separator-short"></div>\n                    <h4 class="slide-subtitle">Reduce use of single-use plastics</h4>\n                    <p>As 60-90% of marine litter is plastic-based refusing  any single-use plastics, reducing our\n                        dependence on plastics, and  carrying  reusable versions of these products will greatly help to\n                        reduce the amount of new plastics in circulation.</p>\n                </div>\n                <img class="sea-gradient" src="assets/imgs/sea_gradient.png">\n            </div>\n\n            <div class="sea-bg-gradient">\n                <!--About plastic solution2-->\n                <div class="container-slides-content">\n                    <div class="vertical-center">\n                        <img class="icon_property" src="assets/imgs/icn_recycle.png">\n                        <div class="line-separator-long"></div>\n                        <h4 class="slide-subtitle">Recycle</h4>\n                        <p>Recycling helps keep single-use plastics out of the ocean, and reduces the amount of new plastics\n                            in circulation.</p>\n                    </div>\n                </div>\n\n                <!--About plastic solution3-->\n                <div class="container-slides-content">\n                    <div class="vertical-center">\n                        <img class="icon_property" src="assets/imgs/icn_no_microbread.png">\n                        <div class="line-separator-long"></div>\n                        <h4 class="slide-subtitle">Avoid using products containing microbeads</h4>\n                        <p>Microbeads have become a growing source of plastic pollution in recent years. You can avoid\n                            products containing microbeads by looking for polythelene and polypropylene on the ingredients\n                            label of cosmetic products, and toiletries such as face wash, and shower gel. </p>\n                    </div>\n                </div>\n\n                <!--About plastic solution4-->\n                <div class="container-slides-content">\n                    <div class="vertical-center">\n                        <img class="icon_property" src="assets/imgs/icn_non-profit.png">\n                        <div class="line-separator-long"></div>\n                        <h4 class="slide-subtitle">Support organisations adressing plastic pollution</h4>\n                        <p>Non-profit organisations dealing with the problem of ocean plastic include the Oceanic Society\n                            Plastic Soup Foundation, and Plastic Pollution Coalition.</p>\n                    </div>\n                </div>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="container-slides-content">\n                <div class="vertical-center">\n                    <h4 class="slide-subtitle">Test your knowledge with this quiz</h4>\n                    <p>Earn points and become a senior ecologist!</p>\n                    <p></p>\n                    <!-- <h3>Score: {{quizScore}}</h3> -->\n                    <button ion-button (click)="startQuiz(1)">{{quizButtonText}}</button>\n                </div>\n            </div>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TopicOnePage);
    return TopicOnePage;
}());

//# sourceMappingURL=topic-one.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(db, auth) {
        this.db = db;
        this.auth = auth;
        this.$userKey = '-LJU-nVcB4Jp-UXcA6dE';
        this.userAchievementList = this.db.list('/userAchievementList');
        this.totalScore = 0;
        this.userList = this.db.list('/users');
    }
    UserProvider.prototype.getUsers = function () {
        return this.userList;
    };
    UserProvider.prototype.ionViewDidEnter = function () {
    };
    UserProvider.prototype.insertUser = function (user) {
        this.userList.push({
            name: user.name,
            email: user.email,
            password: user.password,
        });
    };
    UserProvider.prototype.updateUser = function (user) {
        this.userList.update(this.$userKey, user);
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

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_topic_quiz_topic_quiz__ = __webpack_require__(402);
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
            .create(__WEBPACK_IMPORTED_MODULE_2__components_topic_quiz_topic_quiz__["a" /* TopicQuizComponent */], { "num": num });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]) === "function" && _a || Object)
    ], TopicTwoPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scroll'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _b || Object)
    ], TopicTwoPage.prototype, "scroll", void 0);
    TopicTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-topic-two',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/'<ion-header>\n<!-- \n    <ion-navbar>\n      <ion-title>Topic Two</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar></custom-nav-bar>    \n  <ion-content  #scroll scrollX="true" scrollY="false" style="height: 50px;">\n    <ion-segment  class="SwipedTabs-tabs">\n      <ion-segment-button *ngFor=\'let tab of tabs ; let i = index \' value="IngoreMe" (click)="selectTab(i)"\n      [ngClass]=\'{ "SwipedTabs-activeTab" : ( this.SwipedTabsSlider  && ( this.SwipedTabsSlider.getActiveIndex() === i || (  tabs.length -1 === i&& this.SwipedTabsSlider.isEnd()))) }\'  [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" >\n        {{tab}}\n      </ion-segment-button>\n    </ion-segment>\n  \n    <!-- here is our dynamic line  "indicator"-->\n    <div id=\'indicator\' class="SwipedTabs-indicatorSegment" [ngStyle]="{\'width.px\': (this.tabElementWidth_px)}" ></div>\n  </ion-content>\n  </ion-header>\n  \n  <ion-content >\n  \n    <ion-slides #SwipedTabsSlider  (ionSlideDrag)="animateIndicator($event)"\n                (ionSlideWillChange)="updateIndicatorPosition()"\n                (ionSlideDidChange)="updateIndicatorPosition()"\n                (pan)="updateIndicatorPosition()"\n                [pager]="false"\n          >\n      <ion-slide>\n        <h1>Problem About Plastics</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Cause</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Effect</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Importance</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Quiz</h1>\n        <button ion-button (click)="startQuiz(2)">{{quizButtonText}}</button>\n      </ion-slide>\n    </ion-slides>\n  \n  \n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/ }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _e || Object])
    ], TopicTwoPage);
    return TopicTwoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=topic-two.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 213:
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
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 257:
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
webpackEmptyAsyncContext.id = 257;

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_model__ = __webpack_require__(812);
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
            console.log(data);
        });
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
        if (credentials.name === null || credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            this
                .db
                .list('users')
                .push(new __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */]({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password
            }));
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
                .subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    AuthServiceProvider.prototype.getCurrentUser = function () {
        if (this.currentUser == undefined) {
        }
        else {
            return this.currentUser;
        }
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicQuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quiz_result_quiz_result__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_questions__ = __webpack_require__(813);
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
        this.questionScore = [0, 0, 0, 0, 0];
        this.currentUser = this.auth.currentUser;
        var collectionNum = this
            .navParams
            .get("num");
        if (collectionNum == "1") {
            this.topic = __WEBPACK_IMPORTED_MODULE_6__shared_questions__["a" /* topic1 */];
            this.topicTitle = "topic1";
        }
        else if (collectionNum == "2") {
            this.topic = __WEBPACK_IMPORTED_MODULE_6__shared_questions__["b" /* topic2 */];
            this.topicTitle = "topic2";
        }
        this.btnStyle = "";
        this.quizScore = 0;
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
            .create(__WEBPACK_IMPORTED_MODULE_5__quiz_result_quiz_result__["a" /* QuizResultComponent */], {
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
    ], TopicQuizComponent.prototype, "quizSlides", void 0);
    TopicQuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topic-quiz',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/topic-quiz/topic-quiz.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Quiz\n      </ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="showLeaveConfirm()">\n          <span ion-text color="primary">Cancel</span>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-slides #quizSlides>\n      <ion-slide *ngFor="let question of topic.questionList; index as i">\n        <h3>{{question.question}}</h3>\n        <ion-buttons *ngFor="let option of question.options">\n          <button ion-button block large \n            [ngClass]="[btnStyle]"\n            [disabled]="disableButtons"\n            (click)="checkAnswer($event, i, option)">\n            {{option.description}}\n          </button>\n        </ion-buttons>\n      </ion-slide>\n    </ion-slides>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/topic-quiz/topic-quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TopicQuizComponent);
    return TopicQuizComponent;
}());

//# sourceMappingURL=topic-quiz.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(33);
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
        this.quizScore = navParams.get('quizScore');
        this.totalScore = this.auth.getCurrentUser().totalScore;
    }
    QuizResultComponent.prototype.ionViewDidLoad = function () { };
    QuizResultComponent.prototype.close = function () {
        this
            .viewCtrl
            .dismiss({ 'action': 'remove', 'quizScore': this.quizScore });
    };
    QuizResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quiz-result',template:/*ion-inline-start:"/Users/deniseho/plastic/src/components/quiz-result/quiz-result.html"*/'<!--template for overlay-->\n\n<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Result\n        </ion-title>\n        <ion-buttons start>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Quiz score: {{quizScore}}</h1>\n    <h1>Total score: {{totalScore}}</h1>\n    <!-- <h1 *ngIf=\'badge\'>Badge: {{badge.title}}</h1>\n    <img *ngIf=\'badge\'[src]=\'badge.imgUrl\'> -->\n    <button ion-button (click)="close()">\n        <span ion-text>Confirm</span>\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/components/quiz-result/quiz-result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], QuizResultComponent);
    return QuizResultComponent;
}());

//# sourceMappingURL=quiz-result.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__ = __webpack_require__(182);
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
            bins
                .scale
                .set(1.2);
            bins.x = _this.app.screen.width / 2;
            bins.y = _this.app.screen.height;
            container.addChild(bins);
            _this
                .app
                .stage
                .addChild(container);
            // let graphics = new PIXI.Graphics(); graphics.lineStyle(1);
            // graphics.beginFill(0xFF0000, 0.7); graphics.drawRect(0,
            // self.app.screen.height - 100, self.app.screen.width / 2, 100);
            // graphics.endFill(); graphics.lineStyle(1); graphics.beginFill(0x33FF00, 0.7);
            // graphics.drawRect(self.app.screen.width / 2, self.app.screen.height - 100,
            // self.app.screen.width / 2, 100); graphics.endFill(); self   .app   .stage
            // .addChild(graphics);
        };
        drawSeaBottom();
    };
    GamePage.prototype.exitAlert = function () {
        var _this = this;
        this.stopGame();
        var prompt = this
            .alertCtrl
            .create({
            title: 'Are you sure to exit?',
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-game',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/game/game.html"*/'<!-- <ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header> -->\n\n<ion-content>\n  <div #content ion-fixed>\n    <ion-grid ion-fixed>\n      <ion-row>\n        <ion-col col-4>\n          <h4>Score: {{gameScore}}</h4>\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button color="light" outline (click)="toggleGame()">\n            <ion-icon name="{{gamePlay?\'pause\':\'play\'}}"></ion-icon>\n          </button>\n          <button ion-button color="light" outline (click)="exitAlert()">\n            <ion-icon name="log-out"></ion-icon>\n          </button>\n\n        </ion-col>\n        <ion-col col-4>\n          <h4>Life: {{gameLife}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/game/game.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], GamePage);
    return GamePage;
    var GamePage_1;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        this.selectedItemUrl = "plastic-bag.jpg";
    }
    AlternativesPage.prototype.ionViewDidLoad = function () { };
    AlternativesPage.prototype.selectAltItem = function (e) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.alternativeMenu > *').removeClass('active');
        __WEBPACK_IMPORTED_MODULE_2_jquery__(e.target).addClass("active");
        if (e.target.name == "basket") {
            this.selectedItemUrl = "plastic-bag.jpg";
        }
        else {
            this.selectedItemUrl = "alt_bottle.jpg";
        }
    };
    AlternativesPage.prototype.arrawDivClick = function () { };
    AlternativesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-alternatives',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/alternatives/alternatives.html"*/'<ion-header>\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content text-center parallax-header>\n\n  <div class="alternativeMenu" (click)="selectAltItem($event)">\n    <button ion-button outline icon-only name="basket" class="active">\n      <ion-icon name="basket"></ion-icon>\n    </button>\n    <button ion-button outline icon-only name="beer">\n      <ion-icon name="beer"></ion-icon>\n    </button>\n    <button ion-button outline icon-only name="restaurant">\n      <ion-icon name="restaurant"></ion-icon>\n    </button>\n    <button ion-button outline icon-only name="football">\n      <ion-icon name="football"></ion-icon>\n    </button>\n  </div>\n\n  <div class="img header-image">\n    <img src="assets/imgs/{{selectedItemUrl}}">\n  </div>\n  <div class="main-content">\n    <span color="secondary" text-center>Scroll down</span>\n    <div class="arrawDiv" (click)="arrawDivClick">\n      <ion-icon name="ios-arrow-down"></ion-icon>\n    </div>\n    <ion-slides pager>\n      <ion-slide>\n        <h1>Alternative 1</h1>\n        <div class="img">\n          <img src="assets/imgs/canvas-bag.jpg">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <h1>Alternative 2</h1>\n        <div class="img">\n          <img src="assets/imgs/canvas-bag.jpg">\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <h1>Alternative 3</h1>\n        <div class="img">\n          <img src="assets/imgs/canvas-bag.jpg">\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/alternatives/alternatives.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], AlternativesPage);
    return AlternativesPage;
}());

//# sourceMappingURL=alternatives.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            duration: 2000,
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_menu_topic_menu__ = __webpack_require__(68);
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
        console.log(new Date().toISOString());
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__ = __webpack_require__(68);
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
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-register',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/register/register.html"*/'<!--<ion-header>\n\n  <ion-navbar color="lightest">\n  </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <ion-card>\n        <ion-card-header>Register</ion-card-header>\n        <img class="avatar" style="width: 110px" src="assets/imgs/avatar_temp.png">\n        <div>\n          <form (ngSubmit)="register()" #registerForm="ngForm">\n            <ion-list radio-group="">\n              <ion-list-header no-lines="">How old are you?</ion-list-header>\n              <ion-item>\n                <ion-radio checked="true" value="9-13"></ion-radio>\n                <ion-label>9-13</ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-radio value="14+"></ion-radio>\n                <ion-label>14 +</ion-label>\n              </ion-item>\n\n            </ion-list>\n            <ion-list inset="">\n              <ion-item>\n                <ion-label stacked>Nickname</ion-label>\n                <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>Parent email</ion-label>\n                <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n              </ion-item>\n            </ion-list>\n\n            <div padding>\n              <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n              <button ion-button color="primary" block clear type="button" (click)="backToLogin()">Login</button>\n            </div>\n            <button class="skip-button" ion-button color="secondary" clear item-start icon-end (click)="gotoHomepage()">Skip <ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n\n          </form>\n        </div>\n\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n  <img class="login-background" src="assets/imgs/bg-log-in-2.png">\n  <!--<div>\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>-->\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/register/register.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(33);
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
        var score = this.currentUser.totalScore;
        if (score < 25) {
            this.badgeRecord = [1, 0, 0, 0, 0];
        }
        else if (score > 25 && score < 60) {
            this.badgeRecord = [1, 1, 0, 0, 0];
        }
        else if (score > 61 && score < 100) {
            this.badgeRecord = [1, 1, 1, 0, 0];
        }
        else if (score > 100 && score < 150) {
            this.badgeRecord = [1, 1, 1, 1, 0];
        }
        else if (score > 150) {
            this.badgeRecord = [1, 1, 1, 1, 1];
        }
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-achievement',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/'<ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Name: {{currentUser.name}}</h3>\n  <h4>Email: {{currentUser.email}}</h4>\n  <h4>Total Score: {{currentUser.totalScore}}</h4>\n  <h4>Badges: </h4>\n  <div class="badgeRecord" *ngFor="let item of badgeRecord; index as i">\n    <img src="{{item|badges: i}}">\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/ }),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_one_topic_one__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_two_topic_two__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_three_topic_three__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_topic_four_topic_four__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_topic_five_topic_five__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_topic_menu_topic_menu__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_achievement_achievement__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_game_game__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_audio__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__firebase_credentials__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_fullpage__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_fullpage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ngx_fullpage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_user_service_user_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_alternatives_alternatives__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_parallax_header_parallax_header__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_toast_service_toast_service__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_badges_badges__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_topic_quiz_topic_quiz__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_quiz_result_quiz_result__ = __webpack_require__(403);
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
                __WEBPACK_IMPORTED_MODULE_34__components_quiz_result_quiz_result__["a" /* QuizResultComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_alternatives_alternatives__["a" /* AlternativesPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_content_drawer_content_drawer__["a" /* ContentDrawerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__directives_parallax_header_parallax_header__["a" /* ParallaxHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_32__pipes_badges_badges__["a" /* BadgesPipe */]
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
                __WEBPACK_IMPORTED_MODULE_34__components_quiz_result_quiz_result__["a" /* QuizResultComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_alternatives_alternatives__["a" /* AlternativesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_27__providers_user_service_user_service__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
                __WEBPACK_IMPORTED_MODULE_31__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_fullpage_js__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_fullpage_js__);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__["a" /* TopicOnePage */], avatar: 'assets/imgs/icn_plastic_pollution.png' },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__["a" /* TopicTwoPage */], avatar: 'assets/imgs/icn_plastics.png' },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__["a" /* TopicThreePage */], avatar: 'assets/imgs/icn_octopus.png' },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__["a" /* TopicFourPage */], avatar: 'assets/imgs/icn_take_action.png' },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__["a" /* TopicFivePage */], avatar: 'assets/imgs/icn_activities.png' },
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-header>\n\n  </ion-header>\n\n  <ion-content class="menu-gradient menu-bottom">\n    <!--<ion-list>-->\n      <!--<button ion-item icon-only (click)="gotoHomepage()">-->\n          <!--<ion-icon name="home"></ion-icon>-->\n        <!--</button>-->\n    <!--</ion-list>-->\n    <ion-list class="profile_section_wrapper">\n      <ion-item class="profile_section bg-color">\n        <ion-thumbnail item-start>\n          <img src="assets/imgs/avatar_temp.png">\n        </ion-thumbnail>\n        <h2 class="points content-color">25 points</h2>\n        <p class="badges content-color">1/6 badges</p>\n        <img class="progress-bar" src="assets/imgs/progress_bar.png">\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header class="bg-color">Discover</ion-list-header>\n      <ion-item class="bg-color" ion-item *ngFor="let p of pages" (click)="gotoPage(p)">\n          <ion-avatar item-start>\n            <img class="menu-avatar" src={{p.avatar}}>\n          </ion-avatar>\n          <h2 class="content-color">{{p.title}}</h2>\n          <ion-icon item-end ios="ios=ios-arrow-forward" md="md-arrow-forward" color="gray"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <button class="log-out" ion-button color="secondary" round="" item-end icon-start (click)="logout()">\n        <ion-icon color="light" name="log-out"> </ion-icon>\n        Logout\n      </button>\n    </ion-list>\n\n    <img src="assets/imgs/seaweed-2.png" class="seaweed-property">\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/deniseho/plastic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_service_user_service__ = __webpack_require__(183);
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
    function TopicMenu(navCtrl, navParams, auth, userApi, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.userApi = userApi;
        this.toast = toast;
        this.pages = [
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */] },
        ];
        this.currentUser = this.auth.currentUser;
    }
    TopicMenu.prototype.ionViewDidLoad = function () {
        //0 = first time login
        //1= not first time login
        if (this.currentUser.firstLogin == 0) {
            this
                .toast
                .showToast("Get sign up bonus 5 points", "badgeToast");
            this.currentUser.totalScore += 5;
            this.currentUser.firstLogin = 1;
            this.userApi.updateUser(this.currentUser);
        }
        else {
            this
                .toast
                .showToast("Hi, " + this.currentUser.name + "! Welcome back.", "textToast");
        }
    };
    TopicMenu.prototype.gotoPage = function (p) {
        this
            .navCtrl
            .push(p);
    };
    TopicMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/'<!--HOME-->\n\n<ion-header>\n  <custom-nav-bar></custom-nav-bar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card class="menuList" *ngFor="let p of pages" (click)="gotoPage(p.component)">\n    <div class="card-title">{{p.title}}</div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_service_user_service__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], TopicMenu);
    return TopicMenu;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password, totalScore, topic1, topic2, topic3, topic4, topic5, firstLogin) {
        this.name = (name != null || name != undefined) ? name : "guest";
        this.email = (email != null || email != undefined) ? email : "guest";
        this.password = (password != null || password != undefined) ? password : "guest";
        this.totalScore = (totalScore != null || totalScore != undefined) ? totalScore : 0;
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

/***/ 813:
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

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_menu_topic_menu__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(33);
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
    function CustomNavBarPage(event, navCtrl, menuCtrl, navParams, auth) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.totalScore = this
            .auth
            .currentUser
            .totalScore;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 919:
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

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

},[469]);
//# sourceMappingURL=main.js.map