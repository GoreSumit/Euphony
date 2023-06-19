import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared/shared.module';

const routes:Routes=[
  
  {path:'',component:HomeComponent,title:'Home'},
  
  {
    path:'music',loadChildren:()=> import('./music/music.module').then(m=>m.MusicModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ]
})
export class AppRoutingModule { }
