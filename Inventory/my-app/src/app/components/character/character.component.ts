import {Component} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";
import {CharacterService} from "../../shared/services/character.service";
import {itemValueList} from "../../shared/item.data";

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharacterComponent {
    private itemList = [];
    private character = {};
    private itemValueList = [];
    private drag;

    constructor(private itemService: ItemService, private characterService: CharacterService) {
        this.itemList = characterService.getItemListCharacter();
        this.character = characterService.character;
        this.itemValueList = itemValueList;
        this.drag = itemService.drag;
    }

    onDragOver(ev, itemVal) {
        for (let item of this.itemService.dragItem.itemValues) {
            if (itemVal === item.value) {
                ev.preventDefault();
            }
        }
    }

    onDrop(ev, itemVal) {
        this.itemService.drag.isDragged = false;

        for (let item of this.itemService.dragItem.itemValues) {
            if (itemVal === item.value) {
                ev.preventDefault();

                if (this.itemService.dragItem.status) {
                    this.itemService.moveItemToAnotherPlace(this.itemService.dragItem,item);
                } else {
                    this.itemService.dragItem.characterCoordsClass = item.characterCoords;
                    this.itemService.dragItem.itemValue = item.value;
                    this.itemService.toggleItem(this.itemService.dragItem);
                }
            }
        }
    }

    getStyle(item) {
        let res = {};
        if (this.drag.isDragged) {
            res["background-color"] = "rgba(147, 15, 18, 0.36)";
            for (let element of this.itemService.dragItem.itemValues) {
                if (item === element.value) {
                    res["background-color"] = "rgba(52, 138, 34, 0.36)";
                }
            }
            res["display"] = "block";
        }else {
            res["display"] = "none";
        }

        return res;
    }

}