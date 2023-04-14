import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';
import { MasterpageComponent } from './masterpage/masterpage.component';

@NgModule({
  declarations: [ 
    CustomerComponent,
    HomeComponent,
    SupplierComponent,
    MasterpageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class AppModule { }
