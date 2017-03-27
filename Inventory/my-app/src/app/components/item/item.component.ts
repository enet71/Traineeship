import {Component, Input, OnInit} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";
import {Observable} from "rxjs";
@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent {
    @Input() item;
    drag;

    constructor(private itemService: ItemService) {
        this.drag = itemService.drag;
    }

    onRemove() {
        this.itemService.toggleItem(this.item);
    }

    onDragStart() {
        setTimeout(() => {
            this.drag.isDragged = true;
        }, 10);

        this.itemService.dragItem = this.item;
    }

    onDragEnd() {
        this.drag.isDragged = false;
    }

    getClass() {
        if (this.item.status) {
            return [this.item.styles.spriteClass, this.item.characterCoordsClass, this.item.itemImageBig];
        } else {
            return [this.item.styles.spriteClassMini, this.item.inventoryCoordsClass];
        }
    }

    getStyle() {
        let res = {};

        if (!this.item.status) {
            res["top"] = this.item.top + 'px';
            res["left"] = this.item.left + 'px';
            res["width"] = this.item.width + 'px';
            res["height"] = this.item.height + 'px';
        }

        res["z-index"] = 20;
        if (this.itemService.drag.isDragged) {
            res["z-index"] = 1;
        }

        return res;
    }
}