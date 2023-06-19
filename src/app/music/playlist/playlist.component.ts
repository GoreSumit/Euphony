import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Spotify } from 'src/app/models/spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  playlistById$:Observable<Spotify>;
  errorMessage= null;



  constructor(private route:ActivatedRoute,private spotifyService:SpotifyService){
    const id= this.route.snapshot.paramMap.get('id');
    this.playlistById$=this.spotifyService.getPlaylistById(id).pipe(
      catchError(error=>{
        this.errorMessage=error;
        return throwError(()=>'')
      }));

  }
}
