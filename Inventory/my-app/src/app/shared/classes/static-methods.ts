export class StaticMethods {
    static clearPushArray(clear,push){
        clear.splice(0);
        for(let item of push){
            clear.push(item);
        }
    }

    static calculateBonuses(list){
        let strength = 0;
        let agility = 0;
        let intelligence = 0;

        for (let item of list) {
            strength += item.bonuses.strength;
            agility += item.bonuses.agility;
            intelligence += item.bonuses.intelligence;
        }

        return {strength,agility,intelligence}
    }
}