import { NgModule } from '@angular/core';
import { CatagoryComponent } from './catagory.component';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CatagoryComponent],
  imports: [
    SharedModule,
    ProductModule
  ],
  exports:[
    CatagoryComponent
  ]
})
export class CatagoryModule { }
