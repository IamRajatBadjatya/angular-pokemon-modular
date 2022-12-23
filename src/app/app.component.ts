import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonGridWithControlsComponent } from './pokemon-grid-with-controls/pokemon-grid-with-controls.component';

import { Pokemon } from './pokemon.model';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, PokemonGridWithControlsComponent],
  providers: [PokemonService],
})
export class AppComponent {
  pokemons$: Observable<Pokemon[]> = this.pokemonService.getPokemons();
  constructor(private readonly pokemonService: PokemonService) {}
}
