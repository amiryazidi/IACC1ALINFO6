import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title:string='welcome';
  color='red';
  price!:number;
  listProduct:Product[]=[
    {id:1,title:'produit1',price:20,quantity:5,like:10,image:""},
    {id:2,title:'produit2',price:40,quantity:0,like:0,image:''},
    {id:3,title:'produit3',price:10,quantity:10,like:5,image:''},
  ]

    sayHello(){
      alert('hello')
    }
    incrementLike(i:number){
    this.listProduct[i].like++;
    }

    buy(i:number){
      this.listProduct[i].quantity--;

    }
}
