import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MastersService {

  constructor(public http: Http) { }
  getMaritalStatus(){
    return this.http.get('http://103.54.100.36:4127/krishnaconsciousmatches/dev/api/get_select_data')
      .map(res => res.json());
  }

  getState(country){
  	return this.http.get('http://103.54.100.36:4127/krishnaconsciousmatches/dev/api/get_state/'+country)
      .map(res => res.json());
  }
  getCity(cnt_code,state){
  	return this.http.get('http://103.54.100.36:4127/krishnaconsciousmatches/dev/api/get_city/'+cnt_code +'/'+state)
      .map(res => res.json());
  }
  insertData(body){
    return this.http.post('http://103.54.100.36:4127/krishnaconsciousmatches/dev/api/insert_member',body)
      .map(res => res.json());
  }
  
}
