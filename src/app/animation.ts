import {
  trigger,
  transition,
  animate,
  style
} from "@angular/animations";

export const fadeInAnimation = trigger("fadeIn", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("600ms .5s ease-out", style({ opacity: 1 })),
  ]),
  transition(":leave", [animate("0s", style({ opacity: 0 }))]),
]);
