import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artista } from '../models/Artista';
import { Album } from '../models/Album';
import { Cancion } from '../models/Cancion';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private url: string = 'http://54.165.63.201:3000';
  constructor(private httpClient: HttpClient) { }

  getArtistas():Observable<Artista[]>{
    return this.httpClient.get<Artista[]>(this.url);
  }

  getAlbumes(id):Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.url}/album/${id}`);
  }
  getBuscar(nombre):Observable<Artista[]>{
    return this.httpClient.get<Artista[]>(`${this.url}/artista/${nombre}`);
  }
  getCancion(idAlbum):Observable<Cancion[]>{
    return this.httpClient.get<Cancion[]>(`${this.url}/cancion/${idAlbum}`);
  }
}
