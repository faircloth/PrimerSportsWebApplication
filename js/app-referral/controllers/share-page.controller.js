let SharePageController = function($scope, UtmGrabberService, ReferrerService, $state, $location, $window) {
  
  console.log('PAGE URL', UtmGrabberService);

  let vm = this;

  vm.enterContest     = enterContest;
  vm.contestEntered   = true;
  vm.goToUtm          = goToUtm;
  vm.getMessage       = getMessage;
  vm.showFavorites    = showFavorites;
  vm.favoriteOptions  = false;
  vm.writeMyOwn       = writeMyOwn;
  vm.select           = select;

  vm.choices = [
  'The Primer',
  'Major stories',
  'Quick hits',
  'Highlight of the day',
  'Graphics',
  'ACC Basketball',
  'One-hit wonders',
  'Primer Nugget'
  ]

  let selectedChoice = {};

  function select (choice) {
    console.log(choice);
    selectedChoice = {};
    selectedChoice = choice;
    if (selectedChoice === choice) {
      vm.active = 'active';
    } else {
      vm.active = 'other';
    }
  }


  function getMessage (type) {
    console.log(type);
    vm.favoriteOptions = false;
  }

  function showFavorites () {
    console.log('show favorites function called');
    vm.favoriteOptions = true;
  }


  function writeMyOwn () {
    console.log('write my own message called');
    vm.favoriteOptions = false;
  }


  function goToUtm (url) {
    console.log('GO TO UTM:', url);
    $window.location.hash = url;
    $window.location.reload();
  }

  let pageInfo = {
    pageUrl: UtmGrabberService.currentPageUrl,
    source: UtmGrabberService.source,
    medium: UtmGrabberService.medium,
    campaign: UtmGrabberService.campaign
  };


  // http://primer-webapp.surge.sh/#/landing-a?utm_source=

  let landingPages = {
    A: 'http://primer-webapp.surge.sh/#/landing-a?utm_source=',
    B: 'http://primer-webapp.surge.sh/#/landing-b?utm_source=',
  }


  vm.referrerEmail  = pageInfo.source;
  vm.linkSource     = landingPages.A + pageInfo.source;

  registerPageVisit (pageInfo);

  function registerPageVisit (pageInfo) {
    if (!pageInfo.medium){
      console.log('no url info');
      vm.contestEntered = false;
    } else {
      ReferrerService.shareVisit(pageInfo);
    }
  }


  function enterContest (entry) {

    if ( !entry ) {
      alert('Please sign up so we can track your results!');
    } else {

      let startingPoint = pageInfo.pageUrl.indexOf('#/');
      let extension = pageInfo.pageUrl.substring(startingPoint + 2);
      let newUrlExtension = extension + '?utm_source=' + entry.email + '&utm_medium=newsignup' + '&utm_campaign=0';
      
      ReferrerService.enterContest(entry).then( (response) => {
        console.log(response);
        goToUtm(newUrlExtension);
        vm.contestEntered = true;
      });

      setTimeout( function () {
        registerPageVisit(pageInfo);
      }, 500);
    }
  }



};

SharePageController.$inject = ['$scope', 'UtmGrabberService', 'ReferrerService', '$state', '$location', '$window'];

export default SharePageController;