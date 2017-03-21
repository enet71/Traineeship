import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookComponent} from "./components/book/book.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {CharacterComponent} from "./components/character/character.component";
import {HouseComponent} from "./components/house/house.component";

const routes: Routes = [
    {path: '', redirectTo: '/bookList', pathMatch: 'full'},
    {path: 'bookList', component: BookListComponent},
    {path: 'book/:id', component: BookComponent},
    {path: 'character/:id', component: CharacterComponent},
    {path: 'house/:id', component: HouseComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}