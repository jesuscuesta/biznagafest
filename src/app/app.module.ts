import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinLazyLoadingModule } from './modules/sin-lazy-loading/sin-lazy-loading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SinLazyLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
