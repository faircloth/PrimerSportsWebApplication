import _ from 'underscore';

let SharePageController = function($scope, UtmGrabberService, ReferrerService, $state, $location, $window, AdminShareMsgsService) {
  
  console.log('PAGE URL', UtmGrabberService);

  let vm = this;

  vm.enterContest     = enterContest;
  vm.contestEntered   = true;
  vm.goToUtm          = goToUtm;
  vm.getMessage       = getMessage;
  vm.favoriteOptions  = false;
  vm.writeMyOwn       = writeMyOwn;
  vm.select           = select;
  vm.sendEmail        = sendEmail;


  function sendEmail (email, referrerEmail, message) {
    console.log('TO:', email.list);
    console.log('REFERRER EMAIL:', referrerEmail);
    console.log('SHARE MESSAGE:', message);
    let emailA = {
      list: email.list,
      email: referrerEmail,
      text: message,
      name: 'Andrew'
    };
    ReferrerService.sendEmail(emailA).then( (response) => {
      console.log('RESPONSE', response);
    });
  }

  
  // TRY TO AUTOMATE
  let favoriteLabel = "Favorite part of Primer";
  let selectedChoice = 'Quick pitch';

  // START EMPTY
  vm.categories    = [];
  vm.favoriteParts = [];

  getShareMsgs();
  function getShareMsgs () {
    ReferrerService.getShareMsgs().then( (response) => {
      
      vm.shareMessages = response.data.results;
      let quickPitch = _.findWhere(vm.shareMessages, {category: 'Quick pitch'});
      console.log(quickPitch);
      vm.message = quickPitch.text;

      // Build category list and array of favorites messages
      vm.shareMessages.forEach( function (message) {
        if (message.category === favoriteLabel) {
          vm.favoriteParts.push(message);
          console.log('FAVORITE PARTS:', vm.favoriteParts);
        }
        if (!vm.categories.includes(message.category)) {
          vm.categories.unshift(message.category);
          console.log('CATEGORY LIST:', vm.categories);
        }
      });
    });
  }
  
  function getMessage (categoryName) {
    console.log(categoryName);
    if (categoryName === favoriteLabel) {
      vm.favoriteOptions = true;
    } else {
      vm.favoriteOptions = false;
      let selectedMessage = _.findWhere(vm.shareMessages, {category: categoryName});
      console.log('SELECTED MESSAGE:', selectedMessage );
      vm.message = selectedMessage.text;
    }
  }

  function select (favoritePart) {
    console.log(favoritePart);
    vm.message = favoritePart.text;
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
  };


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

SharePageController.$inject = ['$scope', 'UtmGrabberService', 'ReferrerService', '$state', '$location', '$window', 'AdminShareMsgsService'];

export default SharePageController;