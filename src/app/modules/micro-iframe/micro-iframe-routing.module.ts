import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroIframeComponent } from './micro-iframe.component';

const routes: Routes = [
  {
    path: '',
    component: MicroIframeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroIframeRoutingModule { }
