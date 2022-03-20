import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations'; 
import { AbsoluteSourceSpan } from '@angular/compiler';


export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter , :leave', [
            style({
                position: 'absolute',
                left: 0, 
                width: '100%',
                opacity:0,
                transform: 'translateX(-100%)'
            })
        ]),
        query(':enter', [ animate('1200ms ease-in-out',
            style({
               opacity:1,
               transform: 'translateX(0)' 
            })
        )])
    ]),


]); 