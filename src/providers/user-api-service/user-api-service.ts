import {Injectable} from '@angular/core';
import {
  Http/*, Response*/
} from '@angular/http';

import 'rxjs';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

import * as _ from 'lodash';

@Injectable()
export class UserApiServiceProvider {
  private baseUrl = "https://plastic-ocean.firebaseio.com";

  constructor(public http : Http) {
    console.log('Hello UserApiServiceProvider Provider');
  }

  getAllUsers() : Promise < any[] >  {
    return new Promise(resolve => {
      this
        .http
        .get(`${this.baseUrl}/users.json`)
        .subscribe(res => resolve(res.json()));
    });
  }

}
