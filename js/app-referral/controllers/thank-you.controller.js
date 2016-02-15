let ThankYouController = function($scope, $stateParams, $state) {
  
  console.log('yo');

  let vm = this;

  vm.goToLeaderboard = goToLeaderboard;
  vm.goToMyScore     = goToMyScore;

  vm.email = $stateParams.email;

  function goToLeaderboard () {
    $state.go('root.share-leaderboard');
  }

  function goToMyScore (email) {
    $state.go('root.my-leaderboard', {email: email});
  }


};

ThankYouController.$inject = ['$scope', '$stateParams', '$state'];

export default ThankYouController;