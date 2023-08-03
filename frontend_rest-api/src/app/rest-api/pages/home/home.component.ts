import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from 'src/app/core/service/characters/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataService = inject(CharactersService);

  ngOnInit(): void {
    this.getslicehome();
  }

  getslicehome() {
    this.dataService.getCaracterHome()
    .subscribe( res => {
      console.log(res);
    })
  }
}
