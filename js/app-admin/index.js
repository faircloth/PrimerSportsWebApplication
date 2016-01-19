import angular from 'angular';

// CONTROLLERS
import AdminSigninController from './controllers/admin-signin.controller';
import AdminSignupController from './controllers/admin-signup.controller';
import CreateArticleController from './controllers/create-article.controller';
import ManageTagsController from './controllers/manage-tags.controller';
import AdminHomeController from './controllers/admin-home.controller';

// SERVICES
import AdminService from './services/admin.service';
import ContentMgmtService from './services/content-management.service';

// RUN BLOCK ON HERE TO SET HEADERS

angular
  .module('app.admin', [])
  
  .controller('AdminSigninController', AdminSigninController)
  .controller('AdminSignupController', AdminSignupController)
  .controller('CreateArticleController', CreateArticleController)
  .controller('ManageTagsController', ManageTagsController)
  .controller('AdminHomeController', AdminHomeController)

  .service('AdminService', AdminService)
  .service('ContentMgmtService', ContentMgmtService)
;