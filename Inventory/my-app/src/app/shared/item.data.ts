export const itemValueList = [
    "shoulders",
    "hands",
    "finger-left",
    "hand-left",
    "head",
    "torso",
    "waist",
    "legs",
    "feet",
    "neck",
    "bracers",
    "finger-right",
    "hand-right"
];

export class DataList {
    private static numItem: number = 10;
    private static widthItem: number = 43.5;
    private static heightItem: number = 53;

    static getItemList() {
        return itemList.slice();
    }

    static reloadList() {
        for (let i = 0; i < itemList.length; i++) {
            itemList[i].status = false;
            itemList[i].inventoryIndex = i;
            this.setCoords(itemList[i]);
        }
    }

    static setCoords(element) {
        const y = Math.floor(element.inventoryIndex / this.numItem);
        const x = Math.floor(element.inventoryIndex - (this.numItem * y));

        element.left = x * this.widthItem + 14 + x * 4;
        element.top = y * this.heightItem + 12 + y * 4;
    }

    static inventorySort() {
        itemList.sort((a, b) => a.inventoryIndex < b.inventoryIndex ? -1 : 1);
    }
}

export const itemList = [
    {
        index: 0,
        inventoryIndex: 0,
        status: false,
        itemValue: itemValueList[0],

        bonuses: {
            dexterity: 315,
            vitality: 170,
            criticalChance: 2,
            extraGold: 11,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-0",
        characterCoordsClass: "shoulders",

        itemImageBig: "shoulders-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[0],
                characterCoords: "shoulders",
            }
        ],
    },
    {
        index: 1,
        inventoryIndex: 1,
        status: false,
        itemValue: itemValueList[1],
        bonuses: {
            dexterity: 300,
            vitality: 120,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-1",
        characterCoordsClass: "hands",

        itemImageBig: "hands-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[1],
                characterCoords: "hands",
            }
        ],
    },
    {
        index: 2,
        inventoryIndex: 2,
        status: false,
        itemValue: itemValueList[2],
        bonuses: {
            dexterity: 330,
            vitality: 100,
            criticalChance: 2,
            extraGold: 8,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-2",
        characterCoordsClass: "finger-left",

        itemImageBig: "finger-left-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[2],
                characterCoords: "finger-left",
            }, {
                value: itemValueList[11],
                characterCoords: "finger-right",
            }
        ],

    },
    {
        index: 3,
        inventoryIndex: 3,
        status: false,
        itemValue: itemValueList[3],
        bonuses: {
            dexterity: 220,
            vitality: 50,
            criticalChance: 8,
            extraGold: 4,
            criticalHit: 2
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-3",
        characterCoordsClass: "hand-left",

        itemImageBig: "hand-left-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[3],
                characterCoords: "hand-left",
            }
        ],
    },

    {
        index: 4,
        inventoryIndex: 4,
        status: false,
        itemValue: itemValueList[4],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-4",
        characterCoordsClass: "head",

        itemImageBig: "head-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[4],
                characterCoords: "head",
            }
        ],
    },
    {
        index: 5,
        inventoryIndex: 5,
        status: false,
        itemValue: itemValueList[5],
        bonuses: {
            dexterity: 340,
            vitality: 130,
            criticalChance: 7,
            extraGold: 14,
            criticalHit: 11
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-5",
        characterCoordsClass: "torso",

        itemImageBig: "torso-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[5],
                characterCoords: "torso",
            }
        ],

    },
    {
        index: 6,
        inventoryIndex: 6,
        status: false,
        itemValue: itemValueList[6],
        bonuses: {
            dexterity: 200,
            vitality: 300,
            criticalChance: 12,
            extraGold: 25,
            criticalHit: 16
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-6",
        characterCoordsClass: "waist",

        itemImageBig: "waist-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[6],
                characterCoords: "waist",
            }
        ],

    },
    {
        index: 7,
        inventoryIndex: 7,
        status: false,
        itemValue: itemValueList[7],
        bonuses: {
            dexterity: 100,
            vitality: 400,
            criticalChance: 5,
            extraGold: 15,
            criticalHit: 25
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-7",
        characterCoordsClass: "legs",

        itemImageBig: "legs-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[7],
                characterCoords: "legs",
            }
        ],

    },
    {
        index: 8,
        inventoryIndex: 8,
        status: false,
        itemValue: itemValueList[8],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 7,
            extraGold: 8,
            criticalHit: 16
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-8",
        characterCoordsClass: "feet",

        itemImageBig: "feet-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[8],
                characterCoords: "feet",
            }
        ],

    },
    {
        index: 9,
        inventoryIndex: 9,
        status: false,
        itemValue: itemValueList[9],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 4
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-9",
        characterCoordsClass: "neck",

        itemImageBig: "neck-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[9],
                characterCoords: "neck",
            }
        ],

    },
    {
        index: 10,
        inventoryIndex: 10,
        status: false,
        itemValue: itemValueList[10],
        bonuses: {
            dexterity: 245,
            vitality: 50,
            criticalChance: 2,
            extraGold: 6,
            criticalHit: 15
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-10",
        characterCoordsClass: "bracers",

        itemImageBig: "bracers-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[10],
                characterCoords: "bracers",
            }
        ],

    },
    {
        index: 11,
        inventoryIndex: 11,
        status: false,
        itemValue: itemValueList[11],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-11",
        characterCoordsClass: "finger-right",

        itemImageBig: "finger-right-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[11],
                characterCoords: "finger-right",
            },
            {
                value: itemValueList[2],
                characterCoords: "finger-left",
            }
        ],

    },
    {
        index: 12,
        inventoryIndex: 12,
        status: false,
        itemValue: itemValueList[12],
        bonuses: {
            dexterity: 300,
            vitality: 150,
            criticalChance: 5,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsDem",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-12",
        characterCoordsClass: "hand-right",

        itemImageBig: "hand-right-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[12],
                characterCoords: "hand-right",
            }
        ],

    },
    {
        index: 13,
        inventoryIndex: 13,
        status: false,
        itemValue: itemValueList[1],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-13",
        characterCoordsClass: "hands",

        itemImageBig: "hands-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[1],
                characterCoords: "hands",
            }
        ],
    },
    {
        index: 14,
        inventoryIndex: 14,
        status: false,
        itemValue: itemValueList[8],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-14",
        characterCoordsClass: "feet",

        itemImageBig: "feet-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[8],
                characterCoords: "feet",
            }
        ],
    },
    {
        index: 15,
        inventoryIndex: 15,
        status: false,
        itemValue: itemValueList[10],
        bonuses: {
            dexterity: 300,
            vitality: 100,
            criticalChance: 2,
            extraGold: 10,
            criticalHit: 10
        },

        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsDemMini",
        },

        inventoryCoordsClass: "item-inventory-15",
        characterCoordsClass: "bracers",

        itemImageBig: "bracers-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[10],
                characterCoords: "bracers",
            }
        ],
    },
    {
        index: 16,
        inventoryIndex: 16,
        status: false,
        itemValue: itemValueList[0],
        bonuses: {
            dexterity: 320,
            vitality: 110,
            criticalChance: 4,
            extraGold: 7,
            criticalHit: 6
        },

        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsWarMini",
        },

        inventoryCoordsClass: "item-inventory-16",
        characterCoordsClass: "shoulders",

        itemImageBig: "shoulders-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[0],
                characterCoords: "shoulders",
            }
        ],
    },
    {
        index: 17,
        inventoryIndex: 17,
        status: false,
        itemValue: itemValueList[5],
        bonuses: {
            dexterity: 320,
            vitality: 110,
            criticalChance: 4,
            extraGold: 7,
            criticalHit: 6
        },

        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsWarMini",
        },

        inventoryCoordsClass: "item-inventory-17",
        characterCoordsClass: "torso",

        itemImageBig: "torso-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[5],
                characterCoords: "torso",
            }
        ],
    },
    {
        index: 18,
        inventoryIndex: 18,
        status: false,
        itemValue: itemValueList[7],
        bonuses: {
            dexterity: 320,
            vitality: 110,
            criticalChance: 4,
            extraGold: 7,
            criticalHit: 6
        },


        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsWarMini",
        },

        inventoryCoordsClass: "item-inventory-18",
        characterCoordsClass: "legs",

        itemImageBig: "legs-img",

        fill: false,
        itemValues: [
            {
                value: itemValueList[7],
                characterCoords: "legs",
            }
        ],
    },
    {
        index: 19,
        inventoryIndex: 19,
        status: false,
        itemValue: itemValueList[3],
        bonuses: {
            dexterity: 320,
            vitality: 110,
            criticalChance: 4,
            extraGold: 7,
            criticalHit: 6
        },

        styles: {
            spriteClass: "characterItemsWar",
            spriteClassMini: "characterItemsWarMini",
        },

        inventoryCoordsClass: "item-inventory-19",
        characterCoordsClass: "hand-left",

        itemImageBig: "hand-left-img",

        fill: true,
        itemValues: [
            {
                value: itemValueList[3],
                characterCoords: "hand-left",
            },
            {
                value: itemValueList[12],
                characterCoords: "hand-right",
            }
        ],
    }
];
