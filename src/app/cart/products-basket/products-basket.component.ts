import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'app/shared/product-list/product.model';
import { ProductSelectionService } from 'app/shared/product-list/product-selection.service';

@Component({
  selector: 'app-products-basket',
  templateUrl: './products-basket.component.html',
  styleUrls: ['./products-basket.component.scss']
})
export class ProductsBasketComponent implements OnInit {

  emptyBasket: boolean = true;
  selectedProducts: Product[] = [];
  @Output() totalofBasket: EventEmitter<number> = new EventEmitter<number>();

  constructor(private productSelectionService: ProductSelectionService) {}

  ngOnInit() {
    this.selectedProducts = this.productSelectionService.getSelectedProducts();
    if (this.selectedProducts.length == 0) {
      this.emptyBasket = true;
    } else {
      this.emptyBasket = false;
    }
    this.emitTotalValue();
  }

  emitTotalValue() {
    const totalValue = this.calculateTotalValue();
    this.totalofBasket.emit(totalValue);
  }

  private calculateTotalValue(): number {
    return this.selectedProducts.reduce((total, product) => total + product.price, 0);
  }

  removeProduct(product: Product) {
    this.productSelectionService.removeSelectedProduct(product);
    const totalValue = this.calculateTotalValue();
    this.totalofBasket.emit(totalValue);
    if (totalValue == 0) {
      this.emptyBasket = true;
    }
  }

}
