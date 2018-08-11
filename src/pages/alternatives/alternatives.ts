import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as $ from 'jquery';

@Component({selector: 'page-alternatives', templateUrl: 'alternatives.html'})
export class AlternativesPage {
  drawerOptions : any;
  selectedItemUrl : string;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };

    this.selectedItemUrl = "plastic-bag.jpg";
  }

  ionViewDidLoad() {}

  selectAltItem(e) {
    $('.alternativeMenu > *').removeClass('active');
    $(e.target).addClass("active");
    if(e.target.name=="basket"){
      this.selectedItemUrl = "plastic-bag.jpg";
    }else{
      this.selectedItemUrl = "alt_bottle.jpg";
    }
  }

  arrawDivClick() {}
}
