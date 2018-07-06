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
    trigger('routeAnimationProject', [
        transition('* <=> *', [
            group([
                query(':enter', style({ display: 'none' }), {optional: true}),
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
                    ,{ optional: true }),
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
        ]), // don't need to animate on load

    ]),
    trigger('previewAnimation1', [
        state('false', style({transform: 'translateY(0)'})),
        state('true', style({transform: 'translateY(-1000px)'})),
        transition('false <=> true', [
            animate('1s ease-in-out')
        ])
    ]),
    trigger('previewAnimation2' , [
        state('false', style({transform: 'translateY(0)', opacity: 0.7})),
        state('true', style({transform: 'translateY(-50%)', opacity: 1})),
        transition('false <=> true', [
            animate('1s ease-in-out')
        ])
    ])
];


export {animationsList};
