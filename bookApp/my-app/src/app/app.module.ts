import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookService} from "./shared/book.service";
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookComponent} from "./components/book/book.component";
import {AppRoutingModule} from "./app.routing.module";
import {CharacterListComponent} from "./components/character-list/character-list";

@NgModule({
    declarations: [
        AppComponent,
        BookListComponent,
        BookComponent,
        CharacterListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        BookService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
