import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlternativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-alternatives',
  templateUrl: 'alternatives.html',
})
export class AlternativesPage {
  drawerOptions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
  };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlternativesPage');
  }

}
