import {Component, OnInit} from "@angular/core";
import {BookService} from "../../shared/book.service";
import {Router} from "@angular/router";

@Component({
    selector: 'book-list',
    templateUrl: 'book-list.component.html',
    styleUrls: ['book-list.component.css']
})

export class BookListComponent implements OnInit {
    bookList = [];

    constructor(private bookService: BookService, private router: Router) {
    }

    ngOnInit(): void {
        this.bookService.getBooks().subscribe(response => {
            console.log(response);
            this.bookList = response
        });
    }

    onOpen(item){
        this.router.navigate(['book',item.url.split('/').pop()]);
    }
}