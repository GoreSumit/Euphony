import { Component } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Spotify } from 'src/app/models/spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-liked-songs',
  templateUrl: './liked-songs.component.html',
  styleUrls: ['./liked-songs.component.scss']
})
export class LikedSongsComponent {

likedSongs$:Observable<Spotify>;
errorMessage= null;


  constructor(private spotifyService:SpotifyService){
    this.likedSongs$=this.spotifyService.getLikedSongs().pipe(
      catchError(error=>{
        this.errorMessage=error;
        return throwError(()=>'')
      }));
  }
}
