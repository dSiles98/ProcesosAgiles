import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { ActivatedRoute} from '@angular/router';
import { Observer } from 'rxjs';
import { Album } from 'src/app/models/Album'
import { Artista } from 'src/app/models/Artista';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {

  public musics: any;
  public paginator: Array<any>;
  public first: {};
  public previus: string;
  public next: string;
  public last: string;
  public select: number;
  public musicOficial: Array<any>;

  public index:number;

  constructor(private _musicService: ArtistsService, private route: ActivatedRoute) {
    this.paginator = [];
    this.musicOficial = [];
    this.route.params.subscribe( params => {
      this.index = params['id'];
      console.log(params['id']);
      this.getAlbunes(params['id']);
    });

   }
   getAlbunes(id){
    let observador:Observer<Album[]>={
      next: (data) => {
        //console.log(data);
        this.musics=data;
        console.log(this.musics);
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._musicService.getAlbumes(id)
    .subscribe(observador);
   }
  public llenarMusicas(){
    // this.musics = this._musicService.getAlbumes(this.route.snapshot.paramMap.get('id'));
    // console.log('this is results', this.musics);

    for (var _i = 1; _i <= Math.ceil(this.musics.length/6); _i++) {//cambiar a 6
      if (_i === 1){
        this.paginator.push({isActive: 'active', value: _i});
      }
      else{
        this.paginator.push({isActive: 'none', value: _i});
      }
      
    this.select = 1;
    this.firstMethod();
    this.previusMethod();
    this.nextMethod();
    this.lastMethod();
    for (var _i = 0; _i <= 5; _i++) {
      this.musicOficial.push(this.musics[_i]);
      console.log('entro');
    }
    console.log('oficial', this.musicOficial);
    }
  }

  pressMe(value: number){
    for (var _i = 0; _i < this.paginator.length; _i++) {
      var item = this.paginator[_i];
      if (item.isActive === 'active'){
        this.paginator[_i]= {isActive: 'none', value: _i+1};
      }
    }
    this.paginator[value-1] = {isActive: 'active', value: value};
    this.firstMethod();
    this.previusMethod();
    this.nextMethod();
    this.lastMethod();
    this.select = value;
    for (var _i = 0; _i <= 5; _i++) {
      this.musicOficial.pop();
      }
      let observador:Observer<Artista[]>={
        next: (data) => {
          //console.log(data);
          this.musics=data;
          console.log(this.musics);
        },
        error: (error) => {
          console.log(error);
          console.log('se produjo el siguiente error al recuperar un paquete');
        },
        complete: () => {
          console.log('proceso finalizado');
        }
      };
      this._musicService.getArtistas()
      .subscribe(observador);
      // this.musics = this._musicService.getArtist();
      for (var _i = ((this.select-1)*6) + 1; _i <= (this.select*6); _i++) {
      console.log('esto pasa con', this.select, _i);
      this.musicOficial.push(this.musics[_i - 1]);
      }
  }

  firstMethod(){
    if (this.paginator[0].isActive === 'active'){
      this.first = {isDisabled: 'disabled', value: 'First'}
    }
    else{
      this.first = {isDisabled: 'none', value: 'First'}
    }
  }

  callFirts(){
    this.pressMe(1);
  }

  callPrevius(){
    this.pressMe(this.select-1);
  }

  callNext(){
    this.pressMe(this.select+1);
  }

  callLast(){
    this.pressMe(this.paginator.length);
  }

  previusMethod(){
    if (this.paginator[0].isActive === 'active'){
      this.previus = 'disabled';
    }
    else{
      this.previus = 'none';
    }
  }

  nextMethod(){
    if (this.paginator[this.paginator.length-1].isActive === 'active'){
      this.next = 'disabled';
    }
    else{
      this.next = 'none';
    }
  }

  lastMethod(){
    if (this.paginator[this.paginator.length-1].isActive === 'active'){
      this.last = 'disabled';
    }
    else{
      this.last = 'none';
    }
  }

  ngOnInit() {
    this.llenarMusicas();
    console.log('entro albumes');
  }

}
