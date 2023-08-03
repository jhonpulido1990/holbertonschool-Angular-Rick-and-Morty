import { Component, OnInit, inject, signal } from '@angular/core';
import { CaractersAnime } from 'src/app/core/interface/characters.interfaces';
import { CharactersService } from 'src/app/core/service/characters/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataService = inject(CharactersService);

  products = signal<CaractersAnime[]>([]);

  ngOnInit(): void {
    this.getslicehome();
    this.products()
    console.log(this.products())
  }

  getslicehome() {
    this.dataService.getCaracterHome().subscribe((res) => {
      this.products.set(res);
      console.log(res[1].id)
      console.log(this.products())
    });
  }
}
