import angular from 'angular';

// CONTROLLERS
import HomepageController from './controllers/homepage.controller';
import ArchivesController from './controllers/archives.controller';


// SERVICES
import ContentService from './services/content.service';

angular
  .module('app.content', [])

  .controller('HomepageController', HomepageController)
  .controller('ArchivesController', ArchivesController)

  .service('ContentService', ContentService)

;