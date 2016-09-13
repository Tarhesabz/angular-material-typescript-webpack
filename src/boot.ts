import "angular";
import "angular-animate";



import "angular-material";
import "../node_modules/angular-aria/angular-aria.js";

import {MainController} from "./controllers/mainController.ts";

angular.module('projectTemplateApp', ['ngMaterial'])
    .controller('mainController', MainController);