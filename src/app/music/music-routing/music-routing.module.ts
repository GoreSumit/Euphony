import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ForYouComponent } from '../for-you/for-you.component';
import { SearchComponent } from '../search/search.component';
import { LoginComponent } from '../login/login.component';
import { MusicplayerComponent } from '../musicplayer/musicplayer.component';
import { LikedSongsComponent } from '../liked-songs/liked-songs.component';
import { PlaylistComponent } from '../playlist/playlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/music/for-you',
    pathMatch: 'full'
  },
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'for-you', component: ForYouComponent, title: 'For-You' },
      { path: 'search', component: SearchComponent, title: 'Search Music' },
      { path: 'login', component: LoginComponent, title: ' login' },
      { path: 'player', component: MusicplayerComponent, title: ' player' },
      { path: 'liked', component: LikedSongsComponent, title: 'Liked Songs' },
      { path: 'playlist/:id', component: PlaylistComponent, title: 'Playlist' },
    ]

  },


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class MusicRoutingModule { }
