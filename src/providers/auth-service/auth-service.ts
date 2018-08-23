import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as _ from 'lodash';
import {User} from '../../shared/user-model';
import { UserServiceProvider } from '../user-service/user-service';

@Injectable()
export class AuthServiceProvider {
  currentUser : User;
  // allUsers : any;
  baseUrl : string = "https://plastic-ocean.firebaseio.com";

  dbUserList : AngularFireList < any >;
  userList : User[];
  loginUser : User = new User();
  $userKey : string = '-LK1lKdGyqIssZruGmac';


  constructor(public http : Http, public db : AngularFireDatabase) {
    // this
    //   .getAllUsers()
    //   .then(data => {
    //     this.allUsers = data;
    //   });
    this.userList = [];
    this.getAllUsers();
  }

  ionViewDidLoad() {}

  login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        this.currentUser = _.first(_.filter(this.userList, item => {
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
        .push(new User(credentials.name, credentials.email, credentials.password));
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

  // getAllUsers() {
  //   return new Promise(resolve => {
  //     this
  //       .http
  //       .get(`${this.baseUrl}/users.json`)
  //       .subscribe(res => {
  //         resolve(res.json());
  //         console.log("res.json()")
  //         console.log(res.json())
  //       });
  //   });
  // }

    
  getDBUsers() {
    this.dbUserList = this
      .db
      .list('/users');
    return this.dbUserList;
  }

  getAllUsers(){
    this.getDBUsers()
      .snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {

          var y = element
            .payload
            .toJSON();
          y["$key"] = element.key;

        console.log("y")
        console.log(y)

        this
          .userList
          .push(y as User);
        console.log("this.userList")
        console.log(this.userList)
      });
    });
  }


  getCurrentUser() : User {
    if(this.currentUser == undefined) {
      return new User();
    } else {
      return this.currentUser;
    }
  }

}