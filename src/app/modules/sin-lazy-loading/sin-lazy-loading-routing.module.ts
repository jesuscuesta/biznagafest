import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinLazyLoadingComponent } from './sin-lazy-loading.component';

const routes: Routes = [
  {
    path: '',
    component: SinLazyLoadingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinLazyLoadingRoutingModule { }
