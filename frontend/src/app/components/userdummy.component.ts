import { Component } from '@angular/core';
import { UserInfoService } from '../service/userInfo.service';

@Component({
  moduleId:module.id,
  selector: 'userdummy',
  templateUrl: 'userdummy.component.html', 

  providers:[UserInfoService]
})
export class UserDummyComponent  {
 
userRecords:Data[];


constructor(private userInfoservice:UserInfoService)
{
this.userInfoservice.getAllUserInfo().subscribe(userRecords =>
    {
        this.userRecords = userRecords
    });

   }
}

interface Data{
 id:number;
 name:String;
 contactInfo:String;
 occupation:String;
 InterestIn:String;
language:String;
outfit:String;
  
}



