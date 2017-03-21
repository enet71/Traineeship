import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {covers} from "../../shared/book-covers";
import {DataService} from "../../shared/services/data.service";

@Component({
    selector: 'book-list',
    templateUrl: 'book-list.component.html',
    styleUrls: ['book-list.component.css']
})

export class BookListComponent implements OnInit {
    bookList = [];

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit(): void {
        this.dataService.getBooks().subscribe(response => {
            //console.log(response);
            this.bookList = response;
            this.setCover();
        });


    }

    onOpen(item) {
        this.router.navigate(['book', item.url.split('/').pop()]);
    }

    setCover() {
        let a = covers;

        this.bookList = this.bookList.map(element => {
            let book = a.find((cover: any) => cover.bookUrl === element.url);
            let url = book ? book.coverUrl : covers[covers.length - 1].coverUrl;
            element.bookCover = url;
            return element;
        });
    }
}