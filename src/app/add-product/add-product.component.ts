import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  registerForm!: FormGroup;
  formbuilder: any;
  constructor(
    private fb: FormBuilder,
    private Ps: ProductService,
    private rout: Router,
    private con: ConsumerProductService
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
  }

  reset() {
    this.registerForm.reset();
  }

  ajouter() {
    // this.Ps.addProduct(this.registerForm.value)
    // this.rout.navigateByUrl('/product'){
    this.con
      .addProduct(this.registerForm.value)
      .subscribe(
        {
        next: () => this.rout.navigateByUrl('/product'),
        error:(error)=>console.log("erreur ")
      });
  }
}
