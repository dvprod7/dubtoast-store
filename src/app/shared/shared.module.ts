import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CtaButtonComponent } from './cta-button/cta-button.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    CtaButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent, FooterComponent, CtaButtonComponent]
})
export class SharedModule { }
