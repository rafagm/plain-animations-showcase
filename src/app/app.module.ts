import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CardComponent } from './card/card.component';
import { CursorComponent } from './cursor/cursor.component';
import { AnimationScrollComponent } from './animation-scroll/animation-scroll.component';
import { HomeComponent } from './home/home.component';
import { ListAnimationComponent } from './list-animation/list-animation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonAnimationComponent } from './button-animation/button-animation.component';
import { StackedCardComponent } from './stacked-card/stacked-card.component';
import { NgwWowModule } from 'ngx-wow';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CursorComponent,
    AnimationScrollComponent,
    HomeComponent,
    ListAnimationComponent,
    ButtonAnimationComponent,
    StackedCardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
