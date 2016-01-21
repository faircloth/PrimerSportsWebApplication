let SharePageController = function($scope, UtmGrabberService, ReferrerService, $state, $location, $window) {
  
  console.log('PAGE URL', UtmGrabberService);

  let vm = this;

  vm.enterContest   = enterContest;
  vm.contestEntered = true;
  vm.goToUtm        = goToUtm;


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


  vm.linkSource     = pageInfo.source;

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