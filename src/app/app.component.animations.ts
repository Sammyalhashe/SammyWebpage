import {
  trigger,
  keyframes,
  transition,
  query,
  animate,
  style,
  group,
  animateChild,
  stagger,
  state
} from '@angular/animations';

const animationsList = [
  trigger('routeAnimation', [
    transition(':enter', []), // don't need to animate on load
    transition('* => resumePage', [
      // used to be homePage => resumePage
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            stagger('1ms', [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
              // query("@loadanimation", [animateChild()], { optional: true }),
              // query("@loadanimation1", [animateChild()], { optional: true }),
              // query("@loadanimation2", [animateChild()], { optional: true })
            ])
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(-100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    transition('* => guidePage', [
      // used to be homePage => resumePage
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            stagger('1ms', [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(-100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
              // query("@loadanimation", [animateChild()], { optional: true }),
              // query("@loadanimation1", [animateChild()], { optional: true }),
              // query("@loadanimation2", [animateChild()], { optional: true })
            ])
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    transition('guidePage => homePage', [
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(-100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    transition('resumePage => homePage', [
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(-100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    transition('* => projectPage', [
      // used to be homePage => projectPage
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            stagger('1ms', [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
              // query("@loadanimation", [animateChild()], { optional: true }),
              // query("@loadanimation1", [animateChild()], { optional: true }),
              // query("@loadanimation2", [animateChild()], { optional: true })
            ])
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(-100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    transition('projectPage => homePage', [
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            stagger('1ms', [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(-100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
              // query("@loadanimation", [animateChild()], { optional: true }),
              // query("@loadanimation1", [animateChild()], { optional: true }),
              // query("@loadanimation2", [animateChild()], { optional: true })
            ])
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ]),
    transition('blogPage => *', [
      // used to be homePage => resumePage
      group([
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
          optional: true
        }),
        group([
          query(
            ':enter',
            stagger('1ms', [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 0.2, transform: 'translateX(-100%)' }),
                  style({ opacity: 1, transform: 'translateX(0%)' })
                ])
              )
              // query("@loadanimation", [animateChild()], { optional: true }),
              // query("@loadanimation1", [animateChild()], { optional: true }),
              // query("@loadanimation2", [animateChild()], { optional: true })
            ])
          ),
          query(
            ':leave',
            [
              animate(
                '1s ease-in-out',
                keyframes([
                  style({ opacity: 1, transform: 'translateX(0%)' }),
                  style({ opacity: 0, transform: 'translateX(100%)' })
                ])
              )
            ],
            { optional: true }
          )
        ])
      ])
    ])
  ])
];

export { animationsList };
