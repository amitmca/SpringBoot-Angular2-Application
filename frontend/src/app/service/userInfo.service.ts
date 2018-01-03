import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class UserInfoService  {
    
  
  constructor(private http: Http)
  {
      console.log('UserInfoService intialized......');
  }
  getAllUserInfo()
  {
  return this.http.get('http://localhost:8080/userInfo')
      .map(
      (response:Response)=>
      { return response.json(); }
      );   
      
     
  }
}