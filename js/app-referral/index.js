// Angular modules
import angular from 'angular';


// CONTROLLERS
import SharePageController from './controllers/share-page.controller';
import ShareLeaderboardController from './controllers/share-leaderboard.controller';

// SERVICES
import UtmGrabberService from './services/utm-grabber.service';
import ReferrerService from './services/referrer.service';

angular
  .module('app.referral', [])

  .controller('SharePageController', SharePageController)
  .controller('ShareLeaderboardController', ShareLeaderboardController)

  .service('UtmGrabberService', UtmGrabberService)
  .service('ReferrerService', ReferrerService)
;