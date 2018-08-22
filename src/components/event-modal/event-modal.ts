import { Component } from '@angular/core';

/**
 * Generated class for the EventModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-modal',
  templateUrl: 'event-modal.html'
})
export class EventModalComponent {

  text: string;

  constructor() {
    console.log('Hello EventModalComponent Component');
    this.text = 'Hello World';
  }

}
