import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './client/navbar/navbar.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './client/home/home.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CategoryIndexComponent } from './admin/category/category-index/category-index.component';
import { CategoryFormComponent } from './admin/category/category-form/category-form.component';
import { ProductIndexComponent } from './admin/product/product-index/product-index.component';
import { ProductFormComponent } from './admin/product/product-form/product-form.component';
import { IndexComponent } from './admin/dashboard/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoryIndexComponent,
    CategoryFormComponent,
    ProductIndexComponent,
    ProductFormComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
