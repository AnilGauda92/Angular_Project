import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CenterComponent } from './components/center/center.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDemo1Component } from './componets/form-demo1/form-demo1.component';
import { FormDemo2Component } from './componets/form-demo2/form-demo2.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    EmployeeCrudComponent,
    FormDemo1Component,
    FormDemo2Component,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ServicesComponent,
    PagenotfoundComponent,
    ProductsComponent,
    ProductdetailsComponent,
    ProductdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
