// user-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  { path: '', component: UserdetailsComponent }
  // Add other user-related routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
