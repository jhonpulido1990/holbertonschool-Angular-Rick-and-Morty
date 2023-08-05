import { Component, OnInit, inject } from '@angular/core';
import { take } from 'rxjs';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';
import { CharactersService } from 'src/app/core/service/characters/characters.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

type RequestInfo = {
  next: string | null;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: CaractersAnime[] = [];
  dataService = inject(CharactersService);
  route = inject(ActivatedRoute);
  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: any;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  ngOnInit(): void {
    this.getDataByQuery();
  }

  getDataByQuery() {
    this.route.queryParamMap
    .subscribe((params: ParamMap)=>{
      console.log(params)
      this.query = params.get('q');
      this.getDataService();
    })

  }

  getDataService() {
    this.dataService
      .getCaracter(this.query, this.pageNum)
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.characters = []
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = []
        }

      });
  }
}
