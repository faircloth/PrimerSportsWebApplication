let config = function($urlRouterProvider, $stateProvider) {
  
  // Default to home page on unknown url
  $urlRouterProvider.otherwise('/');


  // States and views
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      views: {
        // sidebar: {
        //   templateUrl: 'templates/app-layout/sidebar.tpl.html'
        // },
        // navigation: {
        //   templateUrl: 'templates/app-layout/navigation.tpl.html'
        // },
        content: {
          controller: 'HomepageController as vm',
          templateUrl: 'templates/app-content/homepage.tpl.html'
        }
      }
    })
    .state('root.admin-signin', {
      url: '/admin-signin',
      views: {
        content: {
          templateUrl: 'templates/app-admin/admin-signin.tpl.html'
        }
      }
    });


};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;  