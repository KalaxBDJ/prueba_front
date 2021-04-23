import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserdataComponent } from './home/userdata/userdata.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    UserdataComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    HomeComponent,
    LoginComponent
  ]
  
})
export class ComponentsModule { }
