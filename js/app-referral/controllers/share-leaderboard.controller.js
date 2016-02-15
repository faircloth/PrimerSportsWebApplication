import _ from 'underscore';

let ShareLeaderboardController = function($scope, ReferrerService) {
  
  // View model
  let vm = this;
  vm.sortByVisits = sortByVisits;

  // let allReferrers   = [];
  // let top10Referrers = [];


  let referrerEmails = []; // Data object to populate the table
  let referrerList = []; // Raw list of emails including duplicates for landing visits
  let uniqueReferrers = []; // Non-duplicates list
  let realReferrers = []; // Only referrers who signed up
  
  // On page load
  function checkForEmail () {
    console.log('check for email');
    
    // Look in url and see if an email is present, if not show the form

    // They may still be signed up so use form to check that
  }
  function getReferrers () {
    ReferrerService.getReferrers().then( (response) => {
      // DATA OBJECTS FROM PARSE SERVER
      let allReferrers = response.data.results;

      allReferrers.forEach ( function (referrer) {
        // List of emails including duplicates
        referrerList.push(referrer.source);
        if ( referrer.source.indexOf('#') === -1 ) {
          realReferrers.push(referrer.source); 
        }
        uniqueReferrers = _.uniq(realReferrers);
      }); 

      // If the page visit is coming from a referrer
      uniqueReferrers.forEach( function (referrer) {
        let thisReferrer = referrer;
        let filter = _.filter(realReferrers, function (referrer) {
          return referrer === thisReferrer;
        });

        referrerEmails.push({
          email: referrer,
          visits: filter.length,
          // conversions: 
        });

      });    
      
    });

    vm.referrers       = referrerEmails;
    vm.uniqueReferrers = uniqueReferrers;
  }

  checkForEmail();
  getReferrers();

  // Function definitions
  // those declared in view model

  function sortByVisits () {
    let sortedReferrers = _.sortBy(referrerEmails, 'visits').reverse();
    console.log(sortedReferrers);
    vm.referrers = sortedReferrers;
  }
};

ShareLeaderboardController.$inject = ['$scope', 'ReferrerService'];

export default ShareLeaderboardController;