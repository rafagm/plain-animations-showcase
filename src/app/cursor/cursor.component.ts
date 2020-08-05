import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { TweenMax } from "gsap";

@Component({
  selector: "app-cursor",
  templateUrl: "./cursor.component.html",
  styleUrls: ["./cursor.component.scss"],
})
export class CursorComponent implements OnInit {
  @ViewChild("cursor", { static: true }) cursor;
  @ViewChild("follower", { static: true }) follower;

  public position = { x: 0, y: 0 };
  public mousePosition = { x: 0, y: 0 };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {

    TweenMax.to({}, .016, {
      repeat: -1,
      onRepeat: this.onRepeat,
      callbackScope: this
    });
  }

  onRepeat() {
    this.position.x += (this.mousePosition.x - this.position.x) / 9;
    this.position.y += (this.mousePosition.y - this.position.y) / 9;


    TweenMax.set(this.follower.nativeElement, {
      css: {
        left: this.position.x - 12,
        top: this.position.y - 12,
      },
    });

    TweenMax.set(this.cursor.nativeElement, {
      css: {
        left: this.mousePosition.x,
        top: this.mousePosition.y,
      },
    });

  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    this.mousePosition = { x: e.clientX, y: e.clientY };
  }

  @HostListener('document:mousedown') onMouseDown() {
    this.follower.nativeElement.classList.add('clicking');
  }

  @HostListener('document:mouseup') onMouseUp() {
    this.follower.nativeElement.classList.remove('clicking');
  }
}
