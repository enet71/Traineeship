import {Component} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharacterComponent {
    itemList = [];
    hero = {};

    constructor(private itemService: ItemService) {
        this.itemList = itemService.getItemListCharacters();
        this.hero = itemService.hero;
    }

    onDragOver(ev,itemVal){
        if(itemVal === this.itemService.dragItemVal){
            ev.preventDefault();
        }
    }

    onDrop(ev,itemVal){
        if(itemVal === this.itemService.dragItemVal){
            ev.preventDefault();
            this.itemService.shiftItem(this.itemService.dragItem);
        }
    }
}