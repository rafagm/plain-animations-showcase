import {
  Component,
  OnInit,
  HostListener,
  ViewChildren,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-animation-scroll",
  templateUrl: "./animation-scroll.component.html",
  styleUrls: ["./animation-scroll.component.scss"],
})
export class AnimationScrollComponent implements OnInit {
  @ViewChild("container", { static: false }) container;

  constructor() {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    console.log(this.container);

    const containerOffsetTop = this.container.nativeElement.offsetTop;

    const winScroll =
      document.body.scrollTop ||
      document.documentElement.scrollTop - containerOffsetTop - 1;

    const height =
      document.documentElement.scrollHeight -
      containerOffsetTop -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    console.log("scrolled: ", scrolled);

    (<HTMLCollectionOf<HTMLElement>>(
      document.getElementsByClassName("progress__bar")
    ))[0].style.width = (scrolled > 0 ? scrolled : 0) + "%";
  }
}
