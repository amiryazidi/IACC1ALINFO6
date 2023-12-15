import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TvComponent } from './tv/tv.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {path:'product',component:HomeComponent},
  {path:'',redirectTo:'/product', pathMatch:'full'},
  {path:'residence',component:ResidenceComponent},
  {path:'form',component:ReactiveComponent},
  {path:'tv',component:TvComponent},
  {path:'phone',component:PhoneComponent},
  {path:'product/:id',component:DetailProductComponent},
  {path:'showApparts/:id',component:AppartmentComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
