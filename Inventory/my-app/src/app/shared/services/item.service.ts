import {Injectable} from "@angular/core";
import {HeroService} from "./hero.service";
import {InventoryService} from "./inventory.service";

@Injectable()
export class ItemService {
    public dragItem;
    public drag = {
        isDragged: false,
        zIndex: 0,
        itemVal: -1
    };

    private itemListCharacter: any = [];
    private itemList = [];


    constructor(private heroService: HeroService, private inventoryService: InventoryService) {
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

    shiftItemToAnotherPlace(dragItem, item) {
        let replace = this.getItemByValue(item.value);
        if (replace) {
            replace.itemValue = dragItem.itemValue;
            replace.characterCoordsClass = dragItem.characterCoordsClass;
        }
        dragItem.itemValue = item.value;
        dragItem.characterCoordsClass = item.characterCoords;
    }

    shiftItemToCharacter(item) {
        const replace = this.getItemByValue(item.itemValue);
        if (replace) {
            this.removeItem(replace);
            this.removeFillItems(replace);
            replace.status = false;
            this.inventoryService.addItemInventoryIndex(replace, item.inventoryIndex);
        }

        if (item.fill) {
            this.shiftFillItemToCharacter(item);
        } else {
            item.status = true;
            this.itemListCharacter.push(item);
        }
        this.heroService.calculateBonuses();
    }

    shiftFillItemToCharacter(item) {
        let added: boolean = false;
        for (let element of item.itemValues) {
            const clone = this.createItemClone(item, element, added);
            const replace = this.getItemByValue(clone.itemValue);

            if (replace) {
                this.removeItem(replace);
                this.shiftItemToInventory(replace);
            }

            this.itemListCharacter.push(clone);
            added = true;
        }
    }

    getItemByValue(itemValue) {
        let result;
        this.itemListCharacter.find(element => {
            if (itemValue === element.itemValue) {
                result = element;
            }
        });
        return result;
    }

    createItemClone(item, itemValues, bonuses) {
        let clone = Object.assign({}, item);
        clone.characterCoordsClass = itemValues.characterCoords;
        clone.itemValue = itemValues.value;
        clone.status = true;
        if (bonuses) {
            clone.bonuses = {
                dexterity: 0,
                vitality: 0,
                criticalChance: 0,
                extraGold: 0,
                criticalHit: 0,
            };
        }
        return clone;
    }

    shiftItemToInventory(item) {
        this.removeFillItems(item);
        item.status = false;
        this.inventoryService.addItem(item);
        this.heroService.calculateBonuses();
    }

    removeFillItems(item) {
        if (item.fill) {
            const length = this.itemListCharacter.length;
            for (let i = length - 1; i >= 0; i--) {
                console.log("Test");
                if (this.itemListCharacter[i].index == item.index) {
                    this.removeItem(this.itemListCharacter[i]);
                }

            }
        }
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