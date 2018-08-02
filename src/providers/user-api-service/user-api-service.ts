import { Injectable } from '@angular/core';
import { Http /*, Response*/ } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserApiServiceProvider {
  private baseUrl = "";
  allUsers: any = {};

  constructor(public http: Http) {
    console.log('Hello UserApiServiceProvider Provider');
  }

  getAllUsers(){
    return new Promise(resolve =>{
      // this.http.get(`${this.baseUrl}/allUsers.json`).subscribe(res => resolve(res.json()));
    })
  }

}
