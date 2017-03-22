import {Injectable} from "@angular/core";
import {element} from "protractor";

@Injectable()
export class ItemService {
    numItem = 10;
    widthItem = 50;
    max = 60;

    itemList: any = [
        {
            index: 0,
            status: false,
            itemVal: 0,
        },
        {
            index: 4,
            status: false,
            itemVal: 4,
        }
    ];

    itemListCharacter: any = [];

    getItemList() {
        this.itemList.map(element => {
            this.setCoords(element);
            return element;
        });
        return this.itemList;
    }

    getItemListCharacters() {
        this.itemList.map(element => {
            this.setCoordsCharacter(element);
            return element;
        });
        return this.itemListCharacter;
    }

    /*addItem(item?) {
     if (this.itemList.length < this.max) {
     let index = -1;
     for (let i = 0; i < this.itemList.length; i++) {
     if (this.itemList[0].index != 0) {
     index = 0;
     break;
     }
     if (!this.itemList[i + 1] || this.itemList[i + 1].index - this.itemList[i].index > 1) {
     index = i + 1;
     break;
     }
     }

     let element = {index: index};
     this.itemList.push(element);

     this.itemList.sort((a, b) => a.index < b.index ? -1 : 1);
     }
     }
     */

    addItem(item?) {
        if (this.itemList.length < this.max) {
            for (let i = 0; i < this.itemList.length; i++) {
                if (this.itemList[i].index != i) {
                    let element = {index: i};
                    this.itemList.splice(i, 0, element);
                    break;
                }
                if (!this.itemList[i + 1]) {
                    let element = {index: i + 1};
                    this.itemList.push(element);
                    break;
                }
            }
        }
    }


    addItemCharacter(item) {

    }

    removeItem(item) {
        this.itemList.splice(this.itemList.indexOf(item), 1);
    }

    setCoords(element) {
        let x = Math.floor(element.index / this.numItem);
        let y = Math.floor(element.index - (this.numItem * x));

        element.top = x * this.widthItem;
        element.left = y * this.widthItem;
    }

    setCoordsCharacter(element) {
        if (element.itemVal == 1) {
            element.top = 20;
            element.left = 50;
        }
    }


}