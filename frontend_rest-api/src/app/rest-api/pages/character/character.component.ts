import { Component, OnInit, inject } from '@angular/core';
import { AllCaracters } from 'src/app/core/interface/characters.interfaces';

import { CharactersService } from 'src/app/core/service/characters/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  dataService = inject(CharactersService);
  data!:AllCaracters[]

  ngOnInit(): void {
    this.getAnimeAll()
  }

  getAnimeAll() {
    this.dataService.getCaracter('')
    .subscribe(res => {
      this.data = res
    })
  }

}
