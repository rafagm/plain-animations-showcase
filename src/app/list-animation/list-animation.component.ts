import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-animation',
  templateUrl: './list-animation.component.html',
  styleUrls: ['./list-animation.component.scss']
})
export class ListAnimationComponent implements OnInit {
  criterion = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  applyCriterion() {
    console.log(this.criterion.value.trim());

  }

}
