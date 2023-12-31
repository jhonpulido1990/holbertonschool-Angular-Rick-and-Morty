import { Component, OnInit, inject } from '@angular/core';
import { filter, take } from 'rxjs';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';
import { CharactersService } from 'src/app/core/service/characters/characters.service';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

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
  router = inject(Router)
  info: RequestInfo = {
    next: null,
  };

  private pageNum = 1;
  private query: any;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(){
    this.onUrlChange()
  }

  ngOnInit(): void {
    this.getDataByQuery();
  }

  paginationMore(){
    if (this.pageNum < 43){
      this.pageNum++;
      this.getDataByQuery()
    }

  }

  paginationMinus(){
    if (this.pageNum > 0) {
      this.pageNum--;
      this.getDataByQuery()
    }

  }

  onUrlChange() {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() =>{
      this.characters = [];
      this.pageNum = 1;
      this.getDataByQuery()
    })
  }

  getDataByQuery() {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.query = params.get('q');
      if (!this.query){
        this.query = ''
      }
      this.getDataService();
    });
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
          this.characters = [];
        }
      });
  }
}
