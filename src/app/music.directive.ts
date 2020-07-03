import { Directive } from '@angular/core';

@Directive({
  selector: '[appMusic]'
})

export class MusicDirective {
  public nameMusic: string;
  public duration: string;
  public artist: string;
  public image: string;
}