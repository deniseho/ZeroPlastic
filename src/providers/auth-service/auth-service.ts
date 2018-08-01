import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { userData } from './userData';

export class User {
  name : string;
  email : string;
  password : string;
  achievement : any[];
  position : string;

  constructor(name : string, email : string, password : string, achievement : any[], position : string) {
    this.name = name;
    this.email = email;
    this.password = this.password;
    this.achievement = achievement;
    this.position = position;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser : User;
  userData: any[];

  constructor(public http : HttpClient) {
    this.userData = userData;
  }

  login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        //todo: make a request to your backend to make a real check let access =
        let user01 = this.userData[0];

        if (credentials.email === 'hoc2@tcd.ie' && credentials.password === 'pass001') {
          this.currentUser = user01;
          observer.next(true);
          observer.complete();
        }
      });
    }
  }

  register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      //todo: store the credentials to your backend
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  getUserInfo() : User {
    return this.currentUser;
  }

  logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
