import angular from 'angular';

// CONTROLLERS
import AdminSigninController from './controllers/admin-signin.controller';
import AdminSignupController from './controllers/admin-signup.controller';


// SERVICES


angular
  .module('app.admin', [])
  .controller('AdminSigninController', AdminSigninController)
  .controller('AdminSignupController', AdminSignupController)
;