import {Injectable} from "@angular/core";
import {itemList} from "../item.data";

@Injectable()
export class ItemService {
    public dragItemVal;
    public dragItemIndex;
    public dragItem;

    private numItem: number = 10;
    private widthItem: number = 43.5;
    private heightItem: number = 53;
    private max: number = 60;
    private itemListCharacter: any = [];
    private itemList = [];

    public hero = {
        dexterity: 0,
        vitality: 0,
        criticalChance: 0,
        extraGold: 0,
        criticalHit: 0,
    };

    constructor() {
        this.itemList = itemList;
    }

    getItemList() {
        this.itemList.map(element => {
            this.setCoords(element);
            return element;
        });
        return this.itemList;
    }

    getItemListCharacters() {
        return this.itemListCharacter;
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
        }
    }

    addItemInventoryIndex(item, index) {
        item.inventoryIndex = index;
        this.setCoords(item);
        this.itemList.splice(index, 0, item);
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
            this.setDefauleSize(replace);
            this.addItemInventoryIndex(replace, item.inventoryIndex);
        }

        item.status = true;
        this.itemListCharacter.push(item);
        this.calculateBonuses();
    }

    shiftItemToInventory(item) {
        item.status = false;
        this.setDefauleSize(item);
        this.addItem(item);
        this.calculateBonuses();
    }

    swapItems(item1, item2) {
        if(item1 !== item2){
            const index1 = item1.inventoryIndex;
            const index2 = item2.inventoryIndex;

            this.removeItem(item1);
            this.removeItem(item2);

            this.addItemInventoryIndex(item1, index2);
            this.addItemInventoryIndex(item2, index1);
        }
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

    setCoords(element) {
        const y = Math.floor(element.inventoryIndex / this.numItem);
        const x = Math.floor(element.inventoryIndex - (this.numItem * y));

        element.left = x * this.widthItem + 14 + x * 4;
        element.top = y * this.heightItem + 12 + y * 4;
    }

    setCoordsXY(element, x, y) {
        if (!element.status) {
            x = Math.ceil(x / 50);
            y = Math.ceil(y / 60);

            const invId = Math.ceil((y - 1) * 10 + x) - 1;
            const find = this.findItemInventoryIndex(invId);


            if (find) {
                this.swapItems(find, element);
            } else {
                this.removeItem(element);
                this.addItemInventoryIndex(element, invId);
            }
        } else {
            this.removeItem(element);
            this.shiftItemToInventory(element);
        }
    }

    setDefauleSize(item) {
        item.width = this.widthItem;
        item.height = this.heightItem;
    }

    calculateBonuses() {
        this.hero.dexterity = 0;
        this.hero.vitality = 0;
        this.hero.criticalChance = 0;
        this.hero.extraGold = 0;
        this.hero.criticalHit = 0;

        for (let item of this.itemListCharacter) {
            this.hero.dexterity += item.bonuses.dexterity;
            this.hero.vitality += item.bonuses.vitality;
            this.hero.criticalChance += item.bonuses.criticalChance;
            this.hero.extraGold += item.bonuses.extraGold;
            this.hero.criticalHit += item.bonuses.criticalHit;
        }
    }
}