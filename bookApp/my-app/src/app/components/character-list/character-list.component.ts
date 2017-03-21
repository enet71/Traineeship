import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {DataService} from "../../shared/services/data.service";

@Component({
    selector: 'character-list',
    templateUrl: 'character-list.component.html',
    styleUrls: ['character-list.component.css']
})

export class CharacterListComponent implements OnInit {
    @Input() characterList;
    visibleList = [];

    start: number = 0;
    loadNum: number = 15;

    constructor(private dataService:DataService,private router:Router) {
    }

    ngOnInit(): void {
        this.listPush();
    }

    loadMore() {
        this.listPush();
    }

    onOpen(character){
        this.router.navigate(['character',character.url.split('/').pop()]);
    }

    listPush() {
        Observable.from(this.characterList.slice(this.start, this.start + this.loadNum))
            .map((element: string) => element.split('/').pop())
            .subscribe(element=> this.dataService.getCharacter(element).subscribe(response => this.visibleList.push(response)));
        this.start += this.loadNum;
    }
}