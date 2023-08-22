import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CtaButtonComponent } from './cta-button/cta-button.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    CtaButtonComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuComponent, FooterComponent, CtaButtonComponent, ProductListComponent]
})
export class SharedModule { }
