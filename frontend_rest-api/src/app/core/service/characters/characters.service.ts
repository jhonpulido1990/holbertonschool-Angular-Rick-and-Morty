import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import {
  AllCaracters,
  Caracters,
  CaractersAnime,
} from '../../interface/characters.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly baseUrl = environment.apiUrl;

  http = inject(HttpClient);

  getNavbar(): Observable<Caracters[]> {
    return this.http.get<Caracters[]>(this.baseUrl);
  }
  getCaracterHome(array: number | number[] = [1,2,3,4,5,6,7,8,9,10]): Observable<CaractersAnime[]> {
    return this.http.get<CaractersAnime[]>(
      `${this.baseUrl}/character/${array}`
    );
  }
  getCaracter(query = '', page = 1): Observable<CaractersAnime[]> {
    const filter = `${this.baseUrl}/character/?name=${query}&page=${page}`
    return this.http.get<CaractersAnime[]>(filter);
  }

  getDetails(id: number){
    return this.http.get<CaractersAnime>(`${this.baseUrl}/character/${id}`)
  }
}
