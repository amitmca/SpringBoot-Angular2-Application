import { Component } from '@angular/core';
import {Router} from '@angular/router'; 

@Component({
  selector: 'admin',
  template: `
  <h1>Hello Admin !!</h1>`
})
export class AdminComponent  { 
  
     constructor(public router:Router){
    
    var i=0;
    var x = document.cookie.split(';');
    var value;
    for(;i< x.length;i++)
    {
     
      
      if (x[i].split("=")[0] =='sessionID')
      {
        
         value =x[i].split("=")[1];
         var userDetails = atob(value);
         var username = userDetails.split("??")[0];
         var password = userDetails.split("??")[1];      
         
         
         if(atob(username) == "admin" && atob(password )== "password")
         {
          
          this.router.navigate(['/user']);        
         } 
         else{
          this.router.navigate(['/login']);    
         }
        
      }
     
    }
}
}
