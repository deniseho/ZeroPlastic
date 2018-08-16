import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import * as _ from 'lodash';
import { User } from '../../shared/user-model';

@Injectable()
export class AuthServiceProvider {
  currentUser : User;
  allUsers : any;
  baseUrl : string = "https://plastic-ocean.firebaseio.com";

  constructor(public http : Http, public db : AngularFireDatabase) {
    this
      .getAllUsers()
      .then(data => {
        this.allUsers = data;
        console.log(data)
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
    if (credentials.name === null || credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this
        .db
        .list('users')
        .push(new User({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        }));
    };

    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  getAllUsers() {
    return new Promise(resolve => {
      this
        .http
        .get(`${this.baseUrl}/users.json`)
        .subscribe(res => {
          resolve(res.json())
        }
        );
    });
  }

  getCurrentUser() : User {
    if(this.currentUser==undefined){
    }else{
      return this.currentUser;
    }
  }

}