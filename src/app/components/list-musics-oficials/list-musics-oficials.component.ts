import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicsService } from 'src/app/services/music/musics.service';
import { Artista } from 'src/app/models/Artista';
import { Observer } from 'rxjs';
import { ArtistsService } from 'src/app/services/artists.service';
import { Cancion } from 'src/app/models/Cancion';


@Component({
  selector: 'app-list-musics-oficials',
  templateUrl: './list-musics-oficials.component.html',
  styleUrls: ['./list-musics-oficials.component.scss']
})
export class ListMusicsOficialsComponent implements OnInit {

  artista:any[]=[];
  index:string=null;
  constructor(private route: ActivatedRoute,
              private _musicService: ArtistsService) {
    this.route.params.subscribe( params => {
      this.index = params['id'];
      console.log(params['id']);
      this.getCancion(params['id']);
      
    });
    
  }

  getCancion(id: String){
    let observador:Observer<Cancion[]>={
      next: (data) => {
        console.log(data);
        this.artista=data;
        console.log(this.artista);
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._musicService.getCancion(id)
    .subscribe(observador);
  }


  ngOnInit() {
  }

}
