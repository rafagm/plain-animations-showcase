import { Component, OnInit, ElementRef } from "@angular/core";
import * as JQuery from "jquery";

@Component({
  selector: "app-button-animation",
  templateUrl: "./button-animation.component.html",
  styleUrls: ["./button-animation.component.scss"],
})
export class ButtonAnimationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addAnimation(e) {
    const element = e.target;

    /** the width and height of the current div **/
    var w = JQuery(element).width();
    var h = JQuery(element).height();

    /** calculate the x and y to get an angle to the center of the div from that x and y. **/
    /** gets the x value relative to the center of the DIV and "normalize" it **/
    var x = (e.pageX - JQuery(element).offset().left - w / 2) * (w > h ? h / w : 1);
    var y = (e.pageY - JQuery(element).offset().top - h / 2) * (h > w ? w / h : 1);

    /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
    /** first calculate the angle of the point,
 add 180 deg to get rid of the negative values
 divide by 90 to get the quadrant
 add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
    var direction =
      Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

    /** do your animations here **/

    JQuery(element).removeClass("button__animation--2 button__animation--1 button__animation--3 button__animation--4");



    switch (direction) {
      case 0:
        /** animations from the TOP **/
        JQuery(element).addClass("button__animation--2");

        break;
      case 1:
        JQuery(element).addClass("button__animation--3");
        /** animations from the RIGHT **/
        break;
      case 2:
        /** animations from the BOTTOM **/
        JQuery(element).addClass("button__animation--4");
        break;
      case 3:
        /** animations from the LEFT **/
        JQuery(element).addClass("button__animation--1");
        break;
    }
  }
}
