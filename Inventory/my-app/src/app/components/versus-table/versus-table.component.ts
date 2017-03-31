import {Component, trigger, state, style, transition, animate, keyframes} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {itemValueList} from "../../shared/item.data";
import {User} from "../../shared/classes/user";
import {CharacterService} from "../../shared/services/character.service";
import {Battle} from "../../shared/classes/battle";


@Component({
    selector: 'versus-table',
    templateUrl: 'versus-table.component.html',
    styleUrls: ['versus-table.component.css'],
    animations: [
        trigger('leftHunter', [
            state('1', style({})),
            state('2', style({})),
            state('3', style({})),
            transition('* => 1', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(100px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0px)', offset: 1.0})
                ]))
            ]),
            transition('* => 2', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(200px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0px)', offset: 1.0})
                ]))
            ]),
            transition('* => 3', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(300px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0px)', offset: 1.0})
                ]))
            ])
        ]),
        trigger('hitToLeft', [
            state('true', style({})),
            state('false', style({})),
            transition('* => *', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'translateX(-300px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0px)', offset: 1.0})
                ]))
            ]),
        ])
    ]

})

export class VersusTableComponent {
    private itemValueList;
    private user_1: User;
    private user_2: User;
    private battle;
    private battleArray = [{hit: -1, def: -1}, {hit: -1, def: -1}, {hit: -1, def: -1}];

    constructor(private userService: UserService, private characterService: CharacterService) {
        const users = userService.getUsers();
        this.user_1 = users[0];
        this.user_2 = users[1];
        this.itemValueList = itemValueList;
        this.user_1.calculateCharacteristics();
        this.user_2.calculateCharacteristics();

        this.battle = new Battle(this.user_1, this.user_2, this.battleArray);
    }

    getClass(item, hero) {
        for (let element of hero) {
            if (element.itemValue === item) {
                return [item, element.styles.spriteClassMini, element.inventoryCoordsClass];
            }
        }
        return [item];
    }

    onStart() {
        this.battle.startBattle();
    }

    getStyle(index) {
        //FixDef/Hit
        let res = {};
        for (let i = 0; i < this.battleArray.length; i++) {
            if (index == this.battleArray[i].hit) {
                res['background-color'] = 'rgba(147, 15, 18, 0.36)';

            }else if(index == this.battleArray[i].def){
                res['background-color'] = 'rgba(52, 138, 34, 0.36)';

            }
        }
        return res;
    }

    leftHunterState = -1;


}