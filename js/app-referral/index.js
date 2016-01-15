// Angular modules
import angular from 'angular';


// CONTROLLERS
import SharePageController from './controllers/share-page.controller';

// SERVICES

angular
  .module('app.referral', [])

  .controller('SharePageController', SharePageController)
;