import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Cookies1Component } from './cookies1/cookies1.component';

const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'profile',component:ProfileComponent},
   {path:"dashboard",component:DashboardComponent},
   {path:"cookies1",component:Cookies1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
