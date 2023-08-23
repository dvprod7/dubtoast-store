import { Component, OnInit } from '@angular/core';
import { Product } from 'app/shared/product-list/product.model';
import { ProductSelectionService } from 'app/shared/product-list/product-selection.service';

@Component({
  selector: 'app-products-basket',
  templateUrl: './products-basket.component.html',
  styleUrls: ['./products-basket.component.scss']
})
export class ProductsBasketComponent implements OnInit {
  
  selectedProducts: Product[] = [];

  constructor(private productSelectionService: ProductSelectionService) {}

  ngOnInit() {
    this.selectedProducts = this.productSelectionService.getSelectedProducts();
  }

}
