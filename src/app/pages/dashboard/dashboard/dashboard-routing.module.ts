import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { UserdetailsComponent } from '../user/userdetails/userdetails.component';
import { UserFormComponent } from '../user/user-form/user-form.component';
import { UserInputComponent } from '../user/user-input/user-input.component';
import { ProductInputComponent } from '../product/product-input/product-input.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { CategoryInputComponent } from '../category/category-input/category-input.component';
import { CategoryDetailsComponent } from '../category/category-details/category-details.component';

const routes: Routes = 
[
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: 'userdetails',
                loadChildren:() => import('../user/usermodule.module').then(m => m.UsermoduleModule)
            }
        ]
    },
    
    {
        path: 'user/userdetail/:id',
        component:UserdetailsComponent
    },
    {
        path: 'user/adduser',
        component: UserFormComponent
    },
    {
        path: 'user/add',
        component: UserInputComponent
    },

    {
        path:'category',
        component: CategoryComponent
    },
    {
        path: 'category/add',
        component: CategoryInputComponent
    },
    {
        path: 'category/categorydetails/:id',
        component: CategoryDetailsComponent

    },
    {
        path:'product',
        component: ProductComponent
    },
    {
        path:'product/add',
        component: ProductInputComponent
    },
    {
        path:'product/productdetails/:id',
        component: ProductDetailsComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
