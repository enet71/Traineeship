import {Injectable} from "@angular/core";

@Injectable()
export class BattleStatisticService {
    private name = 'battle-statistic';

    constructor() {
    }

    getBattleList() {
        return JSON.parse(localStorage.getItem(this.name));
    }

    setBattleList(list) {
        localStorage.setItem(this.name, JSON.stringify(list));
    }

    addToList(element) {
        this.clearCircular(element);
        let list = JSON.parse(localStorage.getItem(this.name)) || [];
        list.unshift(element);
        this.setBattleList(list);
    }

    clearCircular(element) {
        element.lose.hunter.enemy = {};
        element.lose.mage.enemy = {};
        element.lose.warrior.enemy = {};

        element.win.hunter.enemy = {};
        element.win.mage.enemy = {};
        element.win.warrior.enemy = {};
    }
}
