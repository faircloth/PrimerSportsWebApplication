import angular from 'angular';

// CONTROLLERS
import LandingPageAController from './controllers/landing-page-a.controller';

// SERVICES
import ConversionService from './services/conversion.service';

// RUN BLOCK ON HERE TO SET HEADERS

angular
  .module('app.landing', [])
  
  .controller('LandingPageAController', LandingPageAController)

  .service('ConversionService', ConversionService)

;
