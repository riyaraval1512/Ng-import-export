import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  ProductDetails =[
    {id:"ID",compnayname:"Compnay Name", name:"Name"},
    {id:1, compnayname:"Suzuki", name:"OMNI"},
    {id:2, compnayname:"Suzuki", name:"ECCO"},
    {id:3, compnayname:"Suzuki", name:"SX4"},
    {id:4, compnayname:"Hyundai", name:"i10"},
    {id:5, compnayname:"Hyundai", name:"i20"},
    {id:6, compnayname:"Hyundai", name:"Tucson"}];   



constructor() { }

  ngOnInit() {
  }
   
}