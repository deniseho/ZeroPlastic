import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User {
  userid : string;
  name : string;
  email : string;
  score : number;
  badge : string;

  constructor(userid : string, name : string, email : string, score : number, badge : string) {
    this.userid = userid;
    this.name = name;
    this.email = email;
    this.score = score;
    this.badge = badge;
  }
}

export class UserCredentials {
  userid : string;
  password : string;

  constructor(userid : string, password : string) {
    this.userid = userid;
    this.password = this.password
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser : User;

  constructor(public http : HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        //todo: make a request to your backend to make a real check
        let access = (credentials.email === 'email' && credentials.password === 'pass');
        this.currentUser = new User('user001', 'Denise', 'hoc2@tcd.ie', 0, 'Novice');
        observer.next(access);
        observer.complete();
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

  getUserInfo() : User {return this.currentUser;}

  logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
