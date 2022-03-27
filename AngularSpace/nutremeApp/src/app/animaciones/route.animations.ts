import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
} from '@angular/animations'; 


export const fader = trigger('routeAnimations', [
    transition('void => pagina_objetivo', [
        style({ position:'relative'}),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: '0%', 
                width: '100%',
                opacity: 0,
                transform: 'translateX(100%) scale(.3)'
            })
        ]),
        query(':enter', [
            animate('1000ms ease', 
            style({
                opacity:1,
                transform: 'translateX(0%) scale(1)'
            }) )
        ])
    ]),
    transition('pagina_objetivo => pagina_MBA_IMC', [
        query(':enter', [
            style({
                position: 'absolute',
                left: '0%', 
                width: '100%',
                opacity: 0,
                transform: 'translateX(100%) scale(.3)'
            })
        ]),
        query(':leave', [
            style({
                position: 'absolute',
                left: '0%', 
                width: '100%',
                opacity: 1,
                transform: 'translateX(0%) scale(1)'
            })
        ]),
        group([
            query(':enter', [
                animate('1000ms ease', 
                style({
                    opacity:1,
                    transform: 'translateX(0%) scale(1)'
                }) )
            ]),
            query(':leave', [
                animate('1000ms ease', 
                style({
                    opacity:1,
                    transform: 'translateX(-100%) scale(.3)'
                }) )
            ])
        ])
        
    ]),
    transition('pagina_MBA_IMC => pagina_objetivo', [
        query(':enter', [
            style({
                position: 'absolute',
                left: '0%', 
                width: '100%',
                opacity: 0,
                transform: 'translateX(-100%) scale(.3)'
            })
        ]),
        query(':leave', [
            style({
                position: 'absolute',
                left: '0%', 
                width: '100%',
                opacity: 1,
                transform: 'translateX(0%) scale(1)'
            })
        ]),
        group([
            query(':enter', [
                animate('1000ms ease', 
                style({
                    opacity:1,
                    transform: 'translateX(0%) scale(1)'
                }) )
            ]),
            query(':leave', [
                animate('1000ms ease', 
                style({
                    opacity:0,
                    transform: 'translateX(100%) scale(.3)'
                }) )
            ])
        ])
        
    ])
]); 
