import angular from 'angular';

// CONTROLLERS
import HomepageController from './controllers/homepage.controller';
import ArchivesController from './controllers/archives.controller';
import AboutController from './controllers/about.controller';


// SERVICES
import ContentService from './services/content.service';

angular
  .module('app.content', [])

  .controller('HomepageController', HomepageController)
  .controller('ArchivesController', ArchivesController)
  .controller('AboutController', AboutController)

  .service('ContentService', ContentService)

;