import {Component, Input, OnInit} from "@angular/core";
import {ItemService} from "../../shared/services/item.service";
@Component({
    selector: 'item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent implements OnInit{
    @Input() item;

    constructor(private itemService: ItemService) {

    }

    ngOnInit(): void {
    }

    onRemove(){
        this.itemService.removeItem(this.item);
        this.itemService.addItemCharacter(this.item);
    }
}