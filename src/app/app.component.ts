import { Component, HostListener, ViewChild } from '@angular/core';
import { gsap, TimelineMax } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {
  Router,
  RouterEvent,
  NavigationEnd,
  RouterOutlet,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { slideInAnimation } from "./route-animation";
import { fadeInAnimation } from "./animation";
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
import { HomeComponent } from './home/home.component';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation, fadeInAnimation],
})
export class AppComponent {
  title = "Animation Showcase";

  private mainDiv: HTMLElement;
  private topContainer: Element;

  private scrolling = false;

  public showBackHomeButton = false;

  @ViewChild('topLineBreak', {static: true}) topLineBreak;

  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.initRouterEvents();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init();
    });
  }

  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
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

  onClickArrow() {
    this.topLineBreak.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  backHome() {
    this.router.navigateByUrl("");
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  onOutletLoaded(event: any) {
    if (! (event instanceof HomeComponent)) this.onClickArrow();
  }

  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }
}
