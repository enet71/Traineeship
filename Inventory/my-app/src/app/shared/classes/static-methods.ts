export class StaticMethods {
    static clearPushArray(clear,push){
        clear.splice(0);
        for(let item of push){
            clear.push(item);
        }
    }

    static calculateBonuses(list){
        let dexterity = 0;
        let vitality = 0;
        let criticalChance = 0;
        let extraGold = 0;
        let criticalHit = 0;

        for (let item of list) {
            dexterity += item.bonuses.dexterity;
            vitality += item.bonuses.vitality;
            criticalChance += item.bonuses.criticalChance;
            extraGold += item.bonuses.extraGold;
            criticalHit += item.bonuses.criticalHit;
        }

        return {dexterity,vitality,criticalChance,extraGold,criticalHit}
    }
}