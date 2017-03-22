import {Component} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharacterComponent {
    itemList = [];

    constructor(private itemService: ItemService) {
        this.itemList = itemService.getItemListCharacters();

    }

    onAddItem() {
        this.itemService.addItem();
    }
}