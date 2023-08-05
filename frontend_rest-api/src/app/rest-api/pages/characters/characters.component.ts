import { Component, Input } from '@angular/core';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';

@Component({
  selector: 'app-characters',
  template: ``,
})
export class CharactersComponent {
  @Input() character!:CaractersAnime;
}
