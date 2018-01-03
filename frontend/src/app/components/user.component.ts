import { Component } from '@angular/core';
import { UserInfoService } from '../service/userInfo.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: 'user.component.html', 

  providers:[UserInfoService]
})
export class UserComponent  {
  name :String ; 
 contact:String;
email :String ;
address :address; 
interests:String[];
showInterest:boolean;
userRecords:Data[];


constructor(private userInfoservice:UserInfoService)
{


  this.name = 'Riaan P'; 
  this.email ='riaan.nayak@gmail.com'
  this.address={
    street:'GoldenSeal Sq.',
    city:'Ashburn',
    state:'VA'    
		}

this.interests=['Cricket','Football','Dancing'];
this.showInterest=false;


this.userInfoservice.getAllUserInfo().subscribe(userRecords =>
    {
        this.userRecords = userRecords
    });
    
   }
toggleInterest()
{
  if(this.showInterest==true){
    this.showInterest = false;
  }
  else{
    this.showInterest = true;
  }
  
}
addInterest(interest:string){
  this.interests.push(interest);  
}



deleteInterest(i:number){
  this.interests.splice(i, 1);  
}
}


interface address{
  street:String;
  city:String;
  state:String;
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
