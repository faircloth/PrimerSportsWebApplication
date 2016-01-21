// Angular modules
import angular from 'angular';


// CONTROLLERS
import SharePageController from './controllers/share-page.controller';

// SERVICES
import UtmGrabberService from './services/utm-grabber.service';
import ReferrerService from './services/referrer.service';

angular
  .module('app.referral', [])

  .controller('SharePageController', SharePageController)

  .service('UtmGrabberService', UtmGrabberService)
  .service('ReferrerService', ReferrerService)

;