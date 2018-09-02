import { Component } from '@angular/core';

/**
 * Generated class for the GameInfoPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'game-info-page',
  templateUrl: 'game-info-page.html'
})
export class GameInfoPageComponent {

  text: string;

  constructor() {
    console.log('Hello GameInfoPageComponent Component');
    this.text = 'Hello World';
  }

}
