import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import {Router} from '@angular/router'; 


@Component({
  moduleId:module.id,
  selector: 'login',
 templateUrl: './login.component.html',  
})

export class LoginComponent  { 
  localUser = {};        

constructor(private router:Router){}
  forSubmit()
  {      
  //var key  = btoa(btoa(this.localUser.username)+'??'+btoa(this.localUser.password));
	//this.router.navigate(['/admin']);  
 	// document.cookie ="sessionID="+key;   
  }
}
