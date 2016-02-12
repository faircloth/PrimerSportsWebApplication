let ShareLeaderboardController = function($scope, ReferrerService) {
  
  // View model
  let vm = this;

  // let allReferrers   = [];
  // let top10Referrers = [];

  let referrerEmails = [];
  
  // On page load
  function checkForEmail () {
    console.log('check for email');
    
    // Look in url and see if an email is present, if not show the form

    // They may still be signed up so use form to check that
  }
  function getReferrers () {
    ReferrerService.getReferrers().then( (response) => {
      console.log('REFERRERS:', response.data.results);
      let allReferrers = response.data.results;
      console.log('all referrers:', allReferrers);

      allReferrers.forEach ( function (referrer) {
        console.log('EACH EMAIL:', referrer.source);
        if ( !referrerEmails.includes(referrer.source) ) {
          referrerEmails.push(referrer.source);
        }
      });

      vm.referrers = referrerEmails;
    });
  }

  checkForEmail();
  getReferrers();

  // Function definitions
  // those declared in view model
};

ShareLeaderboardController.$inject = ['$scope', 'ReferrerService'];

export default ShareLeaderboardController;