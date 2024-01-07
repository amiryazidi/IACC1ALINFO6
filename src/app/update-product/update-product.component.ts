import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  registerForm!: FormGroup;
  formbuilder: any;
  id!:number
  product!:Product
  constructor(
    private fb: FormBuilder,
    private rout: Router,
    private con: ConsumerProductService,
    private act:ActivatedRoute
  ) {}
  ngOnInit() {
    this.formbuilder = this.fb.group({
      firstName: ['tt', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('[a-z-A-Z]+$')]],
    });
    this.registerForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+$'),
      ]),
      like: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
    });

    //1-récuperer id depuis lurl
    this.id=this.act.snapshot.params['id']
    //2-Appeler la méthode du service pour ibtenir les details du produit
    this.con.getProductById(this.id).subscribe(
      (data)=>{this.product=data;
      //3- initialiser le formulaire avec les données du produit
          this.registerForm.patchValue(this.product)
      }
      )

  }

  reset() {
    this.registerForm.reset();
  }

  update() {
    this.con.updateProduct(this.registerForm.value,this.id).subscribe(
      ()=>this.rout.navigateByUrl('product')
    )
  }
}
