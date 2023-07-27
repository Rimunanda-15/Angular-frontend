import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { UserdetailsComponent } from './pages/dashboard/user/userdetails/userdetails.component';

const routes: Routes = 
[{
  path:"",
  component: LoginComponent
 },
//  {
//   path:"userdetail/:id",
//   component: UserdetailsComponent
//  },
 {
  path:"dashboard",
  component: DashboardComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
