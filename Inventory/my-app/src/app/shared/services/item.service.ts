import {Injectable} from "@angular/core";
import {HeroService} from "./hero.service";
import {InventoryService} from "./inventory.service";

@Injectable()
export class ItemService {
    public dragItemVal;
    public dragItemIndex;
    public dragItem;

    private itemListCharacter: any = [];
    private itemList = [];

    constructor(private heroService:HeroService,private inventoryService:InventoryService) {
        this.itemList = inventoryService.getItemList();
        this.itemListCharacter = heroService.getItemListCharacter();
    }

    getItemList() {
        return this.itemList;
    }

    getItemListCharacter() {
        return this.itemListCharacter;
    }

    shiftItem(item) {
        this.removeItem(item);

        if (item.status == false) {
            this.shiftItemToCharacter(item);
        } else {
            this.shiftItemToInventory(item);
        }
    }

    shiftItemToCharacter(item) {
        const replace = this.itemListCharacter.find(element => {
            if (item.itemVal === element.itemVal) {
                return element;
            }
        });
        if (replace) {
            this.removeItem(replace);
            replace.status = false;
            this.inventoryService.addItemInventoryIndex(replace, item.inventoryIndex);
        }

        item.status = true;
        this.itemListCharacter.push(item);
        this.heroService.calculateBonuses();
    }

    shiftItemToInventory(item) {
        item.status = false;
        this.inventoryService.addItem(item);
        this.heroService.calculateBonuses();
    }

    removeItem(item) {
        if (item.status == false) {
            if (this.itemList.indexOf(item) != -1) {
                this.itemList.splice(this.itemList.indexOf(item), 1);
            }
        } else {
            if (this.itemListCharacter.indexOf(item) != -1) {
                this.itemListCharacter.splice(this.itemListCharacter.indexOf(item), 1);
            }
        }
    }

    setCoordsXY(element, x, y) {
        if (!element.status) {
            x = Math.ceil(x / 50);
            y = Math.ceil(y / 60);

            const invId = Math.ceil((y - 1) * 10 + x) - 1;
            const find = this.inventoryService.findItemInventoryIndex(invId);

            if (find) {
                this.swapItems(find, element);
            } else {
                this.removeItem(element);
                this.inventoryService.addItemInventoryIndex(element, invId);
            }
        } else {
            this.removeItem(element);
            this.shiftItemToInventory(element);
        }
    }


    swapItems(item1, item2) {
        if (item1 !== item2) {
            const index1 = item1.inventoryIndex;
            const index2 = item2.inventoryIndex;

            this.removeItem(item1);
            this.removeItem(item2);

            this.inventoryService.addItemInventoryIndex(item1, index2);
            this.inventoryService.addItemInventoryIndex(item2, index1);
        }
    }
}