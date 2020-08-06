import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage => CasePage', [
      style({ position: 'relative' }),
      query(':leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('400ms ease-in', style({ left: '100%' }))
        ])
      ])
    ]),
    transition('CasePage => HomePage', [
      style({ position: 'relative' }),
      query(':enter', [
        style({
          position: 'absolute',
          top: 0,
          left: '100%',
          width: '100%'
        }),
        query(':enter', animateChild()),
        group([
          query(':enter', [
            animate('400ms ease-in', style({ left: 0 }))
          ])
        ])
      ])
    ])
  ]);
