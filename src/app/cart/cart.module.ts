import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsBasketComponent } from './products-basket/products-basket.component';



@NgModule({
  declarations: [
    CartComponent,
    ProductsBasketComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
