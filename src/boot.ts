import "angular";
import "angular-animate";
import "../node_modules/angular-material/angular-material.css";

import "angular-material";
import "../node_modules/angular-aria/angular-aria.js";
import "../node_modules/angular-material-icons/angular-material-icons.js";
import "../node_modules/angular-material-icons/angular-material-icons.css";

import {MainController} from "./controllers/mainController.ts";
import {UserService} from "./services/userService";

angular.module('projectTemplateApp', ['ngMaterial', 'ngMdIcons'])
    .service('userService', UserService)
    .controller('mainController', MainController)
    .config(($mdIconProvider: angular.material.IIconProvider,
             $mdThemingProvider: angular.material.IThemingProvider) => {

        $mdIconProvider
            .defaultIconSet('./assets/svg/avatars.svg',128)
            .icon('menu','./assets/svg/menu.svg', 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    });