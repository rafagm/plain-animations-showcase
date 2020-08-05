import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationScrollComponent } from './animation-scroll/animation-scroll.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'scroll-animation',
    component: AnimationScrollComponent
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
