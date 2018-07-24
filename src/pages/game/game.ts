import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import * as PIXI from 'pixi.js';
import {items} from '../game/items';
import { TopicTwoPage } from '../topic-two/topic-two';
import { TopicMenu } from '../topic-menu/topic-menu';

@Component({selector: 'page-game', templateUrl: 'game.html'})

export class GamePage {

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController, public alertCtrl : AlertController) {
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
    let app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});
    let errorCount = 0;
    let self = this;

    this
      .content
      .nativeElement
      .appendChild(app.view);

    let container = new PIXI.Container();
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

    function createItem(elemData, index) {
      let item = PIXI
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
        let padding = 40;
        let max = app.screen.width - padding;
        let min = padding;

        let posX = Math.random() * (max - min + 1) + min;
        if (posX > min && posX < app.screen.width / 2 - padding || posX > app.screen.width / 2 + padding / 2 && posX < max) {
          return posX;
        }
      }

      function getItemPosY(i) {
        let max = 100;
        let min = 0;
        return -i * (Math.floor(Math.random() * (max - min + 1)) + min) * 20 - Math.floor(Math.random() * 200);
      }

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

      let count = 0;
      app
        .ticker
        .add(function (delta) {
          if (item.y < app.screen.height - item.height) {
            item.y += elemData.speed;
          } else {
            if (checkItemAnswer(elemData, item) > 3) {
              app
                .ticker
                .stop();
                gameOverAlert(self);
            }
            this.destroy();
            container.removeChild(item);
          }
        }, this);
    }

    function checkItemAnswer(elemData, item) {
      //the item is recycable
      if (elemData.recycable && item.x > app.screen.width / 2) {
        //run correct effect
      } else {
        errorCount++;
      }

      //the item is not recycable
      if (!elemData.recycable && item.x < app.screen.width / 2) {
        //run correct effect
      } else {
        errorCount++;
      }

      console.log(errorCount);
      return errorCount;
    }

    function gameOverAlert(self) {
      const prompt = self
        .alertCtrl
        .create({
          title: 'Game Over.',
          message: "Your score:",
          buttons: [
            {
              text: 'Play again',
              handler: data => {
                self.navCtrl.push(TopicTwoPage);
              }
            }, {
              text: 'Menu',
              handler: data => {
                self.navCtrl.push(TopicMenu);
              }
            }
          ]
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
      if (this.x <= 0 || this.x >= app.screen.width || this.y >= app.screen.height) {
        this.dragging = false;
      }
      if (this.dragging) {
        let newPosition = this
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
    graphics.beginFill(0xFF0000, 0.7);
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