import { Component, HostListener } from "@angular/core";
import { gsap, TimelineMax, Linear, TweenLite } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

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
    this.initEffects();

  }
/*
  @HostListener("window:scroll", ["$event"]) // en teoria cuando hago scroll deberia hacer lo mismo
  private onScroll($event?: Event) {
    console.log("Inside onScroll");

    if (!this.scrolling) {
    console.log("scrolling!: ", this.mainDiv);

    //this.scrolling = true;
    //this.mainDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    //if (!this.scrolling) this.elementInViewport(this.topContainer);
  } */



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

  private initEffects() {
    this.animateTopContainerDescription();
  }

  private animateTopContainerDescription() {
    console.log("animatiotopcontainer innn");
    let tl =  new TimelineMax({});
    let tl2 =  new TimelineMax({});


    tl.from(".top-container h1", 1, {scale: 4, ease: "power2"})
      .to("#top-container__description", 2, {text: "Examples of JavaScript animations", ease: "power1.in", repeat: 1, yoyo: true, repeatDelay: 1})

    tl2.to("#top-container__description", 2, {text: "made by Rafael Guardeño", delimiter: " ", ease: "linear", delay: 6, padSpace: true});

  }


 }
