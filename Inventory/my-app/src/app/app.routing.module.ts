import {Routes, RouterModule} from "@angular/router";
import {UserCreateComponent} from "./components/user-create/user-create.component";
import {ItemInterfaceComponent} from "./components/item-interface/item-interface.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {path: '', redirectTo: 'createUser', pathMatch: 'full'},
    {path: 'createUser', component: UserCreateComponent},
    {path: 'itemInterface/:id', component: ItemInterfaceComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}