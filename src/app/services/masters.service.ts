import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MastersService {

  constructor(public http: Http) { }
  getMaritalStatus(){
    return this.http.get('http://103.54.100.36:4104/weblogin/api/get-status')
      .map(res => res.json());
  }
}
