import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as PIXI from 'pixi.js';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile', 
  templateUrl: 'profile.html'
})

export class ProfilePage {

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController) {
    console.log(window.innerWidth, window.innerHeight);
  }

  ionViewDidLoad() {
    // var type = "WEBGL";
    // if (!PIXI.utils.isWebGLSupported) {
    //   type = "canvas";
    // }
    // PIXI
    //   .utils
    //   .sayHello(type);

    var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});

    this
      .content
      .nativeElement
      .appendChild(app.view);

    // create a new Sprite from an image path
    var bunny = PIXI
      .Sprite
      .fromImage('../assets/imgs/bunny.png')

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
  }
}
