import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stacked-card',
  templateUrl: './stacked-card.component.html',
  styleUrls: ['./stacked-card.component.scss']
})
export class StackedCardComponent implements OnInit {
  @ViewChild('wrapper', {static: true}) wrapper;

  constructor() { }

  ngOnInit() {
  }

/*   ngAfterContentInit(): void {
    console.log(this.wrapper);

    const yOffset = -50;
    const y = this.wrapper.nativeElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth'});


  } */

}
