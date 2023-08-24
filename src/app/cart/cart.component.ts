import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  totalPrice: number = 0;

  totalBasket(value: number) {
    /* console.log('El total es de', value); */
    this.totalPrice = value;
  }
}
