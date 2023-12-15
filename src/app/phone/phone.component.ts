import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {

  listProduct:Product[]=[
    {id:1,title:'phone1',price:20,quantity:5,like:10,image:'../../assets/images/phone.jpg'},
    {id:2,title:'phone2',price:40,quantity:0,like:0,image:'../../assets/images/phone.jpg'},
    {id:3,title:'phone3',price:10,quantity:10,like:5,image:'../../assets/images/phone.jpg'},
  ]
}
