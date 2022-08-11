import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicroIframeComponent } from './micro-iframe.component';
import { MicroIframeRoutingModule } from './micro-iframe-routing.module';



@NgModule({
  declarations: [
    MicroIframeComponent
  ],
  imports: [
    CommonModule,
    MicroIframeRoutingModule
  ]
})
export class MicroIframeModule { }
