import angular from 'angular';

// CONTROLLERS
import HomepageController from './controllers/homepage.controller';


// SERVICES


angular
  .module('app.content', [])
  .controller('HomepageController', HomepageController)
;