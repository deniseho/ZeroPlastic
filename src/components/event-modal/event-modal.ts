import {Component} from '@angular/core';
import {Days, Months, Years} from '../../shared/date';
import {ViewController} from 'ionic-angular';

@Component({selector: 'event-modal', templateUrl: 'event-modal.html'})
export class EventModalComponent {
  showError: boolean;

  days = Days;
  months = Months;
  years = Years;

  event = {
    date: {
      day: new Date().getDate(),
      month: this.months[new Date().getMonth()],
      year: new Date().getFullYear()
    },
    title: "",
    location: "",
    time: "",
    contact: ""
  }

  constructor(public viewCtrl : ViewController) {
    this.showError = false;
  }

  submitEventForm() {
    if (this.event.title != "" && this.event.location != "" && this.event.time != "" && this.event.contact != "") {
      this.showError = false;
      this
        .viewCtrl
        .dismiss({"event": this.event});
    }else{
      this.showError = true;
    }
  }

  close() {
    this
      .viewCtrl
      .dismiss();
  }

}

export class Event {
  constructor() {}
}