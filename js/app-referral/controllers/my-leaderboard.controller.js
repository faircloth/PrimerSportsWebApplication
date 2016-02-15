import _ from 'underscore';

let MyLeaderboard = function($scope, $state, $stateParams, ReferrerService) {
  
  console.log('my leaderboard');

  let vm = this;

  vm.email = $stateParams.email;

  vm.getMyStats = getMyStats;

  let signups = [];

  getMyStats();

  function getMyStats() {
    let email = $stateParams.email;
    let myScore = {};
    ReferrerService.getReferrers().then( (response) => {
      console.log(response.data.results);
      let allReferrers = response.data.results;
      console.log(allReferrers);
      let myStats = _.filter( allReferrers, function (referrer) {
        return referrer.source === email;
      });
      console.log(myStats);
      myScore.visits = myStats.length;
      console.log(myScore);
      vm.score = myScore;
    });
    ReferrerService.getConversions().then( (response) => {
      console.log(response.data.results);
      let allConversions = response.data.results;
      let myConversions = _.filter(allConversions, function (conversion) {
        return conversion.source === email;
      });
      console.log(myConversions);
      myScore.conversions = myConversions.length;
      myConversions.forEach ( function (conversion) {
        signups.push(conversion.email);
      });
      myScore.converts = signups;

    });
  }

};

MyLeaderboard.$inject = ['$scope', '$state', '$stateParams', 'ReferrerService'];

export default MyLeaderboard;