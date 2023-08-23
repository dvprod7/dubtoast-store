import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectionService {

  private selectedProducts: Product[] = [];

  addSelectedProduct(product: Product) {
    this.selectedProducts.push(product);
  }

  getSelectedProducts(): Product[] {
    return this.selectedProducts;
  }
  
}
