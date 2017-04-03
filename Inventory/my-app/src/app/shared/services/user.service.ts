import {Injectable} from "@angular/core";
import {User} from "../classes/user";
import {element} from "protractor";

@Injectable()
export class UserService {
    private max: number = 2;
    private users: User[] = [];

    addUser(user: User): boolean {
        if (this.hasNext()) {
            this.users.push(user);
            return true;
        }
        return false;
    }

    getUsers(): User[] {
        return this.users;
    }

    getUserById(id): User {
        return this.users.find(element => {
            if (element.getId() == id) {
                return true;
            }
        });
    }

    getCurrentSize(): number {
        return this.users.length;
    }

    getMax(): number {
        return this.max;
    }

    hasNext(): boolean {
        return this.users.length < this.max;
    }

    clearUsers() {
        this.users.splice(0);
    }
}