import { Component } from '@angular/core';
import { catchError, map, Observable, throwError, timer } from 'rxjs';
import { Spotify } from 'src/app/models/spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-for-you',
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss']
})
export class ForYouComponent {

  welcomeGreeting='';
  errorMessage= null;
  loading =true;

  newRelease$!: Observable<Spotify>;
  playlists:Observable<Spotify>;
  userTopArtists$:Observable<Spotify>;
  userTopTracks$:Observable<Spotify>;
  userRecommendations$!:Observable<Spotify>;

  
  

constructor(private spotifyService:SpotifyService){

  //Top Tracks API Call
  this.userTopTracks$=this.spotifyService.getUserTopTracks().pipe(
    map(i=>{
      this.loading=false;
      return i
    }),
    catchError(error=>{
      this.loading=false;
      this.errorMessage=error;
      return throwError(()=>'')
    })
    
    );

  //Top Artists API Call
  this.userTopArtists$=this.spotifyService.getUserTopArtists().pipe(
    map(i=>{
      this.loading=false;
      return i
    }),
    catchError(error=>{
      this.errorMessage=error;
      return throwError(()=>'')
    }));


  //Get Playlists API Call
  this.playlists=this.spotifyService.getPlaylists().pipe(
    map(i=>{
      this.loading=false;
      return i
    }),
    catchError(error=>{
      this.errorMessage=error;
      return throwError(()=>'')
    }));

  //Get Recommendations API Call

  // this.userRecommendations$=this.spotifyService.getRecommendations().pipe(
  //   map(i=>{
  //     this.loading=false;
  //     return i
  //   }),
  //   catchError(error=>{
  //     this.errorMessage=error;
  //     return throwError(()=>'')
  //   }));

    
    


 const time= new Date().getHours();
  if(time > 6 && time < 12 ){
    this.welcomeGreeting = 'Good Morning!'
  }else if(time >= 12 && time< 18){
    this.welcomeGreeting = "Good Afternoon!"
  }else{
    this.welcomeGreeting = "Good Evening!"
  }
  console.log(this.welcomeGreeting)

  this.newRelease$ = this.spotifyService.getNewRelease().pipe(
    catchError(error=>{
      this.errorMessage=error;
      return throwError(()=>'')
    }));


 }













 

}
