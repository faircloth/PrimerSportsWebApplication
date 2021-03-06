// Angular modules
import angular from 'angular';


// CONTROLLERS
import SharePageController from './controllers/share-page.controller';
import ShareLeaderboardController from './controllers/share-leaderboard.controller';
import MyLeaderboard from './controllers/my-leaderboard.controller';
import ThankYouController from './controllers/thank-you.controller';

// SERVICES
import UtmGrabberService from './services/utm-grabber.service';
import ReferrerService from './services/referrer.service';

angular
  .module('app.referral', [])

  .controller('SharePageController', SharePageController)
  .controller('ShareLeaderboardController', ShareLeaderboardController)
  .controller('MyLeaderboard', MyLeaderboard)
  .controller('ThankYouController', ThankYouController)

  .service('UtmGrabberService', UtmGrabberService)
  .service('ReferrerService', ReferrerService)
;