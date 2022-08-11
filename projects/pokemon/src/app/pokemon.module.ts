import { NgModule } from '@angular/core';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonComponent } from './pokemon.component';
import { CharmanderComponent } from './shared/charmander/charmander.component';

@NgModule({
  declarations: [
    PokemonComponent,
    CharmanderComponent
  ],
  imports: [
    PokemonRoutingModule
  ],
  providers: [],
  bootstrap: [PokemonComponent]
})
export class PokemonModule { }
