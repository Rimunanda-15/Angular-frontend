import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { UserdetailsComponent } from '../user/userdetails/userdetails.component';

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
        path:'category',
        component: CategoryComponent
    },
    {
        path:'product',
        component: ProductComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
