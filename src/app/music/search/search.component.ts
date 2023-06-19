import { Component } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Spotify } from 'src/app/models/spotify';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchbar='';
  searchQuery='';
  templateView='';
  searchData$!:Observable<Spotify>;
  errorMessage='';
  newRelease$!: Observable<Spotify>;
  loading=true;


  
  onSubmit(){
    console.log(this.searchbar, this.searchQuery)
    this.templateView = this.searchQuery

    this.searchData$=this.spotifyService.getSearchData(this.searchbar,this.searchQuery).pipe(
      map(i=>{
        this.loading=false;
        return i
      }),
      catchError(error=>{
        this.errorMessage=error;
        return throwError(()=>'')
      }));




      this.newRelease$ = this.spotifyService.getNewRelease().pipe(
        map(i=>{
          this.loading=false;
          return i
        }),
        catchError(error=>{
          this.errorMessage=error;
          console.log("ERRORMSG***",error)
          // this.router.navigate(['/spotify'])
          return throwError(()=>'')
        }));








  }
  onChange(event:any){
    this.searchQuery = event.target.value;
  }





profile$!:Observable<Spotify>;
constructor(private spotifyService:SpotifyService){

  this.profile$=this.spotifyService.getProfile().pipe(
    catchError(error=>{
      this.errorMessage=error;
      console.log("ERRORMSG***",error)
      // this.router.navigate(['/spotify'])
      return throwError(()=>'')
    }));
  
}

}
