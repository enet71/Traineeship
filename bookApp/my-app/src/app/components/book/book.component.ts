import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../shared/book.service";

@Component({
    selector: 'book',
    templateUrl: 'book.component.html',
    styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
    book;

    constructor(private route: ActivatedRoute, private bookService: BookService) {
    }

    ngOnInit(): void {
        let id = 1;
        this.route.params.subscribe(params => id = (params['id']));
        this.bookService.getBook(id).subscribe(response => {
            console.log(response);
            this.book = response;
        });
    }
}