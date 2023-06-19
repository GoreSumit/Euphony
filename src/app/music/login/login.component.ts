import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  CLIENT_ID = 'ed83e7c1e9924ab59d9940c959e5a2ca';
  scope = [
    'user-read-playback-position',
    'user-library-read',
    'user-library-modify',
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'user-top-read',
    'playlist-read-collaborative',
    'ugc-image-upload',
    'user-follow-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-modify'
];
  REDIRECT_URI= 'http://localhost:4200/music/login'
  authEndpoint = `https://accounts.spotify.com/authorize?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&scope=${this.scope.join("%20")}&response_type=token&show_dialogue=true`;


  token='';

  constructor(private router:Router){
    if(window.location.hash){
      let hash=window.location.hash;
      this.token=hash.split('&')[0].split('=')[1];
      localStorage.setItem('access_token',this.token);
      this.router.navigate(['/music/for-you'])
      }
  }



}
