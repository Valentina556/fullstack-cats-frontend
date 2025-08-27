import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../../shared/models/breed.model';
import { Image } from '../../shared/models/image.model';
import { environment } from '../../../environments/environment';  

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.api}/breeds`);
  }

  getBreedById(id: string): Observable<Breed> {
    return this.http.get<Breed>(`${this.api}/breeds/${id}`);
  }

  searchBreeds(q: string): Observable<Breed[]> {
    const params = new HttpParams().set('q', q);
    return this.http.get<Breed[]>(`${this.api}/breeds/search`, { params });
  }

  getImagesByBreedId(breedId: string, limit = 8): Observable<Image[]> {
    const params = new HttpParams().set('breed_id', breedId).set('limit', String(limit));
    return this.http.get<Image[]>(`${this.api}/imagesbybreedid`, { params });
  }
}
