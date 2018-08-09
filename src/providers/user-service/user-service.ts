import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthServiceProvider} from '../auth-service/auth-service';
import {FirebaseOperation} from 'angularfire2/database/interfaces';
import { User, Achievement } from '../auth-service/User';

/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  userList : AngularFireList < any >;
  $userKey: string = '-LJQWTMmX4pGYa0zDFON'

  userAchievementList:  AngularFireList < any >;

  constructor(private db : AngularFireDatabase, private auth : AuthServiceProvider) {
    this.userList = this.db.list('/users');
    this.userAchievementList = this.db.list('/userAchievementList');
    
  }


  getUsers() {
    return this.userList;
  }

  insertUser(user:User){
    this.userList.push({
      name: user.name,
      email: user.email,
      password: user.password,
      badge: user.badge
    })
  }
  
  updateUser(user: User){
    // console.log(user.$key)
    this.userList.update(this.$userKey,{
      name: user.name,
      email: user.email,
      password: user.password,
      badge: user.badge
    })
  }

  updateUserAchievement(email, collectionName, topicAchievement){
    this.userAchievementList.push({
      email: email,
      topicAchievement:{
        collectionName: collectionName,
        achievement: topicAchievement
      }
    })    
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }
}
