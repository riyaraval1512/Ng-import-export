import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent implements OnInit {

  constructor() { }
  price1:number;
  ngOnInit() {
  }
  prcchange(value:number){
   this.price1=value;
  }

}
