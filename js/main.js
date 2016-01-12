import $ from 'jquery';
import angular from 'angular';

// Import other app modules
import './app-core/index';
import './app-content/index';
import './app-admin/index';


angular
  .module('app', ['app.core', 'app.content', 'app.admin']);


