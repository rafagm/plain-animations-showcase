import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
} from "@angular/core";
import { TweenLite, TweenMax, Linear } from "gsap";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() imgUrl: string;
  @Input() imgAlt: string;

  @ViewChildren("card", { read: ElementRef }) card;
  public hovered: boolean = false;;

  private cardNativeElement;

  private tl: TweenLite;
  private tween;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.cardNativeElement = this.card.first.nativeElement;
    this.tl = TweenLite.to(this.cardNativeElement,
      .3,
      {
      scale: 1.05,
      ease: Linear.easeNone
    }).reverse();
  }

  onHoverCard() {
    if (this.tl.reversed()) this.tl.play();

    this.hovered = true;
  }

  offHoverCard() {
    if (!this.tl.reversed()) this.tl.reverse();

    this.hovered = false;
  }
}
