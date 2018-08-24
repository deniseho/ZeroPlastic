import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as _ from 'lodash';
import {User} from '../../shared/user-model';
import {UserServiceProvider} from '../user-service/user-service';

@Injectable()
export class AuthServiceProvider {
  currentUser : User;
  // allUsers : any;
  baseUrl : string = "https://plastic-ocean.firebaseio.com";

  dbUserList : AngularFireList < any >;
  userList : User[];
  $userKey : string;

  constructor(public http : Http, public db : AngularFireDatabase) {
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
        console.log("this.currentUser")
        console.log(this.currentUser)

        this.$userKey = this.currentUser.$key;
        console.log("this.$userKey")
        console.log(this.$userKey)
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

  getDBUsers() {
    this.dbUserList = this
      .db
      .list('/users');
    return this.dbUserList;
  }

  getAllUsers() {
    this
      .getDBUsers()
      .snapshotChanges()
      .subscribe(item => {
        this.userList = [];
        item.forEach(element => {
          var y = element
            .payload
            .toJSON();
          y["$key"] = element.key;

          this
            .userList
            .push(y as User);
        });
      });
  }

  getDBCurrentUser() {
    return this
      .db
      .list('/users/' + this.$userKey);
    // return Object.assign({}, this.currentUser);
  }

  insertUser(user : User) {
    this
      .dbUserList
      .push({name: user.name, email: user.email, password: user.password})
  }

  updateUser(user : User) {
    this
      .dbUserList
      .update(user.$key, {
        name: user.name,
        email: user.email,
        password: user.password,
        totalScore: user.totalScore,
        topic1: user.topic1,
        topic2: user.topic2,
        topic3: user.topic3,
        topic4: user.topic4,
        topic5: user.topic5,
        firstLogin: user.firstLogin,
        loginTime: user.loginTime
      })
  }

  updateUserAchievement(currentUser, quizScore, questionScore, topicTitle) {
  
    let user = currentUser;

    let preTotalScore = currentUser.totalScore;
    let preQuestionScores = currentUser[topicTitle];
    
    let quizTotal = 0;
    let quizDiff = 0;

    for (let i = 0; i < questionScore.length; i++) {
      quizTotal += questionScore[i];
      if (preQuestionScores[i] < questionScore[i]) {
        quizDiff += questionScore[i];
      } else {
        quizDiff += 0;
      }
    }
    
    user[topicTitle] = questionScore;
    user.totalScore += quizDiff;

    this.updateUser(user);
  }
}