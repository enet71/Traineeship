import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/services/data.service";

@Component({
    selector: 'character',
    templateUrl: 'character.component.html',
    styleUrls: ['character.component.css']
})

export class CharacterComponent implements OnInit{
    character;

    constructor(private route: ActivatedRoute,private dataService:DataService) {

    }

    ngOnInit(): void {
        this.route.params
            .subscribe(params => this.dataService.getCharacter((params['id']))
                .subscribe(response => this.character = response
                ));
    }
}