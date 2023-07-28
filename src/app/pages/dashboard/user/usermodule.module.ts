import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserdetailsComponent,
    UserFormComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UsermoduleModule { }
