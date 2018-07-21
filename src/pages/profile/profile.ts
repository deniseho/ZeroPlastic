import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as PIXI from 'pixi.js';

@Component({selector: 'page-profile', templateUrl: 'profile.html'})

export class ProfilePage {

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController) {
    console.log(window.innerWidth, window.innerHeight);
  }

  ionViewDidLoad() {
    var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
    var speed = Math.floor(Math.random() * 6 + 1);

    this
      .content
      .nativeElement
      .appendChild(app.view);

    // create a new Sprite from an image path
    for (var i = 0; i < 10; i++) {
      createBunny(Math.floor(Math.random() * app.screen.width), Math.floor(Math.random() * app.screen.height));
    }

    function createBunny(x, y) {
      var bunny = PIXI
        .Sprite
        .fromImage('../assets/imgs/bunny.png')

      // center the sprite's anchor point
      bunny
        .anchor
        .set(0.5);

      // move the sprite to the center of the screen
      bunny.x = x;
      bunny.y = y;

      bunny.interactive = true;
      bunny.buttonMode = true;
      bunny
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

      app
        .stage
        .addChild(bunny);

      // Listen for animate update
      app
        .ticker
        .add(function (delta) {
          if (bunny.y < app.screen.height - bunny.height) {
            bunny.y += speed;
          }
        });
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
      if (this.dragging) {
        var newPosition = this
          .data
          .getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
      }
    }
  }
}
