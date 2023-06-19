import { HttpClient } from '@angular/common/http';
import { Component, NgIterable, OnInit } from '@angular/core';
import { catchError, interval, map, Observable, throwError } from 'rxjs';
import { Spotify } from 'src/app/models/spotify';
import { SpotifyService } from '../spotify.service';



interface Track {
  progress_ms: number;
  item: {
    name:string;
    duration_ms: number;
  };
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{

 artist='selena'
 song='calm down'
 errorMessage=''


playBackState$!:Observable<Spotify>;

playing!:number;

  currentProgress: any;
  trackDuration: any;
  trackName!:string;
  image:any;

  progressValue():number{
    let a=this.currentProgress
    let b =this.trackDuration;
    let c = Math.floor((a/b*100))
    return c
  }

// progressValue(progress: any,total: any):number{
//   // this.playBackState$?.subscribe(data=>this.playing=data.progress_ms)
//   let a=progress
//   let b =total;
//   let c = Math.floor((a/b*100))
  
//   return c
// }


 constructor(private spotifyService:SpotifyService, private http:HttpClient){

 
    // this.playBackState$=this.spotifyService.getPlayBackStateCurrent().pipe(
    //   catchError(error=>{
    //     this.errorMessage=error;
    //     return throwError(()=>'')
    //   }));

    }







// getCurrentTrackProgress() {
//   setInterval(() => {
//     this.http.get<Track>('https://api.spotify.com/v1/me/player/currently-playing').subscribe(data => {
//       this.currentProgress = data['progress_ms'];
//       this.trackDuration = data['item']['duration_ms'];
//       this.trackName=data['item']['name'];
//     });
//   }, 1000);

// }
currentplaystate:any;
artistName!:string;
isPlaying!:boolean;
currentUri!:string;
// ngOnInit(){
//     setInterval(() => {
//     this.currentplaystate= this.http.get<Spotify>('https://api.spotify.com/v1/me/player/currently-playing').subscribe(data => {
//       this.currentProgress = data['progress_ms'];
//       this.trackDuration = data['item']['duration_ms'];
//       this.trackName=data['item']['name'];
//       this.artistName=data.item.album.artists[0].name;
//       this.image=data.item.album.images[0].url;
//       this.isPlaying=data.is_playing;
//       this.currentUri=data.item.uri
      

//     });
//   }, 1500);
//}

// onPlayClick(){
//   console.log("clicked Play")
//   console.log(this.currentplaystate)

//     return this.http.put<ArrayBuffer>('https://api.spotify.com/v1/me/player/pause',null)
// }

// onPause(){
//   console.log("pause clicked");
//   console.log(this.currentplaystate)
  
//   this.http.put<ArrayBuffer>('https://api.spotify.com/v1/me/player/play',
//     {"context_uri": `${this.currentUri}`}
//     )
// }



}
