import angular from 'angular';

// CONTROLLERS
import AdminSigninController from './controllers/admin-signin.controller';
import AdminSignupController from './controllers/admin-signup.controller';

// SERVICES
import AdminService from './services/admin.service';

// RUN BLOCK ON HERE TO SET HEADERS

angular
  .module('app.admin', [])
  .controller('AdminSigninController', AdminSigninController)
  .controller('AdminSignupController', AdminSignupController)
  .service('AdminService', AdminService)
;