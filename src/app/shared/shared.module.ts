import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CtaButtonComponent } from './cta-button/cta-button.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    CtaButtonComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, FooterComponent, CtaButtonComponent, ProductListComponent]
})
export class SharedModule { }
