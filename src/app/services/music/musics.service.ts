import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Artista } from '../../models/Artista';

const API_URL_MUSIC='http://localhost:3000/canciones/';
const API_URL_ARTISTAS='http://localhost:3000/artistas/';
const API_URL_ARTISTA='http://localhost:3000/artista';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {

  constructor(private httpClient:HttpClient) { }

    getArtistas():Observable<Artista[]>{
        return this.httpClient.get<Artista[]>(API_URL_ARTISTAS);
    }
    getArtista(id:String):Observable<Artista[]>{
        return this.httpClient.get<Artista[]>(`${API_URL_ARTISTA}/${id}`);
    }
}
