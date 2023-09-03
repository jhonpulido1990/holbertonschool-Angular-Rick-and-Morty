import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';
import { ArrayLocation, LocationAnime } from 'src/app/core/interface/locations.interfaces';
import { CharactersService } from 'src/app/core/service/characters/characters.service';
import { LocationsService } from 'src/app/core/service/locations/locations.service';

type RequestInfo = {
  next: string | null;
}


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: ArrayLocation[] = [];
  residentes: number[] | number = [];
  productos!:CaractersAnime[];
  data: CaractersAnime[] = [];
  dictionario: {dataresidente: CaractersAnime[]}[] = []
  dataService = inject(LocationsService);
  dataServiceLocation = inject(CharactersService)
  route = inject(ActivatedRoute);
  router = inject(Router)

  info: RequestInfo = {
    next: null,
  }

  private pageNum = 1;

  constructor(){
    this.getDataService();
  }

  ngOnInit(): void {
    this.getDataService()
  }

  paginationMore(){
    if (this.pageNum < 8){
      this.pageNum++;
      this.getDataService();
    }

  }

  paginationMinus(){
    if (this.pageNum > 0) {
      this.pageNum--;
      this.getDataService();
    }

  }

  getDataService() {
    this.dataService
      .getLocation(this.pageNum)
      .subscribe((res: any) => {
        if (res?.results?.length) {
          const { info, results } = res;
          this.locations = []
          this.locations = [...this.locations, ...results];
          this.info = info;
        } else {
          this.locations = [];
        }
        for (let index = 0; index < this.locations.length; index++) {
          const element = this.locations[index].residents;
          this.residentes = [];
          for (let index2 = 0; index2 < element.length; index2++) {
            this.residentes.push(parseInt(element[index2].split('/').slice(-1)[0]))
          }
          this.locations[index].array = this.residentes
        }
        this.getcaracter();
      });

  }

  getcaracter(){
    for (let index = 0; index < this.locations.length; index++) {
      const element = this.locations[index].array;
      this.getCaracterMultiple(element!, index)
    }
  }

  getCaracterMultiple(arrays: any, index: number) {
    this.dataServiceLocation.getCaracterHome(arrays)
    .subscribe((res) => {
      this.productos = res;
      this.locations[index].Caracter = this.productos
    })
  }
}
