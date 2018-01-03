import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { UserComponent }  from './components/user.component';
import { HomeComponent }  from './components/home.component';
import { LoginComponent }  from './components/login.component';
import { AdminComponent }  from './components/admin.component';
import { UserDummyComponent } from './components/userdummy.component';
import { UserInfoService }  from './service/userInfo.service';
import { routing }  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,UserComponent,HomeComponent,AdminComponent,LoginComponent,UserDummyComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule,DataTablesModule, routing
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
