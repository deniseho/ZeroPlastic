webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(56);
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
    }
    TopicMenu.prototype.gotoTopicOne = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */]);
    };
    TopicMenu.prototype.gotoTopicTwo = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */]);
    };
    TopicMenu.prototype.gotoTopicThree = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */]);
    };
    TopicMenu.prototype.gotoTopicFour = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */]);
    };
    TopicMenu.prototype.gotoTopicFive = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */]);
    };
    TopicMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar> -->\n\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <!-- <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p> -->\n    <div class="menuList" (click)="gotoTopicOne()">topic 1</div>\n    <div class="menuList" (click)="gotoTopicTwo()">topic 2</div>\n    <div class="menuList" (click)="gotoTopicThree()">topic 3</div>\n    <div class="menuList" (click)="gotoTopicFour()">topic 4</div>\n    <div class="menuList" (click)="gotoTopicFive()">topic 5</div>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-menu/topic-menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicMenu);
    return TopicMenu;
}());

//# sourceMappingURL=topic-menu.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
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
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievement_achievement__ = __webpack_require__(290);
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
                icon: ''
            }, {
                title: 'Achivement',
                icon: ''
            }, {
                title: 'Community Feed',
                icon: ''
            }
        ];
    }
    AccountMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountMenuPage');
    };
    AccountMenuPage.prototype.pageSelected = function (page) {
        if (page.title == 'Profile') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
        }
        else if (page.title == 'Achivement') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__achievement_achievement__["a" /* AchievementPage */]);
        }
    };
    AccountMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-account-menu',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/'<ion-header>\n    <custom-nav-bar [title]="\'topicOne\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let page of pages" (click)="pageSelected(page)">\n      {{ page.title }}\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/account-menu/account-menu.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountMenuPage);
    return AccountMenuPage;
}());

//# sourceMappingURL=account-menu.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pixi_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pixi_js__);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        console.log(window.innerWidth, window.innerHeight);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        // var type = "WEBGL";
        // if (!PIXI.utils.isWebGLSupported) {
        //   type = "canvas";
        // }
        // PIXI
        //   .utils
        //   .sayHello(type);
        var app = new __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Application"](window.innerWidth, window.innerHeight, { backgroundColor: 0x1099bb });
        this
            .content
            .nativeElement
            .appendChild(app.view);
        // create a new Sprite from an image path
        var bunny = __WEBPACK_IMPORTED_MODULE_2_pixi_js__["Sprite"]
            .fromImage('../assets/imgs/bunny.png');
        // center the sprite's anchor point
        bunny
            .anchor
            .set(0.5);
        // move the sprite to the center of the screen
        bunny.x = app.screen.width / 2;
        bunny.y = app.screen.height / 2;
        app
            .stage
            .addChild(bunny);
        // Listen for animate update
        app
            .ticker
            .add(function (delta) {
            // just for fun, let's rotate mr rabbit a little delta is 1 if running at 100%
            // performance creates frame-independent transformation
            bunny.rotation += 0.1 * delta;
        });
        //     let bg = new PIXI.Graphics();
        //     bg.beginFill(0xcccccc, 0.6);
        //     bg.drawRect(0, 0, window.innerWidth, window.innerHeight);
        //     bg.endFill();
        //     bg.interactive = true;
        //     app
        //       .stage
        //       .addChild(bg);
        //     bg.on('pointerdown', onClick);
        //     bg.on('pointermove', onMove);
        //     function onClick(evt) {
        //       console.log('on
        //  touched ...',evt); } function onMove(evt){   var pos =
        //  evt.data.getLocalPosition(this.parent);
        //       bg.beginFill(Math.random() * 0xffffff, 1);
        //       bg.drawCircle(pos.x, pos.y, 5);
        //       bg.endFill();
        //       console.log('on move...');}
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProfilePage.prototype, "content", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div #content></div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the AchievementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AchievementPage = /** @class */ (function () {
    function AchievementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AchievementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AchievementPage');
    };
    AchievementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-achievement',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/'<!--\n  Generated template for the AchievementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Achievement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n      <ion-card-header>\n        Hi, xxx!\n      </ion-card-header>\n      <ion-card-content>\n        You are an enrironmental expert now!\n        <img src="../assets/imgs/badge01.jpg">\n        <ion-item-divider></ion-item-divider>\n        <ion-row>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n          <ion-col col-3>\n            <img src="../assets/imgs/badge01.jpg">\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/achievement/achievement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AchievementPage);
    return AchievementPage;
}());

//# sourceMappingURL=achievement.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_one_topic_one__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_two_topic_two__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_topic_three_topic_three__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_topic_four_topic_four__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_topic_five_topic_five__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_custom_nav_bar_custom_nav_bar__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_topic_menu_topic_menu__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_menu_account_menu__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_achievement_achievement__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_scrollable_tabs_scrollable_tabs__ = __webpack_require__(472);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_scrollable_tabs_scrollable_tabs__["a" /* ScrollableTabs */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_custom_nav_bar_custom_nav_bar__["a" /* CustomNavBarPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_topic_menu_topic_menu__["a" /* TopicMenu */],
                __WEBPACK_IMPORTED_MODULE_8__pages_topic_one_topic_one__["a" /* TopicOnePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_topic_two_topic_two__["a" /* TopicTwoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_topic_three_topic_three__["a" /* TopicThreePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_topic_four_topic_four__["a" /* TopicFourPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_topic_five_topic_five__["a" /* TopicFivePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_account_menu_account_menu__["a" /* AccountMenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_achievement_achievement__["a" /* AchievementPage */],
                __WEBPACK_IMPORTED_MODULE_20__components_scrollable_tabs_scrollable_tabs__["a" /* ScrollableTabs */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        // rootPage = TopicMenu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_topic_menu_topic_menu__["a" /* TopicMenu */] },
            { title: 'Plastic Pollution', component: __WEBPACK_IMPORTED_MODULE_5__pages_topic_one_topic_one__["a" /* TopicOnePage */] },
            { title: 'About Pollution', component: __WEBPACK_IMPORTED_MODULE_6__pages_topic_two_topic_two__["a" /* TopicTwoPage */] },
            { title: 'Species Affected', component: __WEBPACK_IMPORTED_MODULE_7__pages_topic_three_topic_three__["a" /* TopicThreePage */] },
            { title: 'Take Action', component: __WEBPACK_IMPORTED_MODULE_8__pages_topic_four_topic_four__["a" /* TopicFourPage */] },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_9__pages_topic_five_topic_five__["a" /* TopicFivePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>MENU</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Pages</ion-list-header>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>Settings</ion-list-header>\n        <!-- <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button> -->\n      </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomNavBarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__ = __webpack_require__(125);
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
    function CustomNavBarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomNavBarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomNavBarPage');
    };
    CustomNavBarPage.prototype.gotoHomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_menu_topic_menu__["a" /* TopicMenu */]);
    };
    CustomNavBarPage.prototype.gotoAccountMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_menu_account_menu__["a" /* AccountMenuPage */]);
    };
    CustomNavBarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-nav-bar',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/'<ion-toolbar>\n  <ion-row>\n    <ion-col col-3>\n      <ion-buttons *ngIf="addBack" start>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-6>\n      <ion-buttons *ngIf="addHome">\n        <button ion-button icon-only color="royal" (click)="gotoHomepage()">\n          <ion-title>OUR LOGO</ion-title>\n        </button>\n      </ion-buttons>\n    </ion-col>\n    <ion-col col-3>\n      <ion-buttons *ngIf="addPerson" end>\n        <button ion-button icon-only color="royal" (click)="gotoAccountMenu()">\n          <ion-icon name="person"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n</ion-toolbar>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/custom-nav-bar/custom-nav-bar.html"*/,
            inputs: ['title', 'addBack', 'addHome', 'addPerson'],
            outputs: ['home']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CustomNavBarPage);
    return CustomNavBarPage;
}());

//# sourceMappingURL=custom-nav-bar.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.TopicOnePageRoot = __WEBPACK_IMPORTED_MODULE_2__topic_one_topic_one__["a" /* TopicOnePage */];
        this.TopicTwoPageRoot = __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */];
        this.TopicThreePageRoot = __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */];
        this.TopicFourPageRoot = __WEBPACK_IMPORTED_MODULE_5__topic_four_topic_four__["a" /* TopicFourPage */];
        this.TopicFivePageRoot = __WEBPACK_IMPORTED_MODULE_6__topic_five_topic_five__["a" /* TopicFivePage */];
        this.tabsColor = "default";
        this.tabsMode = "md";
        this.tabsPlacement = "top";
        this.tabToShow = [true, true, true, true, true, true, true, true, true];
        this.scrollableTabsopts = {};
    }
    TabsPage.prototype.ionViewDidEnter = function () {
    };
    TabsPage.prototype.refreshScrollbarTabs = function () {
        this.scrollableTabsopts = { refresh: true };
    };
    TabsPage.prototype.presentChangeOrendationToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Rotate screen to rerendering.',
            duration: 2000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/tabs/tabs.html"*/'<style>\n    .tabbar::after {\n      content: none;\n    }\n  </style>\n  \n  <!--icon and title-->\n  <ion-tabs #ionTabs [scrollable-tabs]="ionTabs" [opts]="scrollableTabsopts" selectedIndex=\'0\' color="{{tabsColor}}" mode=\'{{tabsMode}}\'\n    tabsHighlight="true" tabsPlacement="{{tabsPlacement}}">\n    <ion-tab [root]="HomeRoot" [show]=\'tabToShow[0]\' tabIcon="home" tabTitle="Home"></ion-tab>\n    <ion-tab [root]="CalendarRoot" [show]=\'tabToShow[1]\' tabIcon="calendar" tabTitle="Calendar"></ion-tab>\n    <ion-tab [root]="CameraRoot" [show]=\'tabToShow[2]\' tabIcon="camera" tabTitle="Camera"></ion-tab>\n    <ion-tab [root]="CloudRoot" [show]=\'tabToShow[3]\' tabIcon="cloud" tabTitle="Cloud"></ion-tab>\n    <ion-tab [root]="ContactRoot" [show]=\'tabToShow[4]\' tabIcon="contact" tabTitle="Contact"></ion-tab>\n    <ion-tab [root]="FolderRoot" [show]=\'tabToShow[5]\' tabIcon="folder" tabTitle="Folder"></ion-tab>\n    <ion-tab [root]="MapRoot" [show]=\'tabToShow[6]\' tabIcon="map" tabTitle="Map"></ion-tab>\n    <ion-tab [root]="SettingsRoot" [show]=\'tabToShow[7]\' tabIcon="settings" tabTitle="Settings"></ion-tab>\n    <ion-tab [root]="AboutRoot" [show]=\'tabToShow[8]\' tabIcon="information-circle" tabTitle="About"></ion-tab>\n    </ion-tabs>\n  \n    <ion-list [style.marginTop.px]="200">\n      <ion-item>\n        <ion-label>Color</ion-label>\n        <ion-select [(ngModel)]="tabsColor">\n          <ion-option value="default">Default</ion-option>\n          <ion-option value="primary">Primary</ion-option>\n          <ion-option value="secondary">Secondary</ion-option>\n          <ion-option value="danger">Danger</ion-option>\n          <ion-option value="dark">Dark</ion-option>\n          <ion-option value="light">Light</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Tabs Mode</ion-label>\n        <ion-select [(ngModel)]="tabsMode" (ionChange)="presentChangeOrendationToast()">\n          <ion-option value="md">Material Design</ion-option>\n          <ion-option value="ios">ios</ion-option>\n          <ion-option value="wp">Windows Phone</ion-option>n>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  \n    <ion-grid>\n      <ion-item>\n        Demonstarte ion-tab [show] property.\n      </ion-item>\n      <ion-row>\n        <ion-col width-50>\n          <ion-list>\n            <ion-item>\n              <ion-label>Home</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[0]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Calendar</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[1]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Camera</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[2]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Cloud</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[3]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Contact</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[4]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n        <ion-col width-50>\n          <ion-list>\n            <ion-item>\n              <ion-label>Folder</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[5]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Map</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[6]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>Settings</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[7]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n            <ion-item>\n              <ion-label>About</ion-label>\n              <ion-toggle [(ngModel)]="tabToShow[8]" (ionChange)=\'refreshScrollbarTabs()\'></ion-toggle>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object])
    ], TabsPage);
    return TabsPage;
    var _a;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableTabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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


var ScrollableTabs = /** @class */ (function () {
    function ScrollableTabs(elemRef, renderer) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.opts = {};
        this.tabs = [];
    }
    ScrollableTabs.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('opts')) {
            if (changes['opts'].currentValue.refresh) {
                setTimeout(function () {
                    _this.setAnchorStyles();
                    _this.scrollToselectedTab();
                }, 300);
            }
        }
    };
    ScrollableTabs.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.nativeTabbar = this.ionTabs._tabbar.nativeElement;
        this.tabs = this.ionTabs._tabs;
        this.currentTabIndex = typeof (this.ionTabs.selectedIndex) == "undefined" ? 0 : this.ionTabs.selectedIndex;
        this.ionTabs.ionChange.subscribe(function () {
            _this.scrollToselectedTab();
        });
        var _loop_1 = function (i) {
            this_1.tabs[i].ionSelect.subscribe(function () {
                _this.currentTabIndex = i;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.length; i++) {
            _loop_1(i);
        }
        // set tabbar overflow-x: scroll
        this.renderer.setElementStyle(this.nativeTabbar, "overflow-x", "scroll");
        // set tabbar overflow-y: hidden
        this.renderer.setElementStyle(this.nativeTabbar, "overflow-y", "hidden");
        this.setAnchorStyles();
        this.scrollToselectedTab();
    };
    ScrollableTabs.prototype.onResize = function (event) {
        var _this = this;
        this.setAnchorStyles();
        setTimeout(function () {
            _this.scrollToselectedTab();
        }, 300);
    };
    ScrollableTabs.prototype.setAnchorStyles = function () {
        if (typeof (this.nativeTabbar) != "undefined") {
            var tabBar_width = this.nativeTabbar.clientWidth;
            var numOfTabs = this.tabs.length;
            var numOfVisibleAnchors = 0;
            var sumOfVisibleAnchorWidth = 0;
            // loop through tab elements in tabs
            for (var i = 0; i < numOfTabs; i++) {
                var element = this.nativeTabbar.children[i];
                // when Tab visible (effecting show property)
                if (this.tabs[i]._isShown) {
                    numOfVisibleAnchors++;
                    // set <a> display: inline-table
                    this.renderer.setElementStyle(element, 'display', 'inline-table');
                    // set <a> width: 6rem
                    this.renderer.setElementStyle(element, 'width', '6rem');
                    // extra padding for title-only tags only
                    if (element.classList.contains("has-title-only")) {
                        // set <a> padding-top: 1.5rem
                        this.renderer.setElementStyle(element, 'padding-top', '1.5rem');
                    }
                    sumOfVisibleAnchorWidth += element.clientWidth;
                }
                else {
                    // set <a> display: none
                    this.renderer.setElementStyle(element, 'display', 'none');
                }
            }
            // to prevent extra space at end
            if (sumOfVisibleAnchorWidth < tabBar_width) {
                var anchorWidth = tabBar_width / numOfVisibleAnchors;
                for (var i = 0; i < numOfTabs; i++) {
                    var element = this.nativeTabbar.children[i];
                    // when Tab not not visible effecting show property
                    if (!element.classList.contains("tab-hidden")) {
                        this.renderer.setElementStyle(element, 'width', anchorWidth + 'px');
                    }
                }
            }
        }
    };
    ScrollableTabs.prototype.scrollToselectedTab = function () {
        if (typeof this.nativeTabbar != 'undefined') {
            var tabBar_width = this.nativeTabbar.clientWidth;
            var selectedTab = this.nativeTabbar.children[this.currentTabIndex];
            var selectedTab_Width = selectedTab.clientWidth;
            var selectedTab_LeftOffset = document.getElementById(selectedTab.id).offsetLeft;
            var selectedTab_mid = selectedTab_LeftOffset + (selectedTab_Width / 2);
            var newScrollLeft = selectedTab_mid - (tabBar_width / 2);
            this.scrollXTo(newScrollLeft, 300).then(function () { });
        }
    };
    ScrollableTabs.prototype.scrollXTo = function (x, duration) {
        if (duration === void 0) { duration = 300; }
        // scroll animation loop w/ easing
        var tabbar = this.nativeTabbar;
        if (!tabbar) {
            // invalid element
            return Promise.resolve();
        }
        x = x || 0;
        var originalRaf = (window[window['Zone']['__symbol__']('requestAnimationFrame')] || window[window['Zone']['__symbol__']('webkitRequestAnimationFrame')]);
        var nativeRaf = originalRaf !== undefined ? originalRaf['bind'](window) : window.requestAnimationFrame.bind(window);
        var fromX = tabbar.scrollLeft;
        var maxAttempts = (duration / 16) + 100;
        return new Promise(function (resolve) {
            var startTime;
            var attempts = 0;
            var isPlaying;
            // scroll loop
            function step() {
                attempts++;
                if (!tabbar || !isPlaying || attempts > maxAttempts) {
                    isPlaying = false;
                    resolve();
                    return;
                }
                var time = Math.min(1, ((Date.now() - startTime) / duration));
                // where .5 would be 50% of time on a linear scale easedT gives a
                // fraction based on the easing method
                var easedT = (--time) * time * time + 1;
                if (fromX !== x) {
                    tabbar.scrollLeft = Math.floor((easedT * (x - fromX)) + fromX);
                }
                if (easedT < 1) {
                    nativeRaf(step);
                }
                else {
                    // done
                    resolve();
                }
            }
            // start scroll loop
            isPlaying = true;
            // chill out for a frame first
            nativeRaf(function () {
                startTime = Date.now();
                nativeRaf(step);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('scrollable-tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Tabs */])
    ], ScrollableTabs.prototype, "ionTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('opts'),
        __metadata("design:type", Object)
    ], ScrollableTabs.prototype, "opts", void 0);
    ScrollableTabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[scrollable-tabs]',
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ScrollableTabs);
    return ScrollableTabs;
}());

//# sourceMappingURL=scrollable-tabs.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_five_topic_five__ = __webpack_require__(56);
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
 * Generated class for the TopicTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicOnePage = /** @class */ (function () {
    function TopicOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicOnePage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '50px'
        });
    };
    TopicOnePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_two_topic_two__["a" /* TopicTwoPage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_five_topic_five__["a" /* TopicFivePage */]);
        }
    };
    TopicOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-one',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/'<ion-header>\n  <!-- \n  <ion-navbar>\n    <ion-title>topicOne</ion-title>\n  </ion-navbar> -->\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n\n</ion-header>\n<!-- <div class="tabs-striped tabs-top tabs-background-stable tabs-color-calm">\n    <div class="tabs tabs-icon-left">\n        <a class="tab-item" href="#">\n            <i class="icon ion-person"></i>\n            Followers\n        </a>\n        <a class="tab-item" href="#">\n            <i class="icon ion-star"></i>\n            Following\n        </a>\n        <a class="tab-item active" ui-sref="search">\n            <i class="icon ion-search"></i>\n            Search\n        </a>\n    </div>\n</div> -->\n<ion-content>\n  <!-- <header id="header">\n      <ul class="nav">\n          <li> <a href="#Problem">Problem</a></li>\n          <li><a href="#Cause">Cause</a></li>\n          <li><a href="#Effect">Effect</a></li>\n          <li><a href="#Importance">Importance</a></li>\n          <li><a href="#Quiz">Quiz</a></li>\n      </ul>\n  </header> -->\n  <ion-slides pager>\n\n      <ion-slide style="background-color: green">\n        <h2>Slide 1</h2>\n      </ion-slide>\n    \n      <ion-slide style="background-color: blue">\n        <h2>Slide 2</h2>\n      </ion-slide>\n    \n      <ion-slide style="background-color: red">\n        <h2>Slide 3</h2>\n      </ion-slide>\n    \n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-one/topic-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicOnePage);
    return TopicOnePage;
}());

//# sourceMappingURL=topic-one.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_three_topic_three__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_one_topic_one__ = __webpack_require__(51);
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
 * Generated class for the TopicTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicTwoPage = /** @class */ (function () {
    function TopicTwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicTwoPage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicTwoPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_three_topic_three__["a" /* TopicThreePage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_one_topic_one__["a" /* TopicOnePage */]);
        }
    };
    TopicTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-two',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/'<ion-header>\n  <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n        <h2>About Plastic</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-two/topic-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicTwoPage);
    return TopicTwoPage;
}());

//# sourceMappingURL=topic-two.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_four_topic_four__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_two_topic_two__ = __webpack_require__(53);
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
 * Generated class for the TopicThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicThreePage = /** @class */ (function () {
    function TopicThreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicThreePage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicThreePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_four_topic_four__["a" /* TopicFourPage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_two_topic_two__["a" /* TopicTwoPage */]);
        }
    };
    TopicThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-three',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/'<ion-header>\n    <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n        <h2>Species Affected</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-three/topic-three.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicThreePage);
    return TopicThreePage;
}());

//# sourceMappingURL=topic-three.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_five_topic_five__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__ = __webpack_require__(54);
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
 * Generated class for the TopicFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicFourPage = /** @class */ (function () {
    function TopicFourPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicFourPage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicFourPage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_five_topic_five__["a" /* TopicFivePage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_three_topic_three__["a" /* TopicThreePage */]);
        }
    };
    TopicFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-four',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/'<ion-header>\n  <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n  <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n  <div id="fullpage">\n    <div class="section">\n        <h2>Take Action</h2>\n    </div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n    <div class="section">Some section</div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-four/topic-four.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicFourPage);
    return TopicFourPage;
}());

//# sourceMappingURL=topic-four.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fullpage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topic_one_topic_one__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topic_four_topic_four__ = __webpack_require__(55);
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
 * Generated class for the TopicFivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicFivePage = /** @class */ (function () {
    function TopicFivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TopicFivePage.prototype.ionViewDidLoad = function () {
        new __WEBPACK_IMPORTED_MODULE_2_fullpage_js___default.a('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            offsetSections: false,
            paddingTop: '3em',
        });
    };
    TopicFivePage.prototype.swipeEvent = function (e) {
        if (e.direction == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__topic_one_topic_one__["a" /* TopicOnePage */]);
        }
        if (e.direction == 4) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topic_four_topic_four__["a" /* TopicFourPage */]);
        }
    };
    TopicFivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-five',template:/*ion-inline-start:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/'<ion-header>\n    <!-- \n    <ion-navbar>\n      <ion-title>topicOne</ion-title>\n    </ion-navbar> -->\n    <custom-nav-bar [title]="\'Home\'" [addBack]="true" [addHome]="true" [addPerson]="true"></custom-nav-bar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n    <div id="fullpage">\n      <div class="section">\n          <h2>Activities</h2>\n      </div>\n      <div class="section">Some section</div>\n      <div class="section">Some section</div>\n      <div class="section">Some section</div>\n    </div>\n  </ion-content>'/*ion-inline-end:"/Users/deniseho/plastic/src/pages/topic-five/topic-five.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TopicFivePage);
    return TopicFivePage;
}());

//# sourceMappingURL=topic-five.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map