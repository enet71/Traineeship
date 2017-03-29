import {StaticMethods} from "./static-methods";
export class User {
    private id;

    constructor(private name: string, private characterList?) {
        this.id = Date.now();
    }

    setCharacterList(characterList) {
        this.characterList = characterList;
    }

    getCharacterList() {
        return this.characterList;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getBonusesOfCharacter(index) {
        const list = this.characterList[index];
        return StaticMethods.calculateBonuses(list);
    }
}