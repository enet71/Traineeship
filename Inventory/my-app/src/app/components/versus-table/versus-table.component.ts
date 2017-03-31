import {Component, trigger, state, style, transition, animate, keyframes} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {itemValueList} from "../../shared/item.data";
import {User} from "../../shared/classes/user";
import {CharacterService} from "../../shared/services/character.service";
import {Battle} from "../../shared/classes/battle";
import {Observable} from "rxjs";
import {animations} from "../../shared/classes/animations";


@Component({
    selector: 'versus-table',
    templateUrl: 'versus-table.component.html',
    styleUrls: ['versus-table.component.css'],
    animations: this.animations,
})

export class VersusTableComponent {
    private itemValueList;
    private user_1: User;
    private user_2: User;
    private battle;

    animations = animations;

    constructor(private userService: UserService, private characterService: CharacterService) {
        const users = userService.getUsers();
        this.user_1 = users[0];
        this.user_2 = users[1];
        this.itemValueList = itemValueList;
        this.user_1.calculateCharacteristics();
        this.user_2.calculateCharacteristics();

        this.battle = new Battle(this.user_1, this.user_2);
    }

    getClass(item, hero) {
        for (let element of hero) {
            if (element.itemValue === item) {
                return [item, element.styles.spriteClassMini, element.inventoryCoordsClass];
            }
        }
        return [item];
    }


    leftHunterState = -1;
    leftWarriorState = -1;
    leftMageState = -1;

    rightHunterState = -1;
    rightWarriorState = -1;
    rightMageState = -1;

    onStart() {
        this.battle.startBattle().subscribe(element => {
            let n = "" + element.hit + element.def;
            console.log(n);
            switch (n) {
                case '03':
                    this.leftHunterState = 3;
                    break;
                case '04':
                    this.leftHunterState = 4;
                    break;
                case '05':
                    this.leftHunterState = 5;
                    break;
                case '13':
                    this.leftWarriorState = 3;
                    break;
                case '14':
                    this.leftWarriorState = 4;
                    break;
                case '15':
                    this.leftWarriorState = 5;
                    break;
                case '23':
                    this.leftMageState = 3;
                    break;
                case '24':
                    this.leftMageState = 4;
                    break;
                case '25':
                    this.leftMageState = 5;
                    break;
                case '30':
                    this.rightHunterState = 0;
                    break;
                case '31':
                    this.rightHunterState = 1;
                    break;
                case '32':
                    this.rightHunterState = 2;
                    break;
                case '40':
                    this.rightWarriorState = 0;
                    break;
                case '41':
                    this.rightWarriorState = 1;
                    break;
                case '42':
                    this.rightWarriorState = 2;
                    break;
                case '50':
                    this.rightMageState = 0;
                    break;
                case '51':
                    this.rightMageState = 1;
                    break;
                case '52':
                    this.rightMageState = 2;
                    break;
            }
            setTimeout(() => {
                this.leftHunterState = -1;
                this.leftWarriorState = -1;
                this.leftMageState = -1;

                this.rightHunterState = -1;
                this.rightWarriorState = -1;
                this.rightMageState = -1;
            }, 400);
        });
    }


    getStyle(index) {
        //FixDef/Hit
        /*let res = {};
         if (index == this.battleObject.hit) {
         res['background-color'] = 'rgba(147, 15, 18, 0.36)';

         } else if (index == this.battleObject.def) {
         res['background-color'] = 'rgba(52, 138, 34, 0.36)';

         }
         return res;*/
    }

}