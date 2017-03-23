import {Component, Input, OnInit} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";
@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent{
    @Input() item;

    constructor(private itemService: ItemService) {

    }

    onRemove() {
        this.itemService.shiftItem(this.item);
    }

    onDragStart() {
        this.itemService.dragItemVal = this.item.itemVal;
        this.itemService.dragItem = this.item;
    }
}