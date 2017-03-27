import {Injectable} from "@angular/core";
import {itemList, DataList} from "../item.data";
import {StaticMethods} from "../classes/static-methods";
import {Data} from "@angular/router";

@Injectable()
export class InventoryService {
    private numItem: number = 10;
    private widthItem: number = 43.5;
    private heightItem: number = 53;
    private max: number = 100;
    private itemListCharacter: any = [];
    private itemList = [];

    constructor() {
        this.itemList = DataList.getItemList();
    }

    reloadList() {
        DataList.reloadList();
        StaticMethods.clearPushArray(this.itemList, DataList.getItemList());
    }

    addItem(item) {
        this.itemList.sort((a, b) => a.inventoryIndex < b.inventoryIndex ? -1 : 1);
        if (this.itemList.length < this.max) {
            for (let i = 0; i < this.itemList.length; i++) {
                if (this.itemList[i].inventoryIndex != i) {
                    this.addItemInventoryIndex(item, i);
                    break;
                }

                if (!this.itemList[i + 1]) {
                    item.inventoryIndex = i + 1;
                    this.setCoords(item);
                    this.itemList.push(item);
                    break;
                }
            }

            if (this.itemList.length == 0) {
                item.inventoryIndex = 0;
                this.setCoords(item);
                this.itemList.push(item);
            }
        }
    }

    addItemInventoryIndex(item, index) {
        item.inventoryIndex = index;
        this.setCoords(item);
        this.itemList.splice(index, 0, item);
    }


    findItemIndex(index) {
        return this.itemList.find(element => {
            if (index === element.index) {
                return element;
            }
        });
    }

    findItemInventoryIndex(inventoryIndex) {
        return this.itemList.find(element => {
            if (inventoryIndex === element.inventoryIndex) {
                return element;
            }
        });
    }

    setCoords(element) {
        const y = Math.floor(element.inventoryIndex / this.numItem);
        const x = Math.floor(element.inventoryIndex - (this.numItem * y));

        element.left = x * this.widthItem + 14 + x * 4;
        element.top = y * this.heightItem + 12 + y * 4;
    }

    getItemList() {
        this.itemList.map(element => {
            this.setCoords(element);
            return element;
        });
        return this.itemList;
    }

    removeItem(item) {
        if (this.itemList.indexOf(item) != -1) {
            this.itemList.splice(this.itemList.indexOf(item), 1);
        }
    }

    swapItems(item1, item2) {
        if (item1 !== item2) {
            const index1 = item1.inventoryIndex;
            const index2 = item2.inventoryIndex;

            this.removeItem(item1);
            this.removeItem(item2);

            this.addItemInventoryIndex(item1, index2);
            this.addItemInventoryIndex(item2, index1);
        }
    }
}