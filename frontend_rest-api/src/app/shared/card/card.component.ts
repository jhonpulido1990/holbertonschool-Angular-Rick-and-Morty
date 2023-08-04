import { Component, Input } from '@angular/core';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() products!: CaractersAnime;

}
