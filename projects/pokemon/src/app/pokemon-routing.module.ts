import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { CharmanderComponent } from './shared/charmander/charmander.component';

const routes: Routes = [{
  path: '',
  component: PokemonComponent
},
{
  path: 'charmander',
  component: CharmanderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
