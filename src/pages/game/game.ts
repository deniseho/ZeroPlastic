import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as PIXI from 'pixi.js';

@Component({selector: 'page-game', templateUrl: 'game.html'})

export class GamePage {

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController) {
    console.log(window.innerWidth, window.innerHeight);
  }

  ionViewDidLoad() {
    var app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});

    this
      .content
      .nativeElement
      .appendChild(app.view);

    var container = new PIXI.Container();
    app
      .stage
      .addChild(container);

    fall();
    function fall() {
      var bunny = {
        url:'../assets/imgs/bunny.png',
        count: 2,
        speed: 0.6
      }
  
      var bottle = {
        url:'../assets/imgs/bottle.png',
        count: 3,
        speed: 0.9
      }  

      for (var i = 0; i < bunny.count; i++) {
        createItem(PIXI.Sprite.fromImage(bunny.url), getItemPosX(), getItemPosY(i), bunny.speed);
      }

      for (var i = 0; i < bottle.count; i++) {
        createItem(PIXI.Sprite.fromImage(bottle.url), getItemPosX(), getItemPosY(i), bottle.speed);
      }

      // and schedule a repeat
      setTimeout(fall, 8000);
    }

    function getItemPosX() {
      // define dropping area
      var padding = 40;
      var max = app.screen.width - padding;
      var min = padding;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getItemPosY(i) {
      var max = 100;
      var min = 0;
      return -i * (Math.floor(Math.random() * (max - min + 1)) + min) * 20 - Math.floor(Math.random() * 200);
    }

    function createItem(item, x, y, speed) {

      // center the sprite's anchor point
      item
        .anchor
        .set(0.5);

      // move the sprite to the center of the screen
      item.x = x;
      item.y = y;

      item
        .scale
        .set(0.5);
      item.interactive = true;
      item.buttonMode = true;
      item
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

      container.addChild(item);

      // Listen for animate update
      app
        .ticker
        .add(function (delta) {
          if (item.y < app.screen.height - item.height) {
            item.y += speed;
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
      if (this.x <= 0 || this.x >= app.screen.width || this.y >= app.screen.height) {
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

    let graphics = new PIXI.Graphics();
    graphics.lineStyle(1);
    graphics.beginFill(0xFFFF0B, 0.7);
    graphics.drawRect(0, app.screen.height - 120, app.screen.width / 2, 80);
    graphics.endFill();

    graphics.lineStyle(1);
    graphics.beginFill(0x33FF00, 0.7);
    graphics.drawRect(app.screen.width / 2, app.screen.height - 120, app.screen.width / 2, 80);
    graphics.endFill();

    app
      .stage
      .addChild(graphics);
  }

}