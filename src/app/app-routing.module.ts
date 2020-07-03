import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component'
import { AlbumesComponent } from './components/albumes/albumes.component'
import { ListMusicsOficialsComponent } from './components/list-musics-oficials/list-musics-oficials.component';

const routes: Routes = [
  {path: '', component: ArtistsComponent },
  {path: 'album/:id', component: AlbumesComponent },
  {path: 'cancion/:id', component: ListMusicsOficialsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
