import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class RedditService {
    http: any;
    baseUrl: string;

    constructor(http: Http) {
        this.http = http;
        this.baseUrl = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=146446f8172041a0982d9b1f0d66cadf';
    }

    getPosts(category, limit) {
        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }
}
