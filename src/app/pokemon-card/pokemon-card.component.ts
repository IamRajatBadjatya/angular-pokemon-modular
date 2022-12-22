import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pokemon } from '../pokemon.model';
import { fadeAnimation } from './pokemon-card.animation';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeAnimation]
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon;
}
