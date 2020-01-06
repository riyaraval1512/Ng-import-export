import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatagoryComponent } from './catagory.component';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [CatagoryComponent],
  imports: [
    CommonModule,
    ProductModule
  ],
  exports:[
    CatagoryComponent
  ]
})
export class CatagoryModule { }
