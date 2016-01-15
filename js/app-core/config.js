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
        content: {
          controller: 'HomepageController as vm',
          templateUrl: 'templates/app-content/homepage.tpl.html'
        }
      }
    })
    .state('root.about', {
      url: '/about',
      views: {
        navigation: {
          templateUrl: 'templates/app-layout/navigation.tpl.html'
        },
        content: {
          templateUrl: 'templates/app-content/about.tpl.html',
          controller: 'AboutController as vm'
        }
      }
    })
    .state('root.share', {
      url: '/share',
      views: {
        navigation: {
          templateUrl: 'templates/app-layout/navigation.tpl.html'
        },
        content: {
          templateUrl: 'templates/app-referral/share-page.tpl.html',
          controller: 'SharePageController as vm'
        }
      }
    })
    .state('root.admin-signin', {
      url: '/admin-signin',
      views: {
        navigation: {
          templateUrl: 'templates/app-layout/navigation.tpl.html'
        },
        adminSidebar: {
          templateUrl: 'templates/app-layout/admin-sidebar.tpl.html'
        },
        adminPage: {
          controller: 'AdminSigninController as vm',
          templateUrl: 'templates/app-admin/admin-signin.tpl.html'
        }
      }
    })
    .state('root.admin-signup', {
      url: '/create-new-admin',
      views: {
        navigation: {
          templateUrl: 'templates/app-layout/navigation.tpl.html'
        },
        adminSidebar: {
          templateUrl: 'templates/app-layout/admin-sidebar.tpl.html'
        },
        adminPage: {
          controller: 'AdminSignupController as vm',
          templateUrl: 'templates/app-admin/admin-signup.tpl.html'
        }
      }
    })
    .state('root.admin-new-article', {
      url: '/admin-new-article',
      views: {
        navigation: {
          templateUrl: 'templates/app-layout/navigation.tpl.html'
        },
        adminSidebar: {
          templateUrl: 'templates/app-layout/admin-sidebar.tpl.html'
        },
        adminPage: {
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
    .state('root.archives', {
      url: '/archives',
      views: {
        navigation: {
          templateUrl: 'templates/app-layout/navigation.tpl.html'
        },
        content: {
          controller: 'ArchivesController as vm',
          templateUrl: 'templates/app-content/archives.tpl.html'
        }
      }
    })
    ;


};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;  