// Angular modules
import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';

// File import
import config from './config';

angular
  .module('app.core', ['ui.router', 'mm.foundation'])
  .config(config)
;