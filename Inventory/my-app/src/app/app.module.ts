import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InventoryComponent} from "./components/inventory/inventory.component";
import {ItemService} from "./shared/services/item.service";
import {ItemComponent} from "./components/item/item.component";
import {CharacterComponent} from "./components/character/character.component";
import {HeroService} from "./shared/services/hero.service";
import {InventoryService} from "./shared/services/inventory.service";

@NgModule({
    declarations: [
        AppComponent,
        InventoryComponent,
        ItemComponent,
        CharacterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ItemService, HeroService, InventoryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
