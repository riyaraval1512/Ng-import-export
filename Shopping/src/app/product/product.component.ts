import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ProductDetails =[
    {id:1, compnayname:"Suzuki", name:"OMNI"},
    {id:2, compnayname:"Suzuki", name:"ECCO"}];   



constructor() { }

  ngOnInit() {
  }
   
}