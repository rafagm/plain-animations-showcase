import { Component, HostListener } from "@angular/core";
import { gsap, TimelineMax } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Router, RouterEvent, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

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

  public showBackHomeButton = false;

  constructor(private router: Router) {
    this.initRouterEvents();
  }

  initRouterEvents() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects !== "/") this.showBackButton();
        else this.hideBackButton();
      });
  }

  showBackButton() {
    this.showBackHomeButton = true;
  }

  hideBackButton() {
    this.showBackHomeButton = false;
  }

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
    const tl = new TimelineMax({});

    tl.from(".top-container h1", 1, {
      scale: 4,
      ease: "power2",
    })
      .to("#top-container__description", 2, {
        text: "JavaScript animations examples",
        ease: "power1.in",
        repeat: 1,
        yoyo: true,
        repeatDelay: 2.2,
      })
      .to("#top-container__description", 2, {
        text: "made by Rafael Guardeño",
        ease: "power1.out",
      })
      .to("#top-container__description", 5, {
        color: "#F9FFB5",
        repeat: -1,
        yoyo: true,
      });
  }

  onClickArrow(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  backHome() {
    this.router.navigateByUrl('/');
  }
}
