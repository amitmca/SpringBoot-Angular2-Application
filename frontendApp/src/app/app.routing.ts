import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login.component';
import { AdminComponent } from './components/admin.component';
import { UserDummyComponent } from './components/userdummy.component';


const appRoutes : Routes= [
    {
        path:'',
        component: HomeComponent
    },
     {
        path:'userInfo',
        component: UserDummyComponent
    },
     {
        path:'admin',
        component: AdminComponent
    },
 
    {
        path:'home',
        component: HomeComponent 
    },
    {
        path:'user',
        component: UserComponent 
    },
    
  {
        path:'login',
        component: LoginComponent
    }
    
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


