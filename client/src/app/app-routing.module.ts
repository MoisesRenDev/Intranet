import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './client/home/home.component';
import { IndexComponent } from './admin/dashboard/index/index.component';
import { CategoryIndexComponent } from './admin/category/category-index/category-index.component';
import { ProductIndexComponent } from './admin/product/product-index/product-index.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin/dashboard", component: IndexComponent },
  { path: "admin/categories/index", component: CategoryIndexComponent },
  { path: "admin/products/index", component: ProductIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
