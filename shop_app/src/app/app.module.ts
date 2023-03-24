import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './include/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Cookies1Component } from './cookies1/cookies1.component';
import { CookieService } from 'ngx-cookie-service';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { DashService } from './service/dash.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeaderComponent } from './include/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    FooterComponent,
    Cookies1Component,
    CustomerComponent,
    OrderComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,


  ],
  providers: [CookieService,DashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
