import {Component} from "@angular/core";
import {CharacterService} from "../../shared/services/character.service";
import {StaticMethods} from "../../shared/classes/static-methods";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
import {InventoryService} from "../../shared/services/inventory.service";

@Component({
    selector: 'character-list',
    templateUrl: 'character-list.component.html',
    styleUrls: ['character-list.component.scss']
})

export class CharacterListComponent {
    currentList = [];
    lists = [[], [], []];

    constructor(private characterService: CharacterService,
                private userService: UserService,
                private router: Router,
                private inventoryService: InventoryService) {
        this.currentList = this.lists[0];
    }

    swapList(list) {
        StaticMethods.clearPushArray(this.currentList, this.characterService.getItemListCharacter());
        this.currentList = list;
        this.characterService.setItemListCharacter(list);
    }

    onStart() {
        if (this.userService.hasNext()) {
            this.inventoryService.reloadList();
            this.characterService.clearList();
            this.router.navigate(['createUser']);
        }
    }
}