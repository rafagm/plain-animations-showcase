import { Component, HostListener } from "@angular/core";
import { TimelineMax, Linear } from "gsap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Animation Showcase";

  private mainDiv: HTMLElement;
  private topContainer: Element;

  private scrolling = false;

  ngAfterViewInit(): void {
    this.mainDiv = document.getElementById("main");
    this.topContainer = document.getElementsByClassName("top-container")[0];
    //this.onScroll(); //funciona

  }

  @HostListener("window:scroll", ["$event"]) // en teoria cuando hago scroll deberia hacer lo mismo
  private onScroll($event?: Event) {
    console.log("Inside onScroll");

    if (!this.scrolling) {
    console.log("scrolling!: ", this.mainDiv);

    this.scrolling = true;
    this.mainDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    //if (!this.scrolling) this.elementInViewport(this.topContainer);
  }



  elementInViewport(element) {
    const bounding = element.getBoundingClientRect();
    const elementHeight = element.offsetHeight;
    const elementWeidth = element.offsetWidth;

    if (
      bounding.top >= -elementHeight &&
      bounding.left >= -elementWeidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          elementWeidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          elementHeight
    ) {
      //this.mainDiv.scrollIntoView();
      //this.scrolling = true;
    }
  }
}
