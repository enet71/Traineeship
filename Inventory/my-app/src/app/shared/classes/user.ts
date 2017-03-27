export class User {
    private id;

    constructor(public name: string, public characterList?) {
        this.id = Date.now();
    }

    setCharacterList(characterList) {
        this.characterList = characterList;
    }

    getId() {
        return this.id;
    }
}