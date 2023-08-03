import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from 'src/app/core/service/characters/characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titleUrl = inject(CharactersService);
  data: string[] = []

  ngOnInit(): void {
    this.getNavbartitle();
  }

  getNavbartitle() {
    this.titleUrl.getNavbar().subscribe((res) => {
      for (let key in res) {
        this.data.push(key.slice(0, key.length -1))
      }
    });
  }
}
