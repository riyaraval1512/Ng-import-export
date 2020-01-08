import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

export interface IProductDetails{
  id:number,
  compnayname:String,
  name:String,
  price:number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  @Input() Price:number; 
  temp = 0;
  isValid: boolean = true;

ProductDetails:IProductDetails[];

constructor() { }

  ngOnInit() {
    this.ProductDetails =[
      {id:1, compnayname:"Suzuki", name:"OMNI", price:10000},
      {id:2, compnayname:"Suzuki", name:"ECCO", price:11000},
      {id:3, compnayname:"Suzuki", name:"SX4", price:12000},
      {id:4, compnayname:"Hyundai", name:"i10", price:13000},
      {id:5, compnayname:"Hyundai", name:"i20", price:14000},
      {id:6, compnayname:"Hyundai", name:"Tucson", price:15000}];  
  }
  ngOnChanges(changes:SimpleChanges){
    for(let chng in changes){
      this.temp += 1;
      if (this.temp > 1) {
        this.isValid = false;
      }
    }
  }
}