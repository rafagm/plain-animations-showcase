import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewChildren,
} from "@angular/core";
import { TweenLite, TweenMax, Linear } from "gsap";
import { Router } from '@angular/router';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() imgUrl: string;
  @Input() imgAlt: string;
  @Input() route: string;

  @ViewChildren("card", { read: ElementRef }) card;
  public hovered: boolean = false;;

  private cardNativeElement;

  private tl: TweenLite;
  private tween;

  constructor(private router: Router) {}

  ngOnInit() {}


  showCase() {
    this.router.navigateByUrl(`/${this.route}`);
  }
}
