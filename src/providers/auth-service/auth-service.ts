import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class User {
  name : string;
  email : string;
  score : number;
  badge : string;

  constructor(name : string, email : string, score : number, badge : string) {
    this.name = name;
    this.email = email;
    this.score = score;
    this.badge = badge;
  }
}

export class UserCredentials {
  email : string;
  password : string;

  constructor(email : string, password : string) {
    this.email = email;
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
        this.currentUser = new User('Denise', 'hoc2@tcd.ie', 0, 'Novice');
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

  getUserInfo() : User {
    //get userinfo from db    
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
