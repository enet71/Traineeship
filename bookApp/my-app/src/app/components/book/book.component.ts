import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/services/data.service";

@Component({
    selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
    book;

    constructor(private route: ActivatedRoute, private dataService: DataService) {
    }

    ngOnInit(): void {
        this.route.params
            .subscribe(params => this.dataService.getBook((params['id']))
                .subscribe(response => this.book = response
                ));

    }
}