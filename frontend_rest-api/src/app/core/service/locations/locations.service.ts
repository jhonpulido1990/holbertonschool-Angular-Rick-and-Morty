import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LocationAnime } from '../../interface/locations.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private readonly baseUrl = environment.apiUrl;

  http = inject(HttpClient);

  getLocation(page = 1){
    const filter = `${this.baseUrl}/location/?page=${page}`;
    return this.http.get<LocationAnime[]>(filter)
  }
}
