import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnimationScrollComponent } from "./animation-scroll/animation-scroll.component";
import { HomeComponent } from "./home/home.component";
import { ListAnimationComponent } from "./list-animation/list-animation.component";
import { ButtonAnimationComponent } from './button-animation/button-animation.component';
import { StackedCardComponent } from './stacked-card/stacked-card.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { animation: "HomePage" },
  },
  {
    path: "scroll-animation",
    component: AnimationScrollComponent,
    data: { animation: "CasePage" },
  },
  {
    path: "list-animation",
    component: ListAnimationComponent,
    data: { animation: "CasePage" },
  },
  {
    path: "button-animation",
    component: ButtonAnimationComponent,
    data: { animation: "CasePage" },
  },
  {
    path: "stacked-cards",
    component: StackedCardComponent,
    data: { animation: "CasePage" },
  },
  {
    path: "spinner",
    component: SpinnerComponent,
    data: { animation: "CasePage"}
  },
  {
    path: "**",
    redirectTo: "",
    data: { animation: "HomePage" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
