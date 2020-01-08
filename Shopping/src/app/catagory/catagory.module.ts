import { NgModule } from '@angular/core';
import { CatagoryComponent } from './catagory.component';
import { ProductModule } from '../product/product.module';
//import { SharedModule } from '../shared/shared.module';
//import{FormsModule}from'@angular/forms';//(for data binding)
//import { from } from 'rxjs';


@NgModule({
  declarations: [CatagoryComponent],
  imports: [
   ProductModule,
   //FormsModule
  ],
  exports:[
    CatagoryComponent
  ]
})
export class CatagoryModule { }
