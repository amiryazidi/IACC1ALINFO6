import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { CalculService } from '../services/calcul.service';
import { ConsumerProductService } from '../services/consumer-product.service';

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
  stock!:number

  constructor(private Ps:ProductService,private cl : CalculService,private cons:ConsumerProductService){}

  ngOnInit(){
  //  this.listProduct=this.Ps.listProduct
  this.cons.getProduct().subscribe(
    (data)=>this.listProduct=data
  )
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

    getAlertStock(){
      this.stock=this.cl.calcul(this.listProduct,'quantity',0)
    }
    delete(id:number){
      this.cons.deleteProduct(id).subscribe(
        ()=>this.ngOnInit()
      )
    }
}
