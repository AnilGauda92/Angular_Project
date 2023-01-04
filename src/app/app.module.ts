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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    EmployeeCrudComponent,
    FormDemo1Component,
    FormDemo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
