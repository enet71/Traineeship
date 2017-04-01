import {
    Component, trigger, state, style, transition, animate, keyframes, Input, OnChanges,
    SimpleChanges
} from "@angular/core";
import {Hero} from "../../../shared/classes/hero";
import {itemValueList} from "../../../shared/item.data";
import {animations} from "../../../shared/classes/animations";

@Component({
    selector: 'battle-hero',
    templateUrl: 'battle-hero.component.html',
    styleUrls: ['battle-hero.component.css'],
    animations: animations
})

export class BattleHero {
    @Input() hero: Hero;
    @Input() characterList;
    @Input() state;
    @Input() name;
    private fieldWidth = 344;
    private itemValueList;

    constructor() {
        this.itemValueList = itemValueList;
    }

    getClass(item, hero) {
        for (let element of hero) {
            if (element.itemValue === item) {
                return [item, element.styles.spriteClassMini, element.inventoryCoordsClass];
            }
        }
        return [item];
    }

    getHealthStyle() {
        let res = {};
        let n = this.fieldWidth;
        if (this.state.health != -1) {
            n = this.state.health * 100 / this.hero.getMaxHealth();
            n = n * this.fieldWidth / 100;
        }
        res['width'] = n + 'px';
        return res;
    }

    getMainStyle(){
        let res = {};
        if(this.state.health == 0){
            res['background-color'] = 'rgba(69, 6, 6, 0.6)';
        }
        return res;
    }
}