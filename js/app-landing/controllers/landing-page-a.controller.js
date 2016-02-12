let LandingPageAController = function($scope, $anchorScroll, $location, $state, $rootScope, UtmGrabberService, ConversionService) {
  
  console.log('Landing page a controller');

  let vm = this;

  console.log(UtmGrabberService);
  console.log('conversion service in controller');
  

  // run on page load
  function pageLoad () {
    console.log('the page was loaded');
    let pageInfo = {
      pageUrl: UtmGrabberService.currentPageUrl,
      source: UtmGrabberService.source
    };
    ConversionService.registerPageView(pageInfo).then( (response) => {
      console.log('RESPONSE FOR PAGE VIEW:', response);
    });
  }

  setTimeout( function() {
    pageLoad();
  }, 500);


  // FUNCTIONS TO DEFINE
  vm.goToPage   = goToPage;
  vm.goToDemo   = goToDemo;
  vm.subscribe  = subscribe;


  // FUNCTIONS
  function goToPage (root) {
    $state.go(root);
  }

  function goToDemo (id) {
    $location.hash(id);
    $anchorScroll();
  }

  function subscribe (subscriber) {
    console.log('Subscriber:', subscriber);
    let pageInfo2 = {
      pageUrl: UtmGrabberService.currentPageUrl,
      source: UtmGrabberService.source
    };
    setTimeout( function () {
      console.log(pageInfo2);
      ConversionService.registerConversion(subscriber, pageInfo2).then( (response) => {
        console.log('RESPONSE FOR SIGNUP:', response);
      });
    }, 1000);
  }


};

LandingPageAController.$inject = ['$scope', '$anchorScroll', '$location', '$state', '$rootScope','UtmGrabberService', 'ConversionService'];

export default LandingPageAController;  