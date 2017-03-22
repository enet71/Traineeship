import {Component, EventEmitter, Output} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";
@Component({
    selector: 'inventory',
    templateUrl: 'inventory.component.html',
    styleUrls: ['inventory.component.css']
})

export class InventoryComponent {
    itemList = [];

    constructor(private itemService: ItemService) {
        this.itemList = itemService.getItemList();
    }

    onAddItem() {
        this.itemService.addItem();
        this.itemList = this.itemService.getItemList();
    }
}