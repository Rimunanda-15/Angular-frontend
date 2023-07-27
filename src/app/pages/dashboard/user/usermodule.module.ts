import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    UserdetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UsermoduleModule { }
