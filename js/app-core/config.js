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
        adminSidebar: {
          templateUrl: 'templates/app-layout/admin-sidebar.tpl.html'
        },
        content: {
          controller: 'AdminSigninController as vm',
          templateUrl: 'templates/app-admin/admin-signin.tpl.html'
        }
      }
    })
    .state('root.admin-signup', {
      url: '/create-new-admin',
      views: {
        adminSidebar: {
          templateUrl: 'templates/app-layout/admin-sidebar.tpl.html'
        },
        content: {
          controller: 'AdminSignupController as vm',
          templateUrl: 'templates/app-admin/admin-signup.tpl.html'
        }
      }
    })
    .state('root.admin-new-article', {
      url: '/admin-new-article',
      views: {
        adminSidebar: {
          templateUrl: 'templates/app-layout/admin-sidebar.tpl.html'
        },
        content: {
          controller: 'CreateArticleController as vm',
          templateUrl: 'templates/app-admin/create-article.tpl.html'
        }
      }
    })
    .state('root.landing-a', {
      url: '/landing-a',
      views: {
        content: {
          controller: 'LandingPageAController as vm',
          templateUrl: 'templates/app-landing/landing-page-a.tpl.html'
        }
      }
    })
    ;


};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;  