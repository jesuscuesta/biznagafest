import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinLazyLoadingComponent } from './modules/sin-lazy-loading/sin-lazy-loading.component';

const routes: Routes = [
  {
    path: 'iframe',
    loadChildren: () => import('./modules/micro-iframe/micro-iframe.module').then(m => m.MicroIframeModule)
  },
  {
    path: 'sin-lazy',
    component: SinLazyLoadingComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
