import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  pokemons$: Observable<Pokemon[]> = this.pokemonService.getPokemons();
  constructor(private readonly pokemonService: PokemonService) {
    console.log('Pokemon Component');
  }
}
