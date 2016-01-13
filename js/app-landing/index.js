import angular from 'angular';

// CONTROLLERS
import LandingPageAController from './controllers/landing-page-a.controller';

// SERVICES

// RUN BLOCK ON HERE TO SET HEADERS

angular
  .module('app.landing', [])
  
  .controller('LandingPageAController', LandingPageAController)

;
