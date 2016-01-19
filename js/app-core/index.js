// Angular modules
import angular from 'angular';
import 'angular-ui-router';
import 'angular-foundation';
import 'angular-cookies';

// File import
import config from './config';
import HEROKU from './constants/heroku.constant';
import PARSE from './constants/parse.constant';

angular
  .module('app.core', ['ui.router', 'mm.foundation', 'ngCookies'])
  .config(config)
  .constant('HEROKU', HEROKU)
  .constant('PARSE', PARSE)
;