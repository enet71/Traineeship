import {trigger, state, style, transition, animate, keyframes} from "@angular/core";
export const animations = [trigger('leftHunter', [
    state('3', style({})),
    state('4', style({})),
    state('5', style({})),
    transition('* => 3', [
        animate(300, keyframes([
            style({transform: 'translateX(350px)', offset: 0.4}),
            style({transform: 'translateX(0px)', offset: 1}),
        ]))
    ]),
    transition('* => 4', [
        animate(300, keyframes([
            style({opacity: 1, transform: 'translateX(350px) translateY(300px)', offset: 0.4}),
            style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
        ]))
    ]),
    transition('* => 5', [
        animate(300, keyframes([
            style({opacity: 1, transform: 'translateX(350px) translateY(700px)', offset: 0.4}),
            style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
        ]))
    ]),
]),
    trigger('leftWarrior', [
        state('3', style({})),
        state('4', style({})),
        state('5', style({})),
        transition('* => 3', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})

            ]))
        ]),
        transition('* => 4', [
            animate(300, keyframes([
                style({transform: 'translateX(350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 5', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
    ]),
    trigger('leftMage', [
        state('3', style({})),
        state('4', style({})),
        state('5', style({})),
        transition('* => 3', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(-700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 4', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 5', [
            animate(300, keyframes([
                style({transform: 'translateX(350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
    ]),

    trigger('rightHunter', [
        state('0', style({})),
        state('1', style({})),
        state('2', style({})),
        transition('* => 0', [
            animate(300, keyframes([
                style({transform: 'translateX(-350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 1', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 2', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
    ]),
    trigger('rightWarrior', [
        state('0', style({})),
        state('1', style({})),
        state('2', style({})),
        transition('* => 0', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})

            ]))
        ]),
        transition('* => 1', [
            animate(300, keyframes([
                style({transform: 'translateX(-350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
        transition('* => 2', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
    ]),
    trigger('rightMage', [
        state('0', style({})),
        state('1', style({})),
        state('2', style({})),
        transition('* => 0', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(-700px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 1', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(-350px) translateY(-300px)', offset: 0.4}),
                style({opacity: 1, transform: 'translateX(0px) translateY(0px)', offset: 1.0})
            ]))
        ]),
        transition('* => 2', [
            animate(300, keyframes([
                style({transform: 'translateX(-350px)', offset: 0.4}),
                style({transform: 'translateX(0px)', offset: 1}),
            ]))
        ]),
    ]),]