import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';
import { CharactersService } from 'src/app/core/service/characters/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  route = inject(ActivatedRoute);
  dataService = inject(CharactersService);
  location = inject(Location);
  character$!: Observable<CaractersAnime>

  ngOnInit(): void {
    this.route.params
    .subscribe((params) =>{
      const id = params['id'];
      this.character$ = this.dataService.getDetails(id)
    })
  }

  onGoback(){
    this.location.back();
  }

}
