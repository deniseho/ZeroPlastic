import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams, AlertController, Platform} from 'ionic-angular';
import {NativeAudio} from '@ionic-native/native-audio';
import * as PIXI from 'pixi.js';
import {items} from '../game/items';
import {TopicTwoPage} from '../topic-two/topic-two';
import {TopicFourPage} from '../topic-four/topic-four';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {User} from '../../shared/user-model';
import {Vibration} from '@ionic-native/vibration';

@Component({selector: 'page-game', templateUrl: 'game.html'})

export class GamePage {

  app : any;
  gameScore : number = 0;
  gameLife : number = 5;
  gamePlay : boolean = true;
  currentUser : User;

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController, public alertCtrl : AlertController, public platform : Platform, private nativeAudio : NativeAudio, private auth : AuthServiceProvider, private vibration : Vibration) {
    this.currentUser = this.auth.currentUser;
  }

  playGame() {
    this.gamePlay = true;
    this
      .app
      .ticker
      .start();
  }

  stopGame() {
    this.gamePlay = false;
    this
      .app
      .ticker
      .stop();
  }

  toggleGame() {
    this.gamePlay = !this.gamePlay;
    if (this.gamePlay) {
      this.playGame()
    } else {
      this.stopGame();
    }
  }

  ionViewDidLoad() {
    this
      .nativeAudio
      .preloadSimple('correct', 'assets/audio/correct.m4a');

    this
      .nativeAudio
      .preloadSimple('wrong', 'assets/audio/wrong.m4a');

    this
      .nativeAudio
      .preloadSimple('new_badge', 'assets/audio/New-Badge.m4a');

    let self = this;
    let bottomPadding = 95;

    self.app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x1099bb});

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
          title: 'Learn how to recycle!',
          subTitle: 'Drag each plastic item to the correct bin. How many can you match correctly?',
          buttons: [
            {
              text: 'Start',
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

          self
            .nativeAudio
            .play('correct');

          self.gameScore++;
          container.removeChild(item);

        } else if (!elemData.recycable) {

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

          self
            .vibration
            .vibrate([200, 100, 200]);

          item.y = self.app.screen.height - bottomPadding;
          bottomPadding += 3;
          self.gameLife--;

        } else if (!elemData.recycable) {

          self
            .nativeAudio
            .play('correct');

          self
            .vibration
            .vibrate(400);

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

      self.currentUser.totalScore = self.gameScore;
      self
        .auth
        .updateUser(self.currentUser);

        let message = "";
        let title = "";
        let subTitle = "";
        if(self.gameScore>=0&&self.gameScore<10){
            title = "Not bad! But you can do much better.";
            subTitle = "You've got <b>" + self.gameScore + "</b> points.";
            message = " You've matched <b>" + self.gameScore + "</b> items correctly.";
        }else if(self.gameScore >=10 && self.gameScore < 20){
            title = "Well done!";
            subTitle = "You've got <b>" + self.gameScore + "</b> points.";
            message = "You've matched <b>" + self.gameScore + "</b> items correctly.";
        }

      const prompt = self
        .alertCtrl
        .create({
          title: title,
          message: message,
          subTitle: subTitle,
          buttons: [
            {
              text: 'Play again',
              handler: data => {
                self
                  .navCtrl
                  .push(GamePage);
              }
            }, {
              text: 'Exit',
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
      var container = new PIXI.Container();
      this
        .app
        .stage
        .addChild(container);
      var texture = PIXI
        .Texture
        .fromImage('assets/imgs/trash.svg');

      var bins = new PIXI.Sprite(texture);
      bins
        .anchor
        .set(0.5, 0.7);

      bins.x = this.app.screen.width / 2;
      bins.y = this.app.screen.height;

      container.addChild(bins);

      this
        .app
        .stage
        .addChild(container);
    }
    drawSeaBottom();

  }

  exitAlert() {

    this.stopGame();
    const prompt = this
      .alertCtrl
      .create({
        title: 'Are you sure you want to exit?',
        buttons: [
          {
            text: 'Continue the game',
            handler: data => {
              this.playGame();
            }
          }, {
            text: 'Exit',
            handler: data => {
              this
                .navCtrl
                .push(TopicFourPage);
            }
          }
        ],
        enableBackdropDismiss: false
      });
    prompt.present();
  }

  ionViewWillLeave() {
    this.stopGame();
  }

}