import {
  trigger,
  transition,
  animate,
  style,
  query,
  stagger
} from "@angular/animations";

export const fadeInAnimation = trigger("fadeIn", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("600ms .5s ease-out", style({ opacity: 1 })),
  ]),
  transition(":leave", [animate("0s", style({ opacity: 0 }))]),
]);

export const filterAnimation = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(':enter', [
      style({ opacity: 0, width: '0px' }),
      stagger(50, [
        animate('300ms ease-in', style({ opacity: 1, width: '*' })),
      ]),
    ], { optional: true })
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
      ]),
    ])
  ]),
])

