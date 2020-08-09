import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-animation',
  templateUrl: './list-animation.component.html',
  styleUrls: ['./list-animation.component.scss']
})
export class ListAnimationComponent implements OnInit {
  criteria  = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  applyCriteria () {
    console.log(this.criteria .value.trim());

  }

}
