import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicRoutingModule } from './music-routing/music-routing.module';
import { ForYouComponent } from './for-you/for-you.component';
import { SharedModule } from '../shared/shared/shared.module';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from '../headers.interceptor';
import { PlaylistComponent } from './playlist/playlist.component';
import { MusicplayerComponent } from './musicplayer/musicplayer.component';
import { LikedSongsComponent } from './liked-songs/liked-songs.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ForYouComponent,
    SearchComponent,
    LoginComponent,
    PlaylistComponent,
    MusicplayerComponent,
    LikedSongsComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    }
  ]
})
export class MusicModule { }
