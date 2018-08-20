import {Component, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as $ from 'jquery';
import * as PIXI from "pixi.js";
import {alternativesList} from '../../shared/alternatives-info';
import * as _ from 'lodash';

@Component({selector: 'page-alternatives', templateUrl: 'alternatives.html'})

export class AlternativesPage extends PIXI.Application {
  alternativesList : any;
  
  item : any;
  selectedItem : any;

  plasticImage : string;
  plasticText : string;
  alternatives : string[];

  @ViewChild('content')content : ElementRef;
  constructor(public navCtrl : NavController, public navParams : NavParams) {
    super(300, 400, {legacy: true});
    this.alternativesList = alternativesList;
  }

  ionViewDidLoad() {
    this.item = "plasticBags";
    this.selectItem();
    // this.createScratchPad();
  }

  selectItem() {
    this.selectedItem = _.filter(this.alternativesList, item => {
      return item.item == this.item;
    })[0];
    this.plasticImage = this.selectedItem.plasticImage;
    this.plasticText = this.selectedItem.plasticText;
    this.alternatives = this.selectedItem.alternatives;
  }

  segmentChanged(e) {
    this.item = e._value;
    this.selectItem();
    // this.createScratchPad();
  }

  arrawDivClick() {}

  createScratchPad() {
    PIXI.loader.destroy;
    PIXI.loader.reset();
    
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
      .add("plasticImage", this.plasticImage);
    PIXI
      .loader
      .add("plasticText", this.plasticText);
    PIXI
      .loader
      .load(setup);

    function setup(loader, resources) {
      var plasticImage = new PIXI.Sprite(resources["plasticImage"].texture)
      stage.addChild(plasticImage);
      plasticImage.width = app.screen.width;
      plasticImage.height = app.screen.height;

      var plasticText = new PIXI.Sprite(resources["plasticText"].texture)
      stage.addChild(plasticText);
      plasticText.width = app.screen.width;
      plasticText.height = app.screen.height;

      var renderTexture = PIXI
        .RenderTexture
        .create(app.screen.width, app.screen.height);

      var renderTextureSprite = new PIXI.Sprite(renderTexture);
      stage.addChild(renderTextureSprite);
      plasticText.mask = renderTextureSprite;

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
}