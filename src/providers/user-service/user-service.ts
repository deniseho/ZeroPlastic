import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthServiceProvider} from '../auth-service/auth-service';
import {FirebaseOperation} from 'angularfire2/database/interfaces';
import { User } from '../../shared/user-model';

@Injectable()
export class UserProvider {

  userList : AngularFireList < any >;
  $userKey: string = '-LJU-nVcB4Jp-UXcA6dE';

  userAchievementList:  AngularFireList < any >;
  totalScore: number;
  

  constructor(private db : AngularFireDatabase, private auth : AuthServiceProvider) {
    this.userAchievementList = this.db.list('/userAchievementList');
    this.totalScore = 0;
    this.userList = this.db.list('/users');
  }


  getUsers() {
    return this.userList;
  }

  ionViewDidEnter() {

  }



  insertUser(user:User){
    this.userList.push({
      name: user.name,
      email: user.email,
      password: user.password,
    })
  }
  
  updateUser(user: User){
    this.userList.update(this.$userKey,user)
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
