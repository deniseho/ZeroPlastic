import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TopicOnePage} from '../topic-one/topic-one';
import {TopicTwoPage} from '../topic-two/topic-two';
import {TopicThreePage} from '../topic-three/topic-three';
import {TopicFourPage} from '../topic-four/topic-four';
import {TopicFivePage} from '../topic-five/topic-five';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UserProvider } from '../../providers/user-service/user-service';
import { User } from '../../shared/user-model';

@Component({selector: 'page-hello-ionic', templateUrl: 'topic-menu.html'})

export class TopicMenu {
  pages: Array<{title: string, component: any}>;
  currentUser: User;
  userList:User[];

  constructor(public navCtrl : NavController, 
    public navParams : NavParams, 
    private auth: AuthServiceProvider,
    private userApi: UserProvider,
    private toast : ToastServiceProvider,
  ) {
      this.userList = [];
      this.pages = [
      { title: 'About Plastic', component: TopicOnePage },
      { title: 'Top 10 countries', component: TopicTwoPage },
      { title: 'Species Affected', component: TopicThreePage },
      { title: 'Take Action', component: TopicFourPage },
      { title: 'Activities', component: TopicFivePage },
    ];

    this.currentUser = this.auth.getCurrentUser();

    var x = this.userApi.getUsers();
    x.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        console.log("y")
        console.log(y)
        console.log("item")
        console.log(item)
        this.userList.push(y as User);
        console.log("this.userList")
        console.log(this.userList)
      });
    });


  }

  ionViewDidLoad() {
    this.userApi.loginUser = Object.assign({}, this.currentUser);
console.log("this.userApi.loginUser")
console.log(this.userApi.loginUser)
    
    //0 = first time login
    //1= not first time login
    if(this.currentUser.firstLogin==0){
      this
      .toast
      .showToast("Get sign up bonus 5 points", "badgeToast");
      this.currentUser.totalScore += 5;
      this.currentUser.firstLogin = 1;
      this.userApi.updateUser(this.currentUser);
    }else{
      this
      .toast
      .showToast(`Hi, ${this.currentUser.name}! Welcome back.`, "textToast");
    }

  }


  gotoPage(p){
    this
    .navCtrl
    .push(p);
  }
}
