import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ProductSelectionService } from 'app/shared/product-list/product-selection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  @ViewChild('menuCheckbox', { static: true }) menuCheckbox!: ElementRef<HTMLInputElement>;
  isMenuOpen = false;
  isMenuFixed = false;
  cartItems: number = 0;

  constructor(private productSelectionService: ProductSelectionService) {}

  ngOnInit() {
    this.updateCartItems();
    console.log("Ahora hay " + this.cartItems + " productos")
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 0 && !this.isMenuFixed) {
      this.isMenuFixed = true;
    } else if (scrollPosition === 0 && this.isMenuFixed) {
      this.isMenuFixed = false;
    }
  }
  
  toggleMenu() {
    if (!this.isMenuOpen) {
      this.isMenuOpen = this.menuCheckbox.nativeElement.checked;
    } else {
      /* Adds a little time to execute the closing animation 
      for the menu and change the state for isMenuOpen */
      setTimeout(() => { 
        this.isMenuOpen = this.menuCheckbox.nativeElement.checked;
      }, 500);
    }
  }

  uncheckInput() {
    this.menuCheckbox.nativeElement.checked = false;
    setTimeout(() => { 
      this.isMenuOpen = false;
    }, 500);
  }

  updateCartItems() {
    this.cartItems = this.productSelectionService.itemsBasket;
  }
}
