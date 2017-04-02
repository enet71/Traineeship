import {Injectable} from "@angular/core";
import {User} from "../classes/user";
import {element} from "protractor";

@Injectable()
export class UserService {
    private max = 2;
    private users: User[] = [];

    addUser(user: User): boolean {
        if (this.hasNext()) {
            this.users.push(user);
            return true;
        }
        return false;
    }

    getUsers() {
        return this.users;
    }

    getUserById(id): User {
        return this.users.find(element => {
            if (element.getId() == id) {
                return true;
            }
        });
    }

    getCurrentSize() {
        return this.users.length;
    }

    getMax() {
        return this.max;
    }

    hasNext() {
        return this.users.length < this.max;
    }

    clearUsers() {
        this.users.splice(0);
    }
}