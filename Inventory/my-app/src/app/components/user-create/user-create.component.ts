import {Component} from "@angular/core";
import {User} from "../../shared/classes/user";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
@Component({
    selector: 'user-create',
    templateUrl: 'user-create.component.html',
    styleUrls: ['user-create.component.scss']
})

export class UserCreateComponent {
    private player: string = "Player# 1";
    private name: string;

    constructor(private userService: UserService, private router: Router) {
    }

    onEnter() {
        const user = new User(this.name);
        this.userService.addUser(user);
        this.router.navigate(['itemInterface', user.getId()]);
    }
}