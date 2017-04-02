import {Injectable} from "@angular/core";
import {StaticMethods} from "../classes/static-methods";

@Injectable()
export class CharacterService {
    private itemListCharacter: any = [];

    public character = {
        strength: 0,
        agility: 0,
        intelligence: 0,
    };

    calculateBonuses() {
        this.character.strength = 0;
        this.character.agility = 0;
        this.character.intelligence = 0;

        for (let item of this.itemListCharacter) {
            this.character.strength += item.bonuses.strength;
            this.character.agility += item.bonuses.agility;
            this.character.intelligence += item.bonuses.intelligence;
        }
    }

    getItemListCharacter() {
        return this.itemListCharacter;
    }

    setItemListCharacter(itemList) {
        StaticMethods.clearPushArray(this.itemListCharacter, itemList);
    }

    removeItem(item) {
        if (this.itemListCharacter.indexOf(item) != -1) {
            this.itemListCharacter.splice(this.itemListCharacter.indexOf(item), 1);
        }
    }

    removeFillItems(item) {
        if (item.fill) {
            const length = this.itemListCharacter.length;
            for (let i = length - 1; i >= 0; i--) {
                if (this.itemListCharacter[i].index == item.index) {
                    this.removeItem(this.itemListCharacter[i]);
                }
            }
        }
    }

    clearList() {
        this.itemListCharacter.splice(0);
    }

    mageGenerate() {
        return {strength: '100', agility: '100', intelligence: '300'};
    }

    warriorGenerate() {
        return {strength: '300', agility: '100', intelligence: '100'};
    }

    hunterGenerate() {
        return {strength: '100', agility: '300', intelligence: '100'};
    }
}