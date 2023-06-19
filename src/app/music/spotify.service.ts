import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, interval, Observable, throwError } from 'rxjs';
import { Spotify } from '../models/spotify';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

Spotify: any;
player:any;

  constructor(private http: HttpClient) {

   // this.player = new this.Spotify.Player({
  //     name: 'Angular Spotify Player',
  //     getOAuthToken: (cb: (arg0: string | null) => void) => {
  //         cb(localStorage.getItem('access_token'));
  //     }
  // });



   }
  
// play(trackUri: string) {
//     this.player.play(trackUri);
// };

// pause() {
//     this.player.pause();
// }

// ngOnInit() {
//   this.http.get('https://api.spotify.com/v1/me/player').subscribe(data => {
//     console.log(data);
//   });
// }

/**
 * 
 * @returns Below code is commented out as the errors have been handled at once with interceptors and not by manual individual method
 */

  // getNewRelease():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/browse/new-releases').pipe(catchError(this.handleError));
  // }
  // getSearchData(query:string,type:string):Observable<Spotify>{
  //   return this.http.get<Spotify>(`https://api.spotify.com/v1/search?q=${query}&type=${type}`).pipe(catchError(this.handleError));
  // }
  // getProfile():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me').pipe(catchError(this.handleError));
  // }
  // getPlayBackState():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me/player').pipe(catchError(this.handleError));
  // }
  // getPlayBackStateCurrent():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me/player/currently-playing').pipe(catchError(this.handleError));
  // }

  // getPlaylists():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me/playlists').pipe(catchError(this.handleError));
  // }
  // getLikedSongs():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me/tracks').pipe(catchError(this.handleError));
  // }
  // getUserTopArtists():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me/top/artists/?limit=3').pipe(catchError(this.handleError));
  // }
  // getUserTopTracks():Observable<Spotify>{
  //   return this.http.get<Spotify>('https://api.spotify.com/v1/me/top/tracks/?limit=4').pipe(catchError(this.handleError));
  // }
  // getPlaylistById(id:string|null):Observable<Spotify>{
  //   return this.http.get<Spotify>(`https://api.spotify.com/v1/playlists/${id}`).pipe(catchError(this.handleError));
  // }

  // handleError(error:HttpErrorResponse){
  //   let errorMessage ='';
  //   if(error.status===0){
  //     //client error
  //     errorMessage = ` Some error occured: ${error}`;
  //   }
  //   else{
  //     //server side error
  //     if(error.status===401){
  //       errorMessage = `Error Status: ${error.status} Message:${error.message}`
        
  //     }
  //   }

  //   return throwError(()=>errorMessage)

  // }



  /**
   * New API calls with interceptors handling the errors
   */
  
  getNewRelease():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/browse/new-releases')
  }
  getSearchData(query:string,type:string):Observable<Spotify>{
    return this.http.get<Spotify>(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
  }
  getProfile():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me')
  }
  getPlayBackState():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me/player')
  }
  getPlayBackStateCurrent():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me/player/currently-playing')
  }

  getPlaylists():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me/playlists')
  }
  getLikedSongs():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me/tracks')
  }
  getUserTopArtists():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me/top/artists/?limit=3')
  }
  getUserTopTracks():Observable<Spotify>{
    return this.http.get<Spotify>('https://api.spotify.com/v1/me/top/tracks/?limit=4')
  }
  getPlaylistById(id:string|null):Observable<Spotify>{
    return this.http.get<Spotify>(`https://api.spotify.com/v1/playlists/${id}`)
  }



}
