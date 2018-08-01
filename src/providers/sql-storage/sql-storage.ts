import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

/*
  Generated class for the SqlStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SqlStorageProvider {
  private db : SQLiteObject;
  constructor(public sqlite : SQLite) {}

  get(key : string) {
    return this
      .db
      .executeSql('select key, value from userData where key = ?', [key])
      .then(data => {
        return JSON.parse(data.rows.item(0).value);
      });
  }

  set(key: string, value: string) {
    return this.db.executeSql('insert or replace into userData(key, value) values (?, ?)', 
    [key, value]).then(data => {
      if(data.rows.length > 0){
        return JSON.parse(data.rows.item(0).value);
      }
    })
  }

  initializeDatabase() {
    return this
      .sqlite
      .create({name: 'data.db', location: 'default'})
      .then(db => {
        this.db = db;
        return this
          .db
          .executeSql('CREATE TABLE IF NOT EXISTS userData (key text primary key, value text)', [])
          .then(data => {
            console.log('**after CREATE TABLE check', data);
          });
      });
  }
}
