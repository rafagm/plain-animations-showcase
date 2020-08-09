import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { fadeInAnimation, filterAnimation } from "../animation";

@Component({
  selector: "app-list-animation",
  templateUrl: "./list-animation.component.html",
  styleUrls: ["./list-animation.component.scss"],
  animations: [filterAnimation],
})
export class ListAnimationComponent implements OnInit {
  criteria = new FormControl("");
  items: string[] = [];
  visibleItems: string[] = [];
  totalItems = -1;

  constructor() {
    this.items.push("Item 1");
    this.items.push("Lettuce");
    this.items.push("Pineapple");
    this.items.push("Black pepper");
    this.items.push("Item 5");
    this.items.push("Pear");
    this.items.push("Spinach");

    this.visibleItems = this.items;
  }

  ngOnInit() {}

  applyCriteria() {
    const cleanCriteria = this.criteria.value
      ? this.criteria.value.toLowerCase().trim()
      : "";
    console.log(cleanCriteria);

    if (cleanCriteria !== "")
      this.visibleItems = this.items.filter((item) =>
        item.toLowerCase().includes(cleanCriteria)
      );
    else this.visibleItems = this.items;

    const newTotalItems = this.visibleItems.length;

    if (newTotalItems !==  this.totalItems)
      this.totalItems = newTotalItems;
  }
}
