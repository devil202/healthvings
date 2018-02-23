import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthenticateService } from './services/authenticate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SaveDataService } from './services/save-data.service';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const appRoutes=[
  {path:'',component:LoginComponent},
  {path:'home',component:DashboardComponent,canActivate:[AuthGuardGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthenticateService,SaveDataService,AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
