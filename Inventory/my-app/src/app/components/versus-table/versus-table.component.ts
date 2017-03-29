import {Component} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {itemValueList} from "../../shared/item.data";
import {User} from "../../shared/classes/user";
import {CharacterService} from "../../shared/services/character.service";
@Component({
    selector: 'versus-table',
    templateUrl: 'versus-table.component.html',
    styleUrls: ['versus-table.component.css']
})

export class VersusTableComponent {
    private itemValueList;
    private user_1: User;
    private user_2: User;
    private bonusesList = [];
    private heroMage;
    private heroWarrior;
    private heroHunter;

    constructor(private userService: UserService,private characterService:CharacterService) {
        const users = userService.getUsers();
        this.user_1 = users[0];
        this.user_2 = users[1];
        this.itemValueList = itemValueList;

        this.pushBonuses(this.user_1);
        this.pushBonuses(this.user_2);

        this.heroHunter = characterService.hunterGenerate();
        this.heroWarrior = characterService.warriorGenerate();
        this.heroMage = characterService.mageGenerate();

    }

    getClass(item, hero) {
        for (let element of hero) {
            if (element.itemValue === item) {
                return [item, element.styles.spriteClassMini, element.inventoryCoordsClass];
            }
        }
        return [item]
    }

    pushBonuses(user) {
        for (let i = 0; i < user.getCharacterList().length; i++) {
            this.bonusesList.push(user.getBonusesOfCharacter(i));
        }
    }
}