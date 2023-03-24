import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Cookies1Component } from './cookies1/cookies1.component';
import {CustomerComponent} from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './service/auth.guard';

// import { Route, RouterModule } from 'react-router-dom';
const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'profile',component:ProfileComponent},
   {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
   {path:"cookies1",component:Cookies1Component},
   {
    path:"customer",loadChildren:()=>import("./customer/customer.module").then(mod=>mod.CustomerModule),
    component:CustomerComponent
   },
   {
    path:"order",loadChildren:()=> import("./order/order.module").then(mod=>mod.OrderModule),
    component:OrderComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
