import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {RedditService} from "../../app/services/reddit.service";

@Component({
    selector: 'reddits',
    templateUrl: 'reddits.html'

})

export class RedditsPage implements OnInit {
    items: any;

    constructor(public navCtrl: NavController, private redditService: RedditService) {

    }

    ngOnInit(): void {
        this.getPosts('sports', 5);
    }

    private getPosts(category, limit) {
        this.redditService.getPosts(category, limit).subscribe(response => {
            this.items = response.articles;
        });
    }
}