import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import * as PIXI from 'pixi.js';
import {items} from '../game/items';
import {TopicTwoPage} from '../topic-two/topic-two';
import {TopicFourPage} from '../topic-four/topic-four';

@Component({selector: 'page-game', templateUrl: 'game.html'})

export class GamePage {

  app : any;
  gameScore : number = 0;
  gameLife : number = 5;
  gamePlay : boolean = true;

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController, public alertCtrl : AlertController) {}

  playGame() {
    let self = this;
    self.gamePlay = !self.gamePlay;
    if (self.gamePlay) {
      self
        .app
        .ticker
        .start();
    } else {
      self
        .app
        .ticker
        .stop();
    }
  }

  ionViewDidLoad() {
    let self = this;
    let bottomPadding = 75;

    self.app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});;

    this
      .content
      .nativeElement
      .appendChild(self.app.view);

    let container = new PIXI.Container();
    self
      .app
      .stage
      .addChild(container);

    startAlert(self);

    function startAlert(self) {
      const alert = self
        .alertCtrl
        .create({
          title: 'Start the game!',
          subTitle: 'Description',
          buttons: [
            {
              text: 'OK',
              handler: data => {
                fall();
              }
            }
          ],
          enableBackdropDismiss: false
        });
      alert.present();
    }

    function fall() {
      let firstTime = true;

      if (self.gamePlay) {
        if (firstTime) {
          items.forEach((elemData, index) => {
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
      let item = PIXI
        .Sprite
        .fromImage(elemData.url);

      // center the sprite's anchor point
      item
        .anchor
        .set(0.5);

      item.x = getItemPosX();
      item.y = getItemPosY(index);

      function getItemPosX() {
        let padding = 60;
        let max = self.app.screen.width - padding;
        let min = padding;

        let posX = Math.random() * (max - min + 1) + min;
        if (posX > min && posX < self.app.screen.width / 2 - padding || posX > self.app.screen.width / 2 + padding / 2 && posX < max) {
          return posX;
        }
      }

      function getItemPosY(i) {
        let max = 100;
        let min = 0;
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
          } else {
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
          self.gameScore++;
          container.removeChild(item);
        } else if (!elemData.recycable) {
          item.y = self.app.screen.height - bottomPadding;
          bottomPadding += 3;
          self.gameLife--;
        }
      }

      //unrecycable bin
      if (item.x < self.app.screen.width / 2) {
        if (elemData.recycable) {
          item.y = self.app.screen.height - bottomPadding;
          bottomPadding += 3;
          self.gameLife--;
        } else if (!elemData.recycable) {
          self.gameScore++;
          container.removeChild(item);
        }
      }
    }

    function gameOverAlert(self) {
      self.app.ticker.stop();
      const prompt = self
        .alertCtrl
        .create({
          title: 'Game Over.',
          message: "Your score: " + self.gameScore,
          buttons: [
            {
              text: 'Play again',
              handler: data => {
                self
                  .navCtrl
                  .push(GamePage);
              }
            }, {
              text: 'Back to the topic',
              handler: data => {
                self
                  .navCtrl
                  .push(TopicFourPage);
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
        let newPosition = this
          .data
          .getLocalPosition(this.parent);

        this.x = newPosition.x;
        this.y = newPosition.y;
      }
    }

    function onDragStop() {
      this.dragging = false;
    }

    var drawSeaBottom = () => {
      let graphics = new PIXI.Graphics();
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
    }
    drawSeaBottom();

  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave")
    let self = this;
    self
      .app
      .ticker
      .stop()
      .destroy();
  }

}