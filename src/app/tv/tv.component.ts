import { Component, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {

 // @ViewChild(ShowOneProductComponent) child:any
  listProduct:Product[]=[
    {id:1,title:'Tv1',price:20,quantity:5,like:10,image:'../../assets/images/tv.jpg'},
    {id:2,title:'Tv2',price:40,quantity:0,like:0,image:'../../assets/images/tv.jpg'},
    {id:3,title:'Tv3',price:10,quantity:10,like:5,image:'../../assets/images/tv.jpg'},
  ]

  afterRecieveData(t:any){
    let index=this.listProduct.indexOf(t);
    this.listProduct[index].like++;
  }

}
