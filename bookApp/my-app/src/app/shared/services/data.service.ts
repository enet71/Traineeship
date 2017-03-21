import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/Rx';

@Injectable()
export class DataService {
    baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'http://anapioficeandfire.com/api/';
    }

    getBooks() {
        return this.http.get(this.baseUrl + 'books')
            .map(res => res.json());
    }

    getBook(id) {
        return this.http.get(this.baseUrl + 'books/' + id)
            .map(res => res.json());
    }

    getCharacter(id) {
        return this.http.get(this.baseUrl + 'characters/' + id)
            .map(res => res.json());
    }
}