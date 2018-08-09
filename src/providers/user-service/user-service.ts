import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthServiceProvider} from '../auth-service/auth-service';
import {FirebaseOperation} from 'angularfire2/database/interfaces';
import { User } from '../auth-service/User';

/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  userList : AngularFireList < any >;
  $userKey: string = '-LJU-nVcB4Jp-UXcA6dE';

  userAchievementList:  AngularFireList < any >;
  totalScore: number;

  constructor(private db : AngularFireDatabase, private auth : AuthServiceProvider) {
    this.userList = this.db.list('/users');
    this.userAchievementList = this.db.list('/userAchievementList');
    this.totalScore = 0;
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
    this.userList.update(this.$userKey,{
      name: user.name,
      email: user.email,
      password: user.password,
      badge: user.badge,
      totalScore: user.totalScore,
      topic1: user.topic1,
      topic2: user.topic2,
      topic3: user.topic3,
      topic4: user.topic4,
      topic5: user.topic5,
    })
  }

  updateUserAchievement(currentUser,quizScore,questionScore, topicTitle){
    let user = currentUser;
    let preTotalScore = currentUser.totalScore;
    let preTopicScores = currentUser[topicTitle];
    let temp = 0;
console.log("preTopicScores")
console.log(preTopicScores)
console.log("questionScore")
console.log(questionScore)


    for(let i =0; i<questionScore.length; i++){
      if(preTopicScores[i]>questionScore[i]){
        temp += preTopicScores[i];
      }else{
        temp += questionScore[i];
      }
    }
console.log("temp");
console.log(temp);

    if(temp > preTotalScore){
      user.totalScore = temp;
    }else{
      user.totalScore = preTotalScore;
    }

console.log("ser.totalScore")
console.log(user.totalScore)

    this.updateUser(user);
  }
}
