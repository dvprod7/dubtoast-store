import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'app/shared/product-list/product.model';
import { ProductSelectionService } from './product-selection.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  toastVisibility: { [productId: number]: boolean } = {};

  constructor(private http: HttpClient, private productSelectionService: ProductSelectionService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<Product[]>('./assets/data/products.json').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching product data', error);
      }
    );
  };

  onSelectProduct(product: Product) {
    this.productSelectionService.addSelectedProduct(product);
    /* console.log("producto añadido");
    console.table(product); */
    this.toastVisibility[product.id] = true;
    setTimeout(() => {
        this.toastVisibility[product.id] = false;
    }, 3000);
  }

  dismissToast(product: Product) {
    this.toastVisibility[product.id] = false;
  }
}
