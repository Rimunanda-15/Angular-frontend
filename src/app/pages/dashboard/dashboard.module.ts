import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user/user.service';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }
