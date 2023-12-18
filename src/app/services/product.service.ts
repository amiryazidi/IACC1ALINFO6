import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  listProduct:Product[]=[
    {id:1,title:'produit1',price:20,quantity:5,like:10,image:""},
    {id:2,title:'produit2',price:40,quantity:0,like:0,image:''},
    {id:3,title:'produit3',price:10,quantity:10,like:5,image:''},
  ]

  addProduct(product:Product){
    this.listProduct.push(product);
  }
}
