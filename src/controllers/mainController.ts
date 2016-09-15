import {IUserService} from "../services/userService";
import {User} from "../models";
/**
 * Created by rsparrow on 9/13/16.
 */

export class MainController {

    static $inject = ['userService', '$mdSidenav'];

    constructor(
        private userService: IUserService,
        private $mdSidenav: angular.material.ISidenavService) {
        var self = this;

        this.userService
            .loadAllUsers()
            .then((users: User[]) => {
                self.users = users;
                self.selected = users[0];
                console.log(self.users);
            });
    }

    users: User[] = [];
    selected: User = null;
    message: string = "Hello from our controller";

    toggleSideNav() : void {
        this.$mdSidenav('left').toggle();
    }

    selectedUser (user:User) : void {
        this.selected = user;

        var sidenav = this.$mdSidenav('left');
        if (sidenav.isOpen()) {
            sidenav.close();
        }
    }
}
