import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    HomeBannerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeBannerComponent
  ]
})
export class HomeModule { }
