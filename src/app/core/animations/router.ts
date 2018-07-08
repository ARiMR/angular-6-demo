import { animate, style, transition, trigger } from '@angular/animations';

export const routerAnimation =
  trigger('routerAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({ opacity: 0, transform: 'perspective(1500px) rotateX(-45deg) translateZ(-700px) scale(0.55)' }),

      // animation and styles at end of transition
      animate('3s ease', style({ opacity: 1, transform: 'none' }))
    ]),
  ]);
