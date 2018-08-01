import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SQLite} from '@ionic-native/sqlite';
import {SqlStorageProvider} from '../sql-storage/sql-storage';
import {Events} from 'ionic-angular';

/*
  Generated class for the UserSettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const win : any = window;

@Injectable()
export class UserSettingProvider {
  private sqlMode = false;

  constructor(public storage : Storage, private sql : SqlStorageProvider) {
    if (win.sqlitePlugin) {
      this.sqlMode = true;
    } else {
      console.log("SQLite plugin not installed. Falling back to regular Ionic Storage.");
    }
  }

  getUserData(userid : string) : Promise < boolean > {
    if(this.sqlMode) {
      return this
        .sql
        .get(userid.toString())
        .then(value => value
          ? true
          : false);
    } else {
      return new Promise(resolve => resolve(this.storage.get(userid.toString()).then(value => value
        ? true
        : false)));
    }
  }

  initStorage() : Promise < any > {
    if(this.sqlMode) {
      return this
        .sql
        .initializeDatabase();
    } else {
      return new Promise(resolve => resolve());
    }
  }
}
