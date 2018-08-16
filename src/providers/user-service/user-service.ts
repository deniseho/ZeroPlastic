import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AuthServiceProvider} from '../auth-service/auth-service';
import {FirebaseOperation} from 'angularfire2/database/interfaces';
import {User} from '../../shared/user-model';

@Injectable()
export class UserProvider {

  userList : AngularFireList < any >;
  $userKey : string = '-LK1lKdGyqIssZruGmac';

  // userAchievementList:  AngularFireList < any >;
  totalScore : number;

  constructor(private db : AngularFireDatabase, private auth : AuthServiceProvider) {
    // this.userAchievementList = this.db.list('/userAchievementList');
    this.totalScore = 0;
    this.userList = this
      .db
      .list('/users');
  }

  getUsers() {
    return this.userList;
  }

  ionViewDidEnter() {}

  insertUser(user : User) {
    this
      .userList
      .push({name: user.name, email: user.email, password: user.password})
  }

  updateUser(user : User) {
    this
      .userList
      .update(this.$userKey, user)
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
