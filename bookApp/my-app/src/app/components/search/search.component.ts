import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})

export class SearchComponent {
    constructor(private router: Router) {

    }

    onSearch(search){
        this.router.navigate(['search-result',search]);
    }
}