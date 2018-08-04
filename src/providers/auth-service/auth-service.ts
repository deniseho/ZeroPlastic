import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserApiServiceProvider} from '../user-api-service/user-api-service';
import * as _ from 'lodash';

export class User {
  name : string;
  email : string;
  password : string;
  achievement : any[];
  badge : string;

  constructor(name : string, email : string, password : string, achievement : any[], badge : string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.achievement = achievement;
    this.badge = badge;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser : User;
  allUsers : any;

  constructor(public http : HttpClient, private sqlite : SQLite, private userApi : UserApiServiceProvider) {
    this
      .userApi
      .getAllUsers()
      .then(data => {
        this.allUsers = data;
      });
  }

  ionViewDidLoad() {}

  login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        this.currentUser = _.first(_.filter(this.allUsers, item => {
          return item.email === credentials.email;
        }));
        observer.next(true);
        observer.complete();
      });
    }
  }

  register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
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
