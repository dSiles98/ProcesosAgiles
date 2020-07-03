import { Component, OnInit } from '@angular/core';
import { MusicDirective } from '../music.directive'
import { FirebaseService } from'../services/firebase.service';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-list-musics',
  templateUrl: './list-musics.component.html',
  styleUrls: ['./list-musics.component.scss']
})
export class ListMusicsComponent implements OnInit {
  public musics: any;
  public paginator: Array<any>;
  public first: {};
  public previus: string;
  public next: string;
  public last: string;
  public select: number;
  public musicOficial: Array<any>;

  constructor(private firebaseService: FirebaseService) {
    this.paginator = [];
    this.musicOficial = [];
   }

  public llenarMusicas(){
    this.firebaseService.getMusics()
    .subscribe(result => {
      this.musics = result;
      console.log('this is results', this.musics);
      for (var _i = 1; _i <= Math.ceil(this.musics.length/6); _i++) {//cambiar a 6
        if (_i === 1){
          this.paginator.push({isActive: 'active', value: _i});
        }
        else{
          this.paginator.push({isActive: 'none', value: _i});
        }
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
    })
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
    this.firebaseService.getMusics()
    .subscribe(result => {
      this.musics = result;
      for (var _i = ((this.select-1)*6) + 1; _i <= (this.select*6); _i++) {
      console.log('esto pasa con', this.select, _i);
      this.musicOficial.push(this.musics[_i - 1]);
      }
    })
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
  }

}
