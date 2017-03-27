import {Injectable} from "@angular/core";
import {User} from "../classes/user";

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

    getCurrentSize() {
        return this.users.length;
    }

    getMax() {
        return this.max;
    }

    hasNext() {
        return this.users.length < this.max;
    }
}