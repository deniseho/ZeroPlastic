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
  
  constructor(public navCtrl : NavController, 
    public navParams : NavParams, 
    private auth: AuthServiceProvider,
    private userApi: UserProvider,
    private toast : ToastServiceProvider,
  ) {
    
      this.pages = [
      { title: 'Plastic Pollution', component: TopicOnePage },
      { title: 'About Pollution', component: TopicTwoPage },
      { title: 'Species Affected', component: TopicThreePage },
      { title: 'Take Action', component: TopicFourPage },
      { title: 'Activities', component: TopicFivePage },
    ];

    this.currentUser = this.auth.currentUser;
  }

  ionViewDidLoad() {
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
