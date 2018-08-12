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
    trigger('dbAnim', [
        transition(
            '* => *', [
                query(':enter', style({'transform': 'translateY(100px) scale(1.1)'}),{ optional: true }),
                query(':enter', stagger('300ms', [
                    animate('1s ease-in-out', keyframes([
                        style({'transform': 'translateY(150%) scale(1.03)'}),
                        style({'transform': 'translateY(0) scale(1)'})
                    ]))
                ]), { optional: true }),
                query(':leave', stagger('300ms', [
                    animate('1s ease-in-out', keyframes([
                        style({'transform': 'translateY(50px) scale(1.03)'}),
                        style({'transform': 'translateY(0) scale(1)'})
                    ]))
                ]), { optional: true })
            ])
    ]),
    trigger('secContAnimation', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition(
            'false => true',
            animate(
                '0.7s ease-in-out',
                keyframes([
                    style({
                        opacity: 0,
                        transform: 'translateY(1000px) translateX(1000px)'
                    }),
                    style({
                        opacity: 0.2,
                        transform: 'translateY(500px) translateX(50px)'
                    }),
                    style({
                        opacity: 0.5,
                        transform: 'translateY(90px) translateX(30px)'
                    }),
                    style({ opacity: 1, transform: 'translateY(0px) translateX(0px)' })
                ])
            )
        )
    ]),
    trigger('thirdContAnimation', [
        state('false', style({ opacity: 0 })),
        state('true', style({ opacity: 1 })),
        transition(
            'false => true',
            animate(
                '0.7s ease-in-out',
                keyframes([
                    style({ opacity: 0, transform: 'translateY(1000px)' }),
                    style({ opacity: 0.5, transform: 'translateY(500px)' }),
                    style({ opacity: 1, transform: 'translateY(0px)' })
                ])
            )
        )
    ]),
    trigger('picAnimation', [
        state('false', style({ width: '350px' })),
        state('true', style({ width: '450px' })),
        transition('false => true', animate('0.5s ease-in')),
        transition('true => false', animate('0.5s ease-in'))
    ]),
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
