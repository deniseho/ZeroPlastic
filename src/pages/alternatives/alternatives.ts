import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as $ from 'jquery';
import * as PIXI from "pixi.js";

@Component({selector: 'page-alternatives', templateUrl: 'alternatives.html'})
export class AlternativesPage extends PIXI.Application {
  drawerOptions : any;
  selectedItemUrl : string;
  app : any;
  stage : any;

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController, public navParams : NavParams) {
    super(300, 400, {legacy: true});

  }

  ionViewDidLoad() {
    var app = new PIXI.Application(300, 400, {transparent: true, antialias: true});

    this
      .content
      .nativeElement
      .appendChild(app.view);
    var stage = app.stage;
    //prepare circle texture, that will be our brush
    var brush = new PIXI.Graphics();
    brush.beginFill(0xffffff);
    brush.drawCircle(0, 0, 50);
    brush.endFill();

    PIXI
      .loader
      .add("t1", "../assets/imgs/Bags/bag.png");
    PIXI
      .loader
      .add("t2", "../assets/imgs/Toothbrush/toothbrush.jpg");
    PIXI
      .loader
      .load(setup);

    function setup(loader, resources) {
      var background = new PIXI.Sprite(resources["t1"].texture)
      stage.addChild(background);
      background.width = app.screen.width;
      background.height = app.screen.height;

      var imageToReveal = new PIXI.Sprite(resources["t2"].texture)
      stage.addChild(imageToReveal);
      imageToReveal.width = app.screen.width;
      imageToReveal.height = app.screen.height;

      var renderTexture = PIXI
        .RenderTexture
        .create(app.screen.width, app.screen.height);

      var renderTextureSprite = new PIXI.Sprite(renderTexture);
      stage.addChild(renderTextureSprite);
      imageToReveal.mask = renderTextureSprite;

      app.stage.interactive = true;
      app
        .stage
        .on('pointerdown', pointerDown);
      app
        .stage
        .on('pointerup', pointerUp);
      app
        .stage
        .on('pointermove', pointerMove);

      var dragging = false;

      function pointerMove(event) {
        if (dragging) {
          brush
            .position
            .copy(event.data.global);
          app
            .renderer
            .render(brush, renderTexture, false, null, false);
        }
      }

      function pointerDown(event) {
        dragging = true;
        pointerMove(event);
      }

      function pointerUp(event) {
        dragging = false;
      }

    }
  }

  selectAltItem(e) {
    $('.alternativeMenu > *').removeClass('active');
    $(e.target).addClass("active");
    if (e.target.name == "basket") {
      this.selectedItemUrl = "plastic-bag.jpg";
    } else {
      this.selectedItemUrl = "alt_bottle.jpg";
    }
  }

  arrawDivClick() {}
}
