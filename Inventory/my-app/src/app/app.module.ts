import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InventoryComponent} from "./components/inventory/inventory.component";
import {ItemService} from "./shared/services/item.service";
import {ItemComponent} from "./components/item/item.component";
import {CharacterComponent} from "./components/character/character.component";
import {CharacterService} from "./shared/services/character.service";
import {InventoryService} from "./shared/services/inventory.service";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {UserCreateComponent} from "./components/user-create/user-create.component";
import {ItemInterfaceComponent} from "./components/item-interface/item-interface.component";
import {AppRoutingModule} from "./app.routing.module";
import {UserService} from "./shared/services/user.service";
import {VersusTableComponent} from "./components/versus-table/versus-table.component";
import {MenuComponent} from "./components/menu/menu.component";
import {BattleHero} from "./components/versus-table/battle-hero/battle-hero.component";

@NgModule({
    declarations: [
        AppComponent,
        InventoryComponent,
        ItemComponent,
        CharacterComponent,
        CharacterListComponent,
        UserCreateComponent,
        ItemInterfaceComponent,
        VersusTableComponent,
        MenuComponent,
        BattleHero
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        ItemService, CharacterService, InventoryService, UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
