import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreMainComponent } from './store-main/store-main.component';
import { StoreFilterComponent } from './store-filter/store-filter.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    StoreMainComponent,
    StoreFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    StoreMainComponent,
    StoreFilterComponent
  ]
})
export class StoreModule { }
