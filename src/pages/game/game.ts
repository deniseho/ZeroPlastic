import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as PIXI from 'pixi.js';
import {items} from '../game/items';

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
      items.forEach((elemData, index) => {
        createItem(elemData, index);
      });
      setTimeout(fall, 3000);
    }

    let reachBottomCount = 0;
    function createItem(elemData, index) {
      var item = PIXI
        .Sprite
        .fromImage(elemData.url);

      // center the sprite's anchor point
      item
        .anchor
        .set(0.5);

      // move the sprite to the center of the screen
      item.x = getItemPosX();
      item.y = getItemPosY(index);

      function getItemPosX() {
        var padding = 40;
        var max = app.screen.width - padding;
        var min = padding;

        var posX = Math.floor(Math.random() * (max - min + 1)) + min;
        if (posX > min && posX < app.screen.width / 2 - padding || posX > app.screen.width / 2 + padding / 2 && posX < max) {
          return posX;
        }
      }

      function getItemPosY(i) {
        var max = 100;
        var min = 0;
        return -i * (Math.floor(Math.random() * (max - min + 1)) + min) * 20 - Math.floor(Math.random() * 200);
      }

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

      var count = 0;
      app
        .ticker
        .add(function (delta) {
          if (item.y < app.screen.height - item.height) {
            item.y += elemData.speed;
          } else {
            if (elemData.recycable) {
              reachBottomCount += 1;
            }
            if (reachBottomCount == 10) {
              app
                .ticker
                .stop();
            }
            this.destroy();
            container.removeChild(item);
          }
        }, this);

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

        // var panelWidth = app.screen.width / 2; if (newPosition.x > 0 && newPosition.x
        // < panelWidth) {   this.x = 0 + panelWidth / 2; } else if (newPosition.x >
        // panelWidth) {   this.x = panelWidth + panelWidth / 2; }

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