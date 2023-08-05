import { Component, OnInit, inject } from '@angular/core';
import { CharactersService } from 'src/app/core/service/characters/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titleUrl = inject(CharactersService);
  data: string[] = []
  route = inject(Router);

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

  onSearch(value: string) {
    if (value && value.length > 3) {
      this.route.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }else {
      this.route.navigate(['/character-list'], {
        queryParams: { q: '' },
      });
    }
  }
}
