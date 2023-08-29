import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectionService {

  itemsBasket: number = 0;

  private selectedProducts: Product[] = [];

  addSelectedProduct(product: Product) {
    this.selectedProducts.push(product);
    this.totalOfBasket();
  }

  getSelectedProducts(): Product[] {
    return this.selectedProducts;
  }

  removeSelectedProduct(product: Product) {
    const index = this.selectedProducts.indexOf(product);
    if (index !== -1) {
      this.selectedProducts.splice(index, 1);
      this.totalOfBasket();
    }
  }

  totalOfBasket() {
    this.itemsBasket = this.selectedProducts.length;
    console.log("Hay " + this.itemsBasket);
    return this.itemsBasket;
  }
  
}
