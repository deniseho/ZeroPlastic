import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as PIXI from 'pixi.js';

@Component({selector: 'page-game', templateUrl: 'game.html'})

export class GamePage {

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController) {
    console.log(window.innerWidth, window.innerHeight);
  }

  self:any= this;
  score:any = 0;
  
  get scoreSum() : any {
      return this.score;
  }
  set scoreSum(val : any) {
      this.score = val;
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
        url: '../assets/imgs/bunny.png',
        count: 3,
        speed: 0.6,
        score: 1
      }

      var bottle = {
        url: '../assets/imgs/bottle.png',
        count: 4,
        speed: 0.9,
        score: 2
      }

      for (var i = 0; i < bunny.count; i++) {
        createItem(PIXI.Sprite.fromImage(bunny.url), getItemPosX(), getItemPosY(i), bunny.speed);
      }

      for (var i = 0; i < bottle.count; i++) {
        createItem(PIXI.Sprite.fromImage(bottle.url), getItemPosX(), getItemPosY(i), bottle.speed);
      }

      // and schedule a repeat
      setTimeout(fall, 5000);
    }

    function getItemPosX() {
      var padding = 40;
      var min = padding;
      var max = app.screen.width - padding;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getItemPosY(i) {
      var min = 0;
      var max = 100;
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

      item.rotation = Math.random() * 360;

      var max = 6;
      var min = 3;
      item
        .scale
        .set((Math.floor(Math.random() * (max - min + 1)) + min) / 10);

      item.interactive = true;
      item.buttonMode = true;
      item.on('tap', () => {
        app
          .ticker
          .add(function (delta) {
            item.rotation += 0.6 * delta;
            item.scale.x *= 0.8;
            item.scale.y *= 0.8;
          });
        console.log(this);

      });

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

    let graphics = new PIXI.Graphics();
    graphics.lineStyle(1);
    graphics.beginFill(0xFFFF0B, 0.7);
    graphics.drawRect(app.screen.width / 4 * 0, app.screen.height - 95, app.screen.width / 4, 200);
    graphics.endFill();

    graphics.lineStyle(1);
    graphics.beginFill(0x33FF00, 0.7);
    graphics.drawRect(app.screen.width / 4 * 1, app.screen.height - 130, app.screen.width / 4, 230);
    graphics.endFill();

    graphics.lineStyle(1);
    graphics.beginFill(0xFFFF0B, 0.7);
    graphics.drawRect(app.screen.width / 4 * 2, app.screen.height - 120, app.screen.width / 4, 260);
    graphics.endFill();

    graphics.lineStyle(1);
    graphics.beginFill(0x33FF00, 0.7);
    graphics.drawRect(app.screen.width / 4 * 3, app.screen.height - 100, app.screen.width / 4, 210);
    graphics.endFill();

    app
      .stage
      .addChild(graphics);
  }
}