import $ from 'jquery';
import angular from 'angular';

// Import other app modules
import './app-core/index';
import './app-content/index';
import './app-admin/index';
import './app-landing/index';


angular
  .module('app', ['app.core', 'app.content', 'app.admin', 'app.landing']);


