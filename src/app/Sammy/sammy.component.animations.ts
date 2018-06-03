import {
  keyframes,
  trigger,
  transition,
  state,
  style,
  animate,
  query,
  stagger,
  animateChild,
  group
} from '@angular/animations';

const animationsList = [
  trigger('hoverOverTransition', [
    state(
      'Hovered',
      style({
        height: 'auto'
      })
    ),
    state(
      'nonHovered',
      style({
        height: '100px'
      })
    ),
    transition('nonHovered => Hovered', [
      animate('0.5s ease-in'),
      query('@listAnimation', [animateChild()])
    ]),
    transition('Hovered => nonHovered', [animate('0.5s ease-in')])
  ]),
  trigger('JhoverOverTransition', [
    state(
      'JHovered',
      style({
        height: 'auto'
      })
    ),
    state(
      'JnonHovered',
      style({
        height: '100px'
      })
    ),
    transition('JnonHovered => JHovered', [
      animate('0.5s ease-in'),
      query('@listAnimation', [animateChild()])
    ]),
    transition('JHovered => JnonHovered', [animate('0.5s ease-in')])
  ]),
  trigger('listAnimation', [
    transition('* => *', [
      query(
        ':enter',
        style({
          opacity: 0,
          transform: 'translateX(-50px)'
        }),
        {
          optional: true
        }
      ),
      query(
        ':enter',
        stagger('40ms', [
          group([
            animate(
              '0.1s ease-in',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
            animate(
              '0.4s ease-in-out',
              keyframes([
                style({ transform: 'scale(0.7)' }),
                style({ transform: 'scale(1.1)' }),
                style({ transform: 'scale(1.0)' })
              ])
            )
          ])
        ]),
        {
          optional: true
        }
      )
    ])
  ])
];

export { animationsList };
