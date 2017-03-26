import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {
    private itemListCharacter: any = [];

    public hero = {
        dexterity: 0,
        vitality: 0,
        criticalChance: 0,
        extraGold: 0,
        criticalHit: 0,
    };

    calculateBonuses() {
        this.hero.dexterity = 0;
        this.hero.vitality = 0;
        this.hero.criticalChance = 0;
        this.hero.extraGold = 0;
        this.hero.criticalHit = 0;

        for (let item of this.itemListCharacter) {
            this.hero.dexterity += item.bonuses.dexterity;
            this.hero.vitality += item.bonuses.vitality;
            this.hero.criticalChance += item.bonuses.criticalChance;
            this.hero.extraGold += item.bonuses.extraGold;
            this.hero.criticalHit += item.bonuses.criticalHit;
        }
    }

    getItemListCharacter() {
        return this.itemListCharacter;
    }


}