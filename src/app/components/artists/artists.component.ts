import { Artist } from './../../models/artist';
import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { Artista } from 'src/app/models/Artista';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public musics: any;
  public paginator: Array<any>;
  public first: {};
  public previus: string;
  public next: string;
  public last: string;
  public select: number;
  public musicOficial: Array<any>;

  constructor(private _musicService: ArtistsService) {
    this.paginator = [];
    this.musicOficial = [];
   }

<<<<<<< HEAD
  public llenarMusicas(){
    this.musics = this.firebaseService.getArtist();
    console.log('this is results', this.musics);
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

  buscarArtista($event){
    if ($event != null){
      this.musics = this.firebaseService.buscar($event);
    console.log('this is results', this.musics);
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
    else{
      this.llenarMusicas();
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
      this.musics = this.firebaseService.getArtist();
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
=======
  getArtistas(){
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
  }
  // public llenarMusicas(){
  //   this.musics = this.firebaseService.getArtist();
  //   console.log("holaaaaaaaaaa" + this.musics);
  //   /*console.log('this is results', this.musics);
  //   for (var _i = 1; _i <= Math.ceil(this.musics.length/6); _i++) {//cambiar a 6
  //     if (_i === 1){
  //       this.paginator.push({isActive: 'active', value: _i});
  //     }
  //     else{
  //       this.paginator.push({isActive: 'none', value: _i});
  //     }
      
  //   this.select = 1;
  //   this.firstMethod();
  //   this.previusMethod();
  //   this.nextMethod();
  //   this.lastMethod();
  //   for (var _i = 0; _i <= 5; _i++) {
  //     this.musicOficial.push(this.musics[_i]);
  //     console.log('entro');
  //   }
  //   console.log('oficial', this.musicOficial);
  //   }*/
  // }

  // buscarArtista($event){
  //   if ($event != null){
  //     this.musics = this.firebaseService.buscar($event);
  //   /*console.log('this is results', this.musics);
  //   for (var _i = 1; _i <= Math.ceil(this.musics.length/6); _i++) {//cambiar a 6
  //     if (_i === 1){
  //       this.paginator.push({isActive: 'active', value: _i});
  //     }
  //     else{
  //       this.paginator.push({isActive: 'none', value: _i});
  //     }
      
  //   this.select = 1;
  //   this.firstMethod();
  //   this.previusMethod();
  //   this.nextMethod();
  //   this.lastMethod();
  //   for (var _i = 0; _i <= 5; _i++) {
  //     this.musicOficial.push(this.musics[_i]);
  //     console.log('entro');
  //   }
  //   console.log('oficial', this.musicOficial);
  //   }*/
  //   }
  //   else{
  //     this.llenarMusicas();
  //   }
  // }
  buscarArtista($event){
    console.log($event);
    if ($event != ''){
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
      this._musicService.getBuscar($event)
      .subscribe(observador);
    }else{
      this.getArtistas();
      console.log('estoy aaaaaaaaaquiiiiiiiiiiiiiiiiiiii');
>>>>>>> 25b686552ce7b2e3698783416d0880ade728bc2d
    }
  }

  // pressMe(value: number){
    
  //   for (var _i = 0; _i < this.paginator.length; _i++) {
  //     var item = this.paginator[_i];
  //     if (item.isActive === 'active'){
  //       this.paginator[_i]= {isActive: 'none', value: _i+1};
  //     }
  //   }
  //   this.paginator[value-1] = {isActive: 'active', value: value};
  //   this.firstMethod();
  //   this.previusMethod();
  //   this.nextMethod();
  //   this.lastMethod();
  //   this.select = value;
  //   for (var _i = 0; _i <= 5; _i++) {
  //     this.musicOficial.pop();
  //     }
  //     this.getArtistas();
  //     for (var _i = ((this.select-1)*6) + 1; _i <= (this.select*6); _i++) {
  //     console.log('esto pasa con', this.select, _i);
  //     this.musicOficial.push(this.musics[_i - 1]);
  //     }
  // }

  // firstMethod(){
  //   if (this.paginator[0].isActive === 'active'){
  //     this.first = {isDisabled: 'disabled', value: 'First'}
  //   }
  //   else{
  //     this.first = {isDisabled: 'none', value: 'First'}
  //   }
  // }

  // callFirts(){
  //   this.pressMe(1);
  // }

  // callPrevius(){
  //   this.pressMe(this.select-1);
  // }

  // callNext(){
  //   this.pressMe(this.select+1);
  // }

  // callLast(){
  //   this.pressMe(this.paginator.length);
  // }

  // previusMethod(){
  //   if (this.paginator[0].isActive === 'active'){
  //     this.previus = 'disabled';
  //   }
  //   else{
  //     this.previus = 'none';
  //   }
  // }

  // nextMethod(){
  //   if (this.paginator[this.paginator.length-1].isActive === 'active'){
  //     this.next = 'disabled';
  //   }
  //   else{
  //     this.next = 'none';
  //   }
  // }

  // lastMethod(){
  //   if (this.paginator[this.paginator.length-1].isActive === 'active'){
  //     this.last = 'disabled';
  //   }
  //   else{
  //     this.last = 'none';
  //   }
  // }

  ngOnInit() {
    this.getArtistas();
    console.log('entro artistas');
  }

}
