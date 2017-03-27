import {Injectable} from "@angular/core";

@Injectable()
export class CharacterService {
    private itemListCharacter: any = [];

    public character = {
        dexterity: 0,
        vitality: 0,
        criticalChance: 0,
        extraGold: 0,
        criticalHit: 0,
    };

    calculateBonuses() {
        this.character.dexterity = 0;
        this.character.vitality = 0;
        this.character.criticalChance = 0;
        this.character.extraGold = 0;
        this.character.criticalHit = 0;

        for (let item of this.itemListCharacter) {
            this.character.dexterity += item.bonuses.dexterity;
            this.character.vitality += item.bonuses.vitality;
            this.character.criticalChance += item.bonuses.criticalChance;
            this.character.extraGold += item.bonuses.extraGold;
            this.character.criticalHit += item.bonuses.criticalHit;
        }
    }

    getItemListCharacter() {
        return this.itemListCharacter;
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
}