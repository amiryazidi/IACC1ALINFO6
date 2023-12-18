import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!:number
  product!:Product[]
  constructor(private route:ActivatedRoute,private Ps:ProductService){}

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.product=this.Ps.listProduct

  }

}
