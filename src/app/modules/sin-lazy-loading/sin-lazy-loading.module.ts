import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinLazyLoadingRoutingModule } from './sin-lazy-loading-routing.module';
import { SinLazyLoadingComponent } from './sin-lazy-loading.component';


@NgModule({
  declarations: [
    SinLazyLoadingComponent
  ],
  imports: [
    CommonModule,
    SinLazyLoadingRoutingModule
  ]
})
export class SinLazyLoadingModule { }
