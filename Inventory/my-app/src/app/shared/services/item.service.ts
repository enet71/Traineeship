import {Injectable} from "@angular/core";
import {element} from "protractor";

@Injectable()
export class ItemService {
    numItem = 10;
    widthItem = 50;
    max = 60;

    itemList: any = [
        {
            inventoryIndex: 0,
            status: false,
            itemVal: 0,
        },
        {
            inventoryIndex: 1,
            status: false,
            itemVal: 1,
        },
        {
            inventoryIndex: 2,
            status: false,
            itemVal: 2,
        },
        {
            inventoryIndex: 3,
            status: false,
            itemVal: 3,
        },
        {
            inventoryIndex: 4,
            status: false,
            itemVal: 4,
        },
        {
            inventoryIndex: 5,
            status: false,
            itemVal: 5,
        },
        {
            inventoryIndex: 6,
            status: false,
            itemVal: 6,
        },
        {
            inventoryIndex: 7,
            status: false,
            itemVal: 7,
        },
        {
            inventoryIndex: 8,
            status: false,
            itemVal: 8,
        },
        {
            inventoryIndex: 9,
            status: false,
            itemVal: 9,
        },
        {
            inventoryIndex: 10,
            status: false,
            itemVal: 10,
        },
        {
            inventoryIndex: 11,
            status: false,
            itemVal: 11,
        },
        {
            inventoryIndex: 12,
            status: false,
            itemVal: 12,
        }
    ];

    itemListCharacter: any = [
        /*{
         inventoryIndex: 0,
         status: true,
         itemVal: 0,
         },
         {
         inventoryIndex: 1,
         status: true,
         itemVal: 1,
         },
         {
         inventoryIndex: 2,
         status: true,
         itemVal: 2,
         },
         {
         inventoryIndex: 3,
         status: true,
         itemVal: 3,
         },
         {
         inventoryIndex: 4,
         status: true,
         itemVal: 4,
         },
         {
         inventoryIndex: 5,
         status: true,
         itemVal: 5,
         },
         {
         inventoryIndex: 6,
         status: true,
         itemVal: 6,
         },
         {
         inventoryIndex: 7,
         status: true,
         itemVal: 7,
         },
         {
         inventoryIndex: 8,
         status: true,
         itemVal: 8,
         },
         {
         inventoryIndex: 9,
         status: true,
         itemVal: 9,
         },
         {
         inventoryIndex: 10,
         status: true,
         itemVal: 10,
         },
         {
         inventoryIndex: 11,
         status: true,
         itemVal: 11,
         },
         {
         inventoryIndex: 12,
         status: true,
         itemVal: 12,
         }*/
    ];

    getItemList() {
        this.itemList.map(element => {
            this.setCoords(element);
            return element;
        });
        return this.itemList;
    }

    getItemListCharacters() {
        this.itemListCharacter.map(element => {
            this.setCoordsCharacter(element);
            return element;
        });
        return this.itemListCharacter;
    }

    /*addItem(item?) {
     if (this.itemList.length < this.max) {
     let inventoryIndex = -1;
     for (let i = 0; i < this.itemList.length; i++) {
     if (this.itemList[0].inventoryIndex != 0) {
     inventoryIndex = 0;
     break;
     }
     if (!this.itemList[i + 1] || this.itemList[i + 1].inventoryIndex - this.itemList[i].inventoryIndex > 1) {
     inventoryIndex = i + 1;
     break;
     }
     }

     let element = {inventoryIndex: inventoryIndex};
     this.itemList.push(element);

     this.itemList.sort((a, b) => a.inventoryIndex < b.inventoryIndex ? -1 : 1);
     }
     }
     */

    element = {
        inventoryIndex: 9,
        status: false,
        itemVal: 9,
    };

    addItem(item?) {
        if (this.itemList.length < this.max) {

            for (let i = 0; i < this.itemList.length; i++) {
                let element;
                if (this.itemList[i].inventoryIndex != i) {
                    element = {inventoryIndex: i};
                    this.itemList.splice(i, 0, element);
                    break;
                }

                if (!this.itemList[i + 1]) {
                    element = {inventoryIndex: i + 1};
                    this.itemList.push(element);
                    break;
                }
            }
        }
    }


    addItemCharacter(item) {
        if (item.status == false) {
            item.status = true;
            this.setCoordsCharacter(item);
            this.itemListCharacter.push(item);
        } else {

        }
    }

    removeItem(item) {
        if (item.status == false) {
            this.itemList.splice(this.itemList.indexOf(item), 1);
        } else {
            this.itemListCharacter.splice(this.itemListCharacter.indexOf(item), 1);
        }
    }

    setCoords(element) {
        let x = Math.floor(element.inventoryIndex / this.numItem);
        let y = Math.floor(element.inventoryIndex - (this.numItem * x));

        element.top = x * this.widthItem;
        element.left = y * this.widthItem;
    }

    setCoordsCharacter(element) {
        if (element.itemVal == 0) {
            element.top = 50;
            element.left = 50;
        } else if (element.itemVal == 1) {
            element.top = 120;
            element.left = 50;
        } else if (element.itemVal == 2) {
            element.top = 190;
            element.left = 50;
        } else if (element.itemVal == 3) {
            element.top = 260;
            element.left = 50;
        }

        else if (element.itemVal == 4) {
            element.top = 20;
            element.left = 130;
        } else if (element.itemVal == 5) {
            element.top = 90;
            element.left = 130;
        } else if (element.itemVal == 6) {
            element.top = 160;
            element.left = 130;
        } else if (element.itemVal == 7) {
            element.top = 230;
            element.left = 130;
        } else if (element.itemVal == 8) {
            element.top = 300;
            element.left = 130;

        } else if (element.itemVal == 9) {
            element.top = 50;
            element.left = 210;
        } else if (element.itemVal == 10) {
            element.top = 120;
            element.left = 210;
        } else if (element.itemVal == 11) {
            element.top = 190;
            element.left = 210;
        } else if (element.itemVal == 12) {
            element.top = 260;
            element.left = 210;
        }
    }


}