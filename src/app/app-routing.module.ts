import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes:Routes = [
  {path:'', component:MainLayoutComponent, children:[
      {path:'', redirectTo:'users', pathMatch:'full'},
      {path:'users', loadChildren:()=>import('./modules').then(m=>m.UserModule)},
      {path:'posts', loadChildren:()=>import('./modules').then(m=>m.PostModule)},
      {path:'comments', loadChildren:()=>import('./modules').then(m=>m.CommentModule)}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
