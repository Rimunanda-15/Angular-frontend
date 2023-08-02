import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user/user.service';
import { CategoryServiceService } from './category/category-service.service';
import { ProductService } from './product/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInputComponent } from './user/user-input/user-input.component';
import { ProductInputComponent } from './product/product-input/product-input.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    CategoryComponent,
    ProductComponent,
    UserInputComponent,
    ProductInputComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    CategoryServiceService,
    ProductService
  ]
})
export class DashboardModule { }
