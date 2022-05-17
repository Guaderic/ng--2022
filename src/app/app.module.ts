import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { UsersComponent } from './components/users/users.component';


import {RouterModule} from "@angular/router";
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'home-page', pathMatch: 'full'},
      {path:'home-page', component:HomeComponent},
      {path:'users-page',
        component:UsersComponent, children:[
          {path:'user-details/:id', component: UserDetailsComponent}
        ]
      }
      //{path:'user-details/:id', component:UserDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
