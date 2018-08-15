import { Component } from '@angular/core';

/**
 * Generated class for the TopicQuizComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'topic-quiz',
  templateUrl: 'topic-quiz.html'
})
export class TopicQuizComponent {

  text: string;

  constructor() {
    console.log('Hello TopicQuizComponent Component');
    this.text = 'Hello World';
  }

}
