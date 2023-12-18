import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title:string='welcome';
  color='red';
  price:number=5;
  listProduct!:Product[]

  constructor(private Ps:ProductService){}

  ngOnInit(){
    this.listProduct=this.Ps.listProduct
  }


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
