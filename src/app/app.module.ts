import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
// MDB Angular Pro
import { CollapseModule } from 'angular-bootstrap-md'
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMusicsComponent } from './list-musics/list-musics.component';
import { MusicDirective } from './music.directive';
import { FirebaseService } from './services/firebase.service';
import { ListMusicsOficialsComponent } from './components/list-musics-oficials/list-musics-oficials.component'
import { ArtistsComponent } from './components/artists/artists.component'
import { AlbumesComponent } from './components/albumes/albumes.component'
//Services
import { ArtistsService } from './services/artists.service';


@NgModule({
  declarations: [
    AppComponent,
    ListMusicsComponent,
    MusicDirective,
    ListMusicsOficialsComponent,
    ArtistsComponent,
    AlbumesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    CollapseModule,
    AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule,
     HttpClientModule
  ],
  providers: [
    FirebaseService,
    ArtistsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
